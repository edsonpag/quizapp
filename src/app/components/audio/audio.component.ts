import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core'
import Lottie, { AnimationItem } from 'lottie-web'

@Component({
  selector: 'audio-component',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AudioComponent implements OnInit {

  @Input('src')
  src!: string

  @Input('captionsSrc')
  captionsSrc!: string

  @Input('customStyle')
  customStyle!: string

  @ViewChild('audioPlayer', { static: true })
  audioPlayerEl!: ElementRef

  @ViewChild('audio', { static: true })
  audioEl!: ElementRef

  playing = false

  @ViewChild('playPauseBtn', { static: true })
  playPauseBtn!: ElementRef

  mutated = false

  @ViewChild('volumeBtn', { static: true })
  volumeBtn!: ElementRef

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef

  ngOnInit(): void {
    this.audioPlayerEl.nativeElement.style = this.customStyle
    this.attachEvents()
  }

  attachEvents() {
    const playPauseBtnAnimation = Lottie.loadAnimation({
      container: this.playPauseBtn.nativeElement,
      path: "../../../assets/lottie/pause.json",
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "Play Pause Animation"
    })
    this.attachPlayPauseBtnEvent(playPauseBtnAnimation)
    this.attachEndEvent(playPauseBtnAnimation)
    this.attachVolumeBtnEvent()
  }

  attachPlayPauseBtnEvent(playPauseBtnAnimation: AnimationItem) {
    playPauseBtnAnimation.goToAndStop(14, true);
    this.playPauseBtn.nativeElement.addEventListener('click', () => {
      if (this.playing) {
        this.audioEl.nativeElement.pause()
        playPauseBtnAnimation.playSegments([0, 14], true)
        this.playing = false
      } else {
        this.audioEl.nativeElement.play()
        playPauseBtnAnimation.playSegments([14, 27], true)
        this.playing = true
      }
    })
  }

  attachVolumeBtnEvent() {
    const volumeBtnAnimation = Lottie.loadAnimation({
      container: this.volumeBtn.nativeElement,
      path: "../../../assets/lottie/mute.json",
      renderer: 'svg',
      loop: false,
      autoplay: false,
      name: "Volume Animation"
    })
    this.volumeBtn.nativeElement.addEventListener('click', () => {
      if (this.mutated) {
        this.audioEl.nativeElement.volume = '1'
        volumeBtnAnimation.playSegments([14, 27], true)
        this.mutated = false
      } else {
        this.audioEl.nativeElement.volume = '0'
        volumeBtnAnimation.playSegments([0, 14], true)
        this.mutated = true
      }
    })
  }

  attachEndEvent(playPauseBtnAnimation: AnimationItem) {
    this.audioEl.nativeElement.addEventListener('ended', () => {
      this.playing = false;
      playPauseBtnAnimation.playSegments([0, 14], true)
    }, true);
  }
}
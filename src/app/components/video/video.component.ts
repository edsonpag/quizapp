import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input } from '@angular/core'
import Lottie, { AnimationItem } from 'lottie-web'

@Component({
  selector: 'video-component',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VideoComponent implements OnInit {

    @Input('src')
    src!: string
  
    @ViewChild('videoPlayer', { static: true })
    audioPlayerEl!: ElementRef
  
    @ViewChild('video', { static: true })
    videoEl!: ElementRef
  
    playing = false
  
    @ViewChild('playPauseBtn', { static: true })
    playPauseBtn!: ElementRef
  
    mutated = false
  
    @ViewChild('volumeBtn', { static: true })
    volumeBtn!: ElementRef

    ngOnInit(): void {
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
          this.videoEl.nativeElement.pause()
          playPauseBtnAnimation.playSegments([0, 14], true)
          this.playing = false
        } else {
          this.videoEl.nativeElement.play()
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
          this.videoEl.nativeElement.volume = '1'
          volumeBtnAnimation.playSegments([14, 27], true)
          this.mutated = false
        } else {
          this.videoEl.nativeElement.volume = '0'
          volumeBtnAnimation.playSegments([0, 14], true)
          this.mutated = true
        }
      })
    }
  
    attachEndEvent(playPauseBtnAnimation: AnimationItem) {
      this.videoEl.nativeElement.addEventListener('ended', () => {
        this.playing = false;
        playPauseBtnAnimation.playSegments([0, 14], true)
      }, true);
    }
}
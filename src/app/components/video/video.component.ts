import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input, OnDestroy } from '@angular/core'
import Lottie, { AnimationItem } from 'lottie-web'

@Component({
  selector: 'video-component',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VideoComponent implements OnInit, OnDestroy {

    @Input('src')
    src!: string

    @Input()
    poster!: string

    @ViewChild('video', { static: true })
    videoEl!: ElementRef

    @ViewChild('playPauseBtn', { static: true })
    playPauseBtn!: ElementRef

    @ViewChild('volumeBtn', { static: true })
    volumeBtn!: ElementRef

    @ViewChild('fullscreenBtn', { static: true })
    fullscreenBtn!: ElementRef

    playing = false

    canPressPlayPauseBtn = true

    mutated = false

    fullscreen = false

    playPauseBtnAnimation!: AnimationItem

    volumeBtnAnimation!: AnimationItem

    showSecondStopwatch: boolean = false

    interval: any

    ngOnInit(): void {
      //this.createLottieAnimations()
      this.attachEvents()
      this.updatePage()
    }

    ngOnDestroy(): void {
      clearInterval(this.interval)
    }

    createLottieAnimations(): void {
      this.playPauseBtnAnimation = Lottie.loadAnimation({
        container: this.playPauseBtn.nativeElement,
        path: "../../../assets/lottie/pause.json",
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Play Pause Animation"
      })
      this.volumeBtnAnimation = Lottie.loadAnimation({
        container: this.volumeBtn.nativeElement,
        path: "../../../assets/lottie/mute.json",
        renderer: 'svg',
        loop: false,
        autoplay: false,
        name: "Volume Animation"
      })
    }

    attachEvents() {
      this.attachPlayPauseBtnEvent()
      //this.attachEndEvent()
      //this.attachVolumeBtnEvent()
      //this.attachFullscreenBtnEvent()
    }

    attachPlayPauseBtnEvent() {
      /*this.playPauseBtnAnimation.goToAndStop(14, true);
      this.playPauseBtn.nativeElement.addEventListener('click', () => {
        if (this.playing)
          this.pauseVideo()
        else
          this.resumeVideo()
      })*/

      this.videoEl.nativeElement.addEventListener('click', () => {
        if (this.playing)
          this.pauseVideo()
        else
          this.resumeVideo()
      })
    }

    attachEndEvent() {
      this.getVideoEl().addEventListener('ended', () => {
        this.pauseVideo()
      }, true);
    }

    attachVolumeBtnEvent() {
      this.volumeBtn.nativeElement.addEventListener('click', () => {
        if (this.mutated)
          this.unmuteVideo()
        else
          this.muteVideo()
      })
    }

    attachFullscreenBtnEvent() {
      this.fullscreenBtn.nativeElement.addEventListener('click', () => {
        if (this.fullscreen) {
            // @ts-ignore
            this.getVideoEl().exitFullscreen()
        }
        else {
          this.getVideoEl().requestFullscreen()
        }
      })
    }

    getVideoEl(): HTMLVideoElement {
      return this.videoEl.nativeElement
    }

    pauseVideo() {
      if (this.canPressPlayPauseBtn) {
        this.getVideoEl().pause()
        //this.playPauseBtnAnimation.playSegments([0, 14], true)
        this.playing = false
      }
    }

    pauseVideoAndBlockPressPlayPauseBtn() {
      this.pauseVideo()
      this.canPressPlayPauseBtn = false
    }

    resumeVideo() {
      if (this.canPressPlayPauseBtn) {
        this.getVideoEl().play()
        //this.playPauseBtnAnimation.playSegments([14, 27], true)
        this.playing = true
      }
    }

    resumeVideoAndUnblockPressPlayButton() {
      this.canPressPlayPauseBtn = true
      this.resumeVideo()
    }

    unmuteVideo() {
      this.getVideoEl().volume = 1
      this.volumeBtnAnimation.playSegments([14, 27], true)
      this.mutated = false
    }

    muteVideo() {
      this.getVideoEl().volume = 0
      this.volumeBtnAnimation.playSegments([0, 14], true)
      this.mutated = true
    }

    pauseVideoToShowQuestions() {
      this.pauseVideoAndBlockPressPlayPauseBtn()
      document.querySelector('.alternatives-1')?.classList.add('transition-effect')
    }

    resumeVideoAndHideQuestions(alternative: string) {
      this.resumeVideoAndUnblockPressPlayButton()
      document.querySelector('.alternatives-1')?.classList.remove('transition-effect')
    }

    updatePage(): void {
      this.interval = setInterval(() => {
          const vslVideo = document.querySelector('.video-player video') as HTMLVideoElement
          let currentTime = vslVideo.currentTime
          if (currentTime > 415) {
              document.querySelectorAll(".hide").forEach(hideElement => {
                  if (!hideElement.classList.contains('depoiment-added'))
                      hideElement.classList.remove('hide')
              })
              this.showSecondStopwatch = true
              clearInterval(this.interval)
          }
      }, 1000)
  }
}
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
  
    @ViewChild('playPauseBtn', { static: true })
    playPauseBtn!: ElementRef
  
  
    @ViewChild('volumeBtn', { static: true })
    volumeBtn!: ElementRef

    playing = false

    canPressPlayPauseBtn = true

    mutated = false

    playPauseBtnAnimation!: AnimationItem

    volumeBtnAnimation!: AnimationItem

    boundHandleVideoTimeUpdateToShowQuestions = this.handleVideoTimeUpdateToShowQuestions.bind(this)

    ngOnInit(): void {
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
      this.attachEvents()
    }

    attachEvents() {
      this.attachPlayPauseBtnEvent()
      this.attachEndEvent()
      this.attachVolumeBtnEvent()
      this.attachQuestionsToUserEvent()
    }

    attachPlayPauseBtnEvent() {
      this.playPauseBtnAnimation.goToAndStop(14, true);
      this.playPauseBtn.nativeElement.addEventListener('click', () => {
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

    attachQuestionsToUserEvent() {
      this.getVideoEl().addEventListener('timeupdate', this.boundHandleVideoTimeUpdateToShowQuestions)
    }

    handleVideoTimeUpdateToShowQuestions() {
        const TIME_TO_SHOW_QUESTIONS_IN_SECONDS = 8
        const currentTime = this.getVideoEl().currentTime
        if (currentTime > TIME_TO_SHOW_QUESTIONS_IN_SECONDS)
          this.pauseVideoToShowQuestions()
    }

    getVideoEl(): HTMLVideoElement {
      return this.videoEl.nativeElement
    }

    pauseVideo() {
      if (this.canPressPlayPauseBtn) {
        this.getVideoEl().pause()
        this.playPauseBtnAnimation.playSegments([0, 14], true)
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
        this.playPauseBtnAnimation.playSegments([14, 27], true)
        this.playing = true
      }
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
      this.getVideoEl().removeEventListener('timeupdate', this.boundHandleVideoTimeUpdateToShowQuestions)
      document.querySelector('.alternatives-1')?.classList.add('transition-effect')
    }
}
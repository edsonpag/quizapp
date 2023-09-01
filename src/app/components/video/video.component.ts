import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input, OnDestroy } from '@angular/core'
import Lottie, { AnimationItem } from 'lottie-web'
// @ts-ignore
import * as ScrollReveal from "../../libs/scrollreveal/scrollreveal";

@Component({
  selector: 'video-component',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class VideoComponent implements OnInit {

    @Input('src')
    src!: string

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

    ngOnInit(): void {
      this.createLottieAnimations()
      this.attachEvents()
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
      this.attachEndEvent()
      this.attachVolumeBtnEvent()
      //this.attachQuestionsToUserEvent()
      this.attachUpdateMiniCursoPageEvent()
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
      this.getVideoEl().addEventListener('timeupdate', () => {
        const TIME_TO_SHOW_QUESTIONS_IN_SECONDS = 8
        const currentTime = this.getVideoEl().currentTime
        if (currentTime > TIME_TO_SHOW_QUESTIONS_IN_SECONDS)
          this.pauseVideoToShowQuestions()
      })
    }

    attachUpdateMiniCursoPageEvent() {
      this.getVideoEl().addEventListener('timeupdate', () => {
        const TIME_TO_UPDATE_MINI_CURSO_PAGE_IN_SECONDS = 600
        const currentTime = this.getVideoEl().currentTime
        if (TIME_TO_UPDATE_MINI_CURSO_PAGE_IN_SECONDS < currentTime) {
          this.updateMiniCursoPage()
        }
      })
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

    updateMiniCursoPage() {
      document.querySelectorAll(".hide").forEach(el => el.classList.remove("hide"))
      this.addScrollReveal()
    }

    addScrollReveal(): void {
      ScrollReveal({
          reset: true,
          distance: '60px',
          duration: 900,
          delay: 0
      })
      ScrollReveal().reveal('.button-first-page', { origin: 'left' })
      ScrollReveal().reveal('#copy-2-title', { origin: 'left' })
      ScrollReveal().reveal('.copy-part', { origin: 'bottom', interval: 200 })
      ScrollReveal().reveal('.treasure-map-person-name', { origin: 'left' })
      ScrollReveal().reveal('.treasure-map', { origin: 'left' })
      ScrollReveal().reveal('.paragraph-1', { origin: 'left' })
      ScrollReveal().reveal('.paragraph-2', { origin: 'bottom' })
      ScrollReveal().reveal('.list-group li', { origin: 'bottom', interval: 200 })
      ScrollReveal().reveal('.first-button', { origin: 'bottom' })
      ScrollReveal().reveal('.audios h2', { origin: 'bottom' })
      ScrollReveal().reveal('.audios .audio-player', { origin: 'left', interval: 200 })
      ScrollReveal().reveal('.faq-container .faq-title', { origin: 'left' })
      ScrollReveal().reveal('.my-accordion-item', { origin: 'bottom', interval: 200 })
      ScrollReveal().reveal('.last-button', { origin: 'bottom' })
      ScrollReveal().reveal('.still-have-doubts', { origin: 'left' })
      ScrollReveal().reveal('.still-have-doubts-p', { origin: 'left' })
      ScrollReveal().reveal('.change-history-button', { origin: 'bottom' })
  }
}
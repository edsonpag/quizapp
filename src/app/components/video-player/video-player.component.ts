import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { VslPageService } from 'src/app/pages/vsl-page/vsl-page.service';
import { ToastService } from 'src/app/services/app-toast.service';
import { SalesNotificationService } from 'src/app/services/sales-notification.service';
import { SalesNotification } from 'src/app/interfaces/sales-notification';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() videoSrc!: string;
  @Input() poster!: string;
  onTimeUpdateBind: EventListener = this.onTimeUpdate.bind(this);
  onFullscreenBind: EventListener = this.onFullscreen.bind(this);
  salesNotificationInterval: any;

  constructor(private vslPageService: VslPageService, private toastService: ToastService, private salesNotificationService: SalesNotificationService) { }

  private getVideoPlayerElement(): any {
    return (document.querySelector('.video') as HTMLVideoElement);
  }

  ngAfterViewInit(): void {
    this.getVideoPlayerElement().disablePictureInPicture = true;
    this.getVideoPlayerElement().controlsList = "noplaybackrate nodownload";
    this.getVideoPlayerElement().addEventListener("timeupdate", this.onTimeUpdateBind);
    this.getVideoPlayerElement().addEventListener("fullscreenchange", this.onFullscreenBind);
  }

  ngOnDestroy(): void {
    this.getVideoPlayerElement().removeEventListener("timeupdate", this.onTimeUpdateBind);
    this.getVideoPlayerElement().removeEventListener("fullscreenchange", this.onFullscreenBind);
    clearInterval(this.salesNotificationInterval);
  }

  onPlay(): void {
    if (this.getVideoPlayerElement().requestFullscreen) {
      this.getVideoPlayerElement().requestFullscreen();
    }
  }

  onFullscreen(): void {
    if (!document.fullscreenElement && document.activeElement) {
      this.getVideoPlayerElement().pause();
      Swal.fire({
        title: "Você realmente vai desistir agora?",
        text: "O melhor está no final, assista o vídeo completo e viva uma vida épica",
        icon: "warning",
        showCloseButton: true,
        confirmButtonText: "Continuar o vídeo",
      }).then(result => {
        if (result.isConfirmed)
            this.getVideoPlayerElement().play();
      })
    }
  }

  handleSalesNotification(): void {
    this.salesNotificationInterval = setInterval(() => {
      const salesNotification: SalesNotification[] = this.salesNotificationService.getAll();
      if (salesNotification.length > 0) {
        const randomPosition = Math.floor(salesNotification.length * Math.random());
        this.toastService.show({ header: "QuizEducation", body: `${salesNotification[randomPosition].name} acabou de comprar o treinamento`, classname: "bg-success text-light", delay: 4000 });
        this.salesNotificationService.remove(randomPosition);
      }          
    }, 20000);
  }

  onTimeUpdate(): void {
    const TIME_IN_SECONDS_TO_UPDATE_VSL_PAGE = 10;
    const CURRENT_TIME = this.getVideoPlayerElement().currentTime;
    if (CURRENT_TIME > TIME_IN_SECONDS_TO_UPDATE_VSL_PAGE) {
      this.handleSalesNotification();
      this.vslPageService.updateVslPage();
      this.getVideoPlayerElement().removeEventListener("timeupdate", this.onTimeUpdateBind);
      this.getVideoPlayerElement().removeEventListener("fullscreenchange", this.onFullscreenBind);
    }
  }
}
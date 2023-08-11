import { Component, Input, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { VslPageService } from 'src/app/pages/vsl-page/vsl-page.service';
import { ToastService } from 'src/app/services/app-toast.service';
import { SalesNotificationService } from 'src/app/services/sales-notification.service';
import { SalesNotification } from 'src/app/interfaces/sales-notification';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})

export class VideoPlayerComponent implements OnInit {
  @Input() videoSrc!: string;
  @Input() poster!: string;
  @Input() profission!: string;
  salesNotificationInterval: any;
  currentTime: number = 0;
  timer: any;


  constructor(private vslPageService: VslPageService, private toastService: ToastService, private salesNotificationService: SalesNotificationService) { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      const TIME_IN_SECONDS_TO_UPDATE_VSL_PAGE = 600;
      console.log(this.currentTime)
      if (this.currentTime > TIME_IN_SECONDS_TO_UPDATE_VSL_PAGE) {
        this.handleSalesNotification();
        this.vslPageService.updateVslPage();
        this.stopTimer()
      }
      this.currentTime++
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  handleSalesNotification(): void {
    this.salesNotificationInterval = setInterval(() => {
      const salesNotification: SalesNotification[] = this.salesNotificationService.getAll();
      if (salesNotification.length > 0) {
        const randomPosition = Math.floor(salesNotification.length * Math.random());
        this.toastService.show({ header: "QuizEducation", body: `${salesNotification[randomPosition].name} acabou de comprar o treinamento`, classname: "bg-success text-light", delay: 4000 });
        this.salesNotificationService.remove(randomPosition);
      }          
    }, 14000);
  }
}
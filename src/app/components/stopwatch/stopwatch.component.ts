import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'stopwatch-component',
    templateUrl: './stopwatch.component.html',
    styleUrls: ['./stopwatch.component.css']
})

export class StopWatchComponent implements OnInit {
    remainingTime!: number;

    timer: any;

    formattedTimer: string = "";

    ngOnInit(): void {
        this.resetTimer();
        this.startTimer();
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (this.remainingTime > 0) {
                this.remainingTime--;
                this.formatTime();
            } else {
                this.stopTimer();
            }
        }, 1000);
    }

    formatTime() {
        const hours = Math.floor(this.remainingTime / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((this.remainingTime % 3600) / 60).toString().padStart(2, '0');
        const seconds = (this.remainingTime % 60).toString().padStart(2, '0');
        this.formattedTimer = `${hours}:${minutes}:${seconds}`;
    }

    resetTimer() {
        this.remainingTime = 15 * 60;
        this.formatTime();
        this.stopTimer();
    }

    stopTimer() {
        clearInterval(this.timer);
    }
}
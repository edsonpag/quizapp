import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'ia-loading-page',
    templateUrl: './ia-loading-page.component.html',
    styleUrls: ['./ia-loading-page.component.css']
})

export class IALoadingPageComponent implements AfterViewInit {
    value: number = 0;

    @ViewChild('loading') loading!: ElementRef;

    constructor(private router: Router) { }

    ngAfterViewInit(): void {
        this.updateProgressBar();
    }

    updateProgressBar(): void {
        const MAX_VALUE_ALLOWED = 100;
        const MAX_VALUE_TO_INCREMENT = 30;
        const interval = setInterval(() => {
            const randomValueToIncrement = Math.floor(Math.random() * MAX_VALUE_TO_INCREMENT) + 1;
            const incrementedValue = this.value + randomValueToIncrement;
            if (incrementedValue > MAX_VALUE_ALLOWED) {
                this.value = MAX_VALUE_ALLOWED;
                clearInterval(interval);
                setTimeout(() => {
                    this.loading.nativeElement.classList.add('hide');
                    this.router.navigate(['quiz/profission']);

                }, 600)
            } else {
                this.value = incrementedValue
            }
        }, 600);
    }
}
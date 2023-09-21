import { Component, OnInit, AfterViewInit, inject } from "@angular/core";
import { CarouselService } from "./carousel.service";

@Component({
    selector: 'carousel-component',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})

export class CarouseLComponent implements OnInit, AfterViewInit {
  currentSlideIndex: number = 0;
  slides: { image: string, text: string }[] = [];
  carouselService: CarouselService = inject(CarouselService);

  ngOnInit(): void {
    this.slides = this.carouselService.getSlides();
  }

  ngAfterViewInit(): void {
    this.attachCarouselEventListener()
  }

  attachCarouselEventListener(): void {
    const carousel = document.querySelector("#carouselExampleCaptions")
    carousel?.addEventListener('slid.bs.carousel', (event: any) => {
      this.currentSlideIndex = event.to
    })
  }
}
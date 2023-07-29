import { Component, OnInit, inject } from "@angular/core";
import { NgbSlideEvent } from "@ng-bootstrap/ng-bootstrap";
import { CarouselService } from "./carousel.service";

@Component({
    selector: 'carousel-component',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})

export class CarouseLComponent implements OnInit {
  currentSlideIndex: number = 0;
  slides: { image: string, text: string }[] = [];
  carouselService: CarouselService = inject(CarouselService);

  ngOnInit(): void {
    this.slides = this.carouselService.getSlides();
  }
}
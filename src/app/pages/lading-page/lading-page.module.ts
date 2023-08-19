import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LadingPageRoutingModule } from './lading-page-routing.module';
import { LadingPageComponent } from './lading-page.component';
import { TopicComponent } from '../../components/topics/topic.component';
import { CarouseLComponent } from '../../components/carousel/carousel.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SecurityContainerComponent } from '../../components/security-container/security-container.component';
import { ButtonModule } from 'src/app/components/button/button.module';

@NgModule({
    imports: [
        LadingPageRoutingModule,
        NgbNavModule,
        NgbCarouselModule,
        ButtonModule,
        CommonModule
    ],
    declarations: [
        LadingPageComponent,
        SecurityContainerComponent,
        TopicComponent,
        CarouseLComponent,
        FooterComponent,
    ],
    exports: []
})


export class LadingPageModulo { }
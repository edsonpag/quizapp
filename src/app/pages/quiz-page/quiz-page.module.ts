import { NgModule } from "@angular/core";
import { QuizPageRoutingModule } from "./quiz-page-routing.module";
import { QuizPageComponent } from "./quiz-page.component";
import { NgbProgressbarConfig, NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "src/app/components/button/button.module";

@NgModule({
    imports: [
        QuizPageRoutingModule,
        NgbProgressbarModule,
        ButtonModule,
        CommonModule
    ],
    declarations: [
        QuizPageComponent,
    ],
    exports: [],
    providers: [
        NgbProgressbarConfig
    ]
})

export class QuizPageModule {
    constructor(config: NgbProgressbarConfig) {
        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.height = '35px';
        config.showValue = true;
    }
}
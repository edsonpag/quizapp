import { NgModule } from "@angular/core";
import { NgbRatingConfig, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";
import { DepoimentsComponent } from "./depoiments.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        NgbRatingModule,
        CommonModule
    ],
    declarations: [
        DepoimentsComponent
    ],
    exports: [
        DepoimentsComponent
    ],
    providers: [
        NgbRatingConfig
    ]
})

export class DepoimentsModule {
    constructor(config: NgbRatingConfig) {
		config.max = 5;
		config.readonly = true;
	}
}
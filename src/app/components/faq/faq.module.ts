import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FaqComponent } from "./faq.component";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        NgbAccordionModule
    ],
    declarations: [
        FaqComponent
    ],
    exports: [
        FaqComponent
    ]
})

export class FaqModule { }
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { DepoimentFormComponent } from "./depoiment-form.component";
import { NgbAlertModule, NgbRatingModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        NgbAlertModule,
        NgbRatingModule
    ],
    declarations: [
        DepoimentFormComponent
    ],
    exports: [
        DepoimentFormComponent
    ]
})

export class DepoimentFormModule { }
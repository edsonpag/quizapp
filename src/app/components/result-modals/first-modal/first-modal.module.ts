import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FirstModalComponent } from "./first-modal.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FirstModalComponent
    ],
    exports: [
        FirstModalComponent
    ]
})

export class FirstModalModule { }
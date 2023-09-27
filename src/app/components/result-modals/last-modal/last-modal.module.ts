import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LastModalComponent } from "./last-modal";
import { PremiumModalModule } from "../premium-modal/premium-modal.module";

@NgModule({
    imports: [
        CommonModule,
        PremiumModalModule
    ],
    declarations: [
        LastModalComponent
    ],
    exports: [
        LastModalComponent
    ]
})

export class LastModalModule { }
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PremiumModalComponent } from "./premium-modal";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PremiumModalComponent
    ],
    exports: [
        PremiumModalComponent
    ]
})

export class PremiumModalModule { }
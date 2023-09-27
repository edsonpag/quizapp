import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DefaultModalComponent } from "./default-modal";
import { PremiumModalModule } from "../premium-modal/premium-modal.module";

@NgModule({
    imports: [
        CommonModule,
        PremiumModalModule
    ],
    declarations: [
        DefaultModalComponent
    ],
    exports: [
        DefaultModalComponent
    ]
})

export class DefaultModalModule { }
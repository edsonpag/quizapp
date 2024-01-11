import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResultPageRoutingModule } from "./premium-page-routing.module";
import { PremiumPageComponent } from "./premium-page.component";
import { FirstModalModule } from "src/app/components/result-modals/first-modal/first-modal.module";
import { DefaultModalModule } from "src/app/components/result-modals/default-modal/default-modal.module";
import { LastModalModule } from "src/app/components/result-modals/last-modal/last-modal.module";

@NgModule({
    imports: [
        ResultPageRoutingModule,
        CommonModule,
        FirstModalModule,
        DefaultModalModule,
        LastModalModule,
    ],
    declarations: [
        PremiumPageComponent
    ],
    exports: []
})

export class PremiumPageModule {}
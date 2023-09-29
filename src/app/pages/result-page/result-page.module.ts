import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepoimentFormModule } from "src/app/components/depoiment-form/depoiment-form.module";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";
import { FaqModule } from "src/app/components/faq/faq.module";
import { ResultPageRoutingModule } from "./result-page-routing.module";
import { ResultPageComponent } from "./result-page.component";
import { FirstModalModule } from "src/app/components/result-modals/first-modal/first-modal.module";
import { DefaultModalModule } from "src/app/components/result-modals/default-modal/default-modal.module";
import { LastModalModule } from "src/app/components/result-modals/last-modal/last-modal.module";
import { PremiumModalModule } from "src/app/components/result-modals/premium-modal/premium-modal.module";
import { StopWatchModule } from "src/app/components/stopwatch/stopwatch.module";

@NgModule({
    imports: [
        ResultPageRoutingModule,
        CommonModule,
        DepoimentFormModule,
        DepoimentsModule,
        FirstModalModule,
        DefaultModalModule,
        LastModalModule,
        PremiumModalModule,
        StopWatchModule,
        FaqModule
    ],
    declarations: [
        ResultPageComponent
    ],
    exports: []
})

export class ResultPageModule {}
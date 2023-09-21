import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepoimentFormModule } from "src/app/components/depoiment-form/depoiment-form.module";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";
import { FaqModule } from "src/app/components/faq/faq.module";
import { ResultPageRoutingModule } from "./result-page-routing.module";
import { ResultPageComponent } from "./result-page.component";
import { FirstModalComponent } from "src/app/components/result-modals/first-modal/first-modal.component";
import { DefaultModalComponent } from "src/app/components/result-modals/default-modal/default-modal";
import { LastModalComponent } from "src/app/components/result-modals/last-modal/last-modal";

@NgModule({
    imports: [
        ResultPageRoutingModule,
        CommonModule,
        DepoimentFormModule,
        DepoimentsModule,
        FaqModule
    ],
    declarations: [
        ResultPageComponent,
        FirstModalComponent,
        DefaultModalComponent,
        LastModalComponent
    ],
    exports: []
})

export class ResultPageModule {}
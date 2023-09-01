import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepoimentFormModule } from "src/app/components/depoiment-form/depoiment-form.module";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";
import { FaqModule } from "src/app/components/faq/faq.module";
import { WhatsAppPageComponent } from "./whatsapp-page.component";
import { WhatsAppPageRoutingModule } from "./whatsapp-page-routing.module";

@NgModule({
    imports: [
        WhatsAppPageRoutingModule,
        CommonModule,
        DepoimentFormModule,
        DepoimentsModule,
        FaqModule
    ],
    declarations: [
        WhatsAppPageComponent
    ],
    exports: []
})

export class WhatsAppPageModule {}
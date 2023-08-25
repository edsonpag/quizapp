import { NgModule } from "@angular/core";
import { VlsPageComponent } from "./vsl-page.component";
import { VslPageRoutingModule } from "./vsl-page-routing.module";
import { CommonModule } from "@angular/common";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";
import { DepoimentFormModule } from "src/app/components/depoiment-form/depoiment-form.module";
import { FaqModule } from "src/app/components/faq/faq.module";
import { AudioModule } from "src/app/components/audio/audio.module";
import { VideoModule } from "src/app/components/video/video.module";

@NgModule({
    imports: [
        VslPageRoutingModule,
        DepoimentsModule,
        DepoimentFormModule,
        FaqModule,
        AudioModule,
        VideoModule,
        CommonModule
    ],
    declarations: [
        VlsPageComponent
    ],
    exports: []
})

export class VslPageModule {}
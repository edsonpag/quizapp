import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";
import { DepoimentFormModule } from "src/app/components/depoiment-form/depoiment-form.module";
import { FaqModule } from "src/app/components/faq/faq.module";
import { AudioModule } from "src/app/components/audio/audio.module";
import { VideoModule } from "src/app/components/video/video.module";
import { MiniCursoPageRoutingModule } from "./mini-curso-routing.module";
import { MiniCursoPageComponent } from "./mini-curso.component";

@NgModule({
    imports: [
        MiniCursoPageRoutingModule,
        DepoimentsModule,
        DepoimentFormModule,
        FaqModule,
        AudioModule,
        VideoModule,
        CommonModule
    ],
    declarations: [
        MiniCursoPageComponent
    ],
    exports: []
})

export class MiniCursoPageModule {}
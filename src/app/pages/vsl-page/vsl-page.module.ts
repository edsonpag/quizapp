import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VslPageComponent } from "./vsl-page.component";
import { VslPageRoutingModule } from "./vsl-page-routing.module";
import { VideoModule } from "src/app/components/video/video.module";
import { DepoimentFormModule } from "src/app/components/depoiment-form/depoiment-form.module";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";

@NgModule({
    imports: [
        CommonModule,
        VideoModule,
        VslPageRoutingModule,
        DepoimentFormModule,
        DepoimentsModule
    ],
    declarations: [
        VslPageComponent
    ],
    exports: [
        VslPageComponent
    ]
})

export class VslPageModule { }
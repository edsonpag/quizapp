import { NgModule } from "@angular/core";
import { VideoPlayerModule } from "src/app/components/video-player/video-player.module";
import { VlsPageComponent } from "./vsl-page.component";
import { VslPageRoutingModule } from "./vsl-page-routing.module";
import { CommonModule } from "@angular/common";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";
import { StopWatchModule } from "src/app/components/stopwatch/stopwatch.module";

@NgModule({
    imports: [
        VslPageRoutingModule,
        VideoPlayerModule,
        DepoimentsModule,
        StopWatchModule,
        CommonModule
    ],
    declarations: [
        VlsPageComponent
    ],
    exports: []
})

export class VslPageModule {}
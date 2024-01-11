import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { VideoComponent } from "./video.component";
import { StopWatchModule } from "../stopwatch/stopwatch.module";

@NgModule({
    imports: [
        CommonModule,
        StopWatchModule
    ],
    declarations: [
        VideoComponent
    ],
    exports: [
        VideoComponent
    ]
})

export class VideoModule { }
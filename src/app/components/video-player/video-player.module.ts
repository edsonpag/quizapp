import { NgModule } from "@angular/core";
import { VideoPlayerComponent } from "./video-player.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        VideoPlayerComponent
    ],
    exports: [
        VideoPlayerComponent
    ]
})

export class VideoPlayerModule { }
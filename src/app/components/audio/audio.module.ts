import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AudioComponent } from "./audio.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AudioComponent
    ],
    exports: [
        AudioComponent
    ]
})

export class AudioModule { }
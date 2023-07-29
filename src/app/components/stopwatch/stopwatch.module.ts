import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StopWatchComponent } from "./stopwatch.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StopWatchComponent
    ],
    exports: [
        StopWatchComponent
    ]
})

export class StopWatchModule {}
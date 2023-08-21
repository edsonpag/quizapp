import { NgModule } from "@angular/core";
import { ResultsPageComponent } from "./results-page.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ResultsPageRoutingModule } from "./results-page-routing.module";

@NgModule({
    imports: [
        NgxMaskDirective,
        NgxMaskPipe,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        ResultsPageRoutingModule,
        CommonModule
    ],
    declarations: [
        ResultsPageComponent
    ],
    exports: [
        ResultsPageComponent
    ],
    providers: [
        provideNgxMask()
    ]
})

export class ResultsPageModule { }
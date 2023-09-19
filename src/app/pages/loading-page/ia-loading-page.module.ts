import { NgModule } from "@angular/core";
import { IALoadingPageComponent } from "./ia-loading-pagecomponent";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { IALoadingPageRoutingModule } from "./ia-loading-page-routing.module";

@NgModule({
    imports: [
        NgxMaskDirective,
        NgxMaskPipe,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        IALoadingPageRoutingModule,
        CommonModule
    ],
    declarations: [
        IALoadingPageComponent
    ],
    exports: [
        IALoadingPageComponent
    ],
    providers: [
        provideNgxMask()
    ]
})

export class IALoadingPageModule { }
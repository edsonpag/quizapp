import { NgModule } from "@angular/core";
import { VlsPageComponent } from "./vsl-page.component";
import { VslPageRoutingModule } from "./vsl-page-routing.module";
import { CommonModule } from "@angular/common";
import { DepoimentsModule } from "src/app/components/depoiments/depoiments.module";

@NgModule({
    imports: [
        VslPageRoutingModule,
        DepoimentsModule,
        CommonModule
    ],
    declarations: [
        VlsPageComponent
    ],
    exports: []
})

export class VslPageModule {}
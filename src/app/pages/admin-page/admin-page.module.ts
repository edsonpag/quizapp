import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminPageComponent } from "./admin-page.component";
import { AdminPageRoutingModule } from "./admin-page-routing.module";


@NgModule({
    imports: [
        CommonModule,
        AdminPageRoutingModule
    ],
    declarations: [
        AdminPageComponent
    ],
    exports: []
})

export class AdmingPageModule { }
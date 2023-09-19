import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { VslPageComponent } from "./vsl-page.component";

const routes: Routes = [
    {
        path: '',
        component: VslPageComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class VslPageRoutingModule { }
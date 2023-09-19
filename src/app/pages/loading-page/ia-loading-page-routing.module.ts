import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IALoadingPageComponent } from "./ia-loading-pagecomponent";

const routes: Routes = [
    {
        path: '',
        component: IALoadingPageComponent
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

export class IALoadingPageRoutingModule { }

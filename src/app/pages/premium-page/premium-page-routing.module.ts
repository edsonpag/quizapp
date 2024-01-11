import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PremiumPageComponent } from "./premium-page.component";

const routes: Routes = [
    {
        path: '',
        component: PremiumPageComponent
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

export class ResultPageRoutingModule { }
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { VlsPageComponent } from "./vsl-page.component";
import { authenticationVslPageGuard } from "src/app/guard/vsl-page.guard";

const routes: Routes = [
    {
        path: '',
        component: VlsPageComponent,
        canActivate: [authenticationVslPageGuard()]
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

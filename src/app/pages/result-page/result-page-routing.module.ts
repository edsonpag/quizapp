import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ResultPageComponent } from "./result-page.component";
import { authenticationResultPageGuard } from "src/app/guard/result-page.guard";

const routes: Routes = [
    {
        path: '',
        component: ResultPageComponent,
        canActivate: [authenticationResultPageGuard()]
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
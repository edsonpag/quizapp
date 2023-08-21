import { NgModule } from "@angular/core";
import { AdminPageComponent } from "./admin-page.component";
import { RouterModule, Routes } from "@angular/router";
import { authenticationGuardAdminPage } from "src/app/guard/admin-page.guard";

const routes: Routes = [
    {
        path: '',
        component: AdminPageComponent,
        canActivate: [authenticationGuardAdminPage()]
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

export class AdminPageRoutingModule { }
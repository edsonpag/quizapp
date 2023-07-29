import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ResultsPageComponent } from "./results-page.component";
import { authenticationGuardResultsPage } from "src/app/guard/results-page.guard";

const routes: Routes = [
    {
        path: '',
        component: ResultsPageComponent,
        canActivate: [authenticationGuardResultsPage()]
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

export class ResultsPageRoutingModule { }

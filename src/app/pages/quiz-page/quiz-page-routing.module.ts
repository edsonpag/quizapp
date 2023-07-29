import { RouterModule, Routes } from "@angular/router";
import { QuizPageComponent } from "./quiz-page.component";
import { NgModule } from "@angular/core";
import { authenticationGuardQuizPage } from "src/app/guard/quiz-page.guard";

const routes: Routes = [
    {
        path: '',
        component: QuizPageComponent,
        canActivate: [authenticationGuardQuizPage()]
    },
    {
        path: 'results',
        loadChildren: () => import('../results-page/results-page.module').then(resultsPageModule => resultsPageModule.ResultsPageModule)
    },
    {
        path: 'profission',
        loadChildren: () => import('../vsl-page/vsl-page.module').then(vslPageModule => vslPageModule.VslPageModule)
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

export class QuizPageRoutingModule {
    
}
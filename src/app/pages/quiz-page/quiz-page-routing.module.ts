import { RouterModule, Routes } from "@angular/router";
import { QuizPageComponent } from "./quiz-page.component";
import { NgModule } from "@angular/core";
import { authenticationGuardQuizPage } from "src/app/guard/quiz-page.guard";
import { authenticationGuardCompletedQuiz } from "src/app/guard/completed-quiz.guard";

const routes: Routes = [
    {
        path: '',
        component: QuizPageComponent,
        canActivate: [authenticationGuardQuizPage()]
    },
    {
        path: 'results',
        loadChildren: () => import('../results-page/results-page.module').then(resultsPageModule => resultsPageModule.ResultsPageModule),
        canActivate: [authenticationGuardCompletedQuiz()]
    },
    {
        path: 'profission',
        loadChildren: () => import('../whatsapp-page/whatsapp-page.module').then(whatsAppPageModule => whatsAppPageModule.WhatsAppPageModule)
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

export class QuizPageRoutingModule { }
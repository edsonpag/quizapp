import { RouterModule, Routes } from "@angular/router";
import { QuizPageComponent } from "./quiz-page.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',
        component: QuizPageComponent
    },
    {
        path: 'loading',
        loadChildren: () => import('../loading-page/ia-loading-page.module').then(aiLoadingPageModule => aiLoadingPageModule.IALoadingPageModule),
    },
    {
        path: 'result',
        loadChildren: () => import('../result-page/result-page.module').then(resultPageModule => resultPageModule.ResultPageModule)
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
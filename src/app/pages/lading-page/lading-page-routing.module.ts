import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPageComponent } from './lading-page.component';

const routes: Routes = [
    {
        path: '',
        component: LadingPageComponent
    },
    {
        path: 'quiz',
        loadChildren: () => import('../quiz-page/quiz-page.module').then(quizPageModule => quizPageModule.QuizPageModule)
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

export class LadingPageRoutingModule { }
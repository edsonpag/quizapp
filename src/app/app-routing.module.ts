import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuardCompletedQuiz } from './guard/lading-page.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/lading-page/lading-page.module').then(ladingPageModulo => ladingPageModulo.LadingPageModulo),
    canActivate: [authenticationGuardCompletedQuiz()]
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz-page/quiz-page.module').then(quizPageModule => quizPageModule.QuizPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

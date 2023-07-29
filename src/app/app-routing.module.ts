import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/lading-page/lading-page.module').then(ladingPageModulo => ladingPageModulo.LadingPageModulo)
  },
  {
    path: 'age',
    loadChildren: () => import("./pages/age-page/age-page.module").then(agePageModulo => agePageModulo.AgePageModulo)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz-page/quiz-page.module').then(quizPageModule => quizPageModule.QuizPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

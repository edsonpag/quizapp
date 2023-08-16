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
  },
  {
    path: 'admin/644ecc8c-f0c2-4e39-bd22-af2c036bcc68',
    loadChildren: () => import('./pages/admin-page/admin-page.module').then(adminPageModule => adminPageModule.AdmingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

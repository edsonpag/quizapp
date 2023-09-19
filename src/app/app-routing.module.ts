import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticationGuardMiniCurso } from './guard/mini-curso-page.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/vsl-page/vsl-page.module').then(vslPageModule => vslPageModule.VslPageModule)
  },
  {
    path: 'aplicativo',
    loadChildren: () => import('./pages/lading-page/lading-page.module').then(ladingPageModulo => ladingPageModulo.LadingPageModulo)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./pages/quiz-page/quiz-page.module').then(quizPageModule => quizPageModule.QuizPageModule)
  },
  {
    path: 'admin/644ecc8c-f0c2-4e39-bd22-af2c036bcc68',
    loadChildren: () => import('./pages/admin-page/admin-page.module').then(adminPageModule => adminPageModule.AdmingPageModule)
  },
  {
    path: 'mini-curso',
    loadChildren: () => import('./pages/mini-curso-page/mini-curso.module').then(miniCursoPageModule => miniCursoPageModule.MiniCursoPageModule),
    canActivate: [authenticationGuardMiniCurso()]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

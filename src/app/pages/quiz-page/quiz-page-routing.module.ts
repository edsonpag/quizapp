import { RouterModule, Routes } from "@angular/router";
import { QuizPageComponent } from "./quiz-page.component";
import { NgModule } from "@angular/core";
import { authenticationGuardIALoadingPage } from "src/app/guard/loading-page.guard";

const routes: Routes = [
    {
        path: '',
        component: QuizPageComponent
    },
    {
        path: 'loading',
        loadChildren: () => import('../loading-page/ia-loading-page.module').then(aiLoadingPageModule => aiLoadingPageModule.IALoadingPageModule),
        canActivate: [authenticationGuardIALoadingPage()]
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
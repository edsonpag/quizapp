import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPageComponent } from './lading-page.component';

const routes: Routes = [
    {
        path: '',
        component: LadingPageComponent
    },
    {
        path: 'age',
        loadChildren: () => import("../age-page/age-page.module").then(agePageModulo => agePageModulo.AgePageModulo),
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
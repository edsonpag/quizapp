import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgePageComponent } from './age-page.component';

const routes: Routes = [
    {
        path: '',
        component: AgePageComponent
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

export class AgePageRoutingModule {}
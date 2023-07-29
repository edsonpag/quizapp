import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadingPageComponent } from './lading-page.component';

const routes: Routes = [
    {
        path: '',
        component: LadingPageComponent
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

export class LadingPageRoutingModule {}
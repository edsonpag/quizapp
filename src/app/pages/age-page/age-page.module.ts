import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgePageComponent } from './age-page.component';
import { AgePageRoutingModule } from './age-page-routing.module';

@NgModule({
    imports: [
        AgePageRoutingModule,
        CommonModule
    ],
    declarations: [
        AgePageComponent
    ],
    exports: []
})


export class AgePageModulo {}
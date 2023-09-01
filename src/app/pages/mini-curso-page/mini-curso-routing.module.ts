import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MiniCursoPageComponent } from "./mini-curso.component";

const routes: Routes = [
    {
        path: '',
        component: MiniCursoPageComponent
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

export class MiniCursoPageRoutingModule { }
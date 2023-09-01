import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { WhatsAppPageComponent } from "./whatsapp-page.component";
import { authenticationWhatsAppPageGuard } from "src/app/guard/whatsapp-page.guard";

const routes: Routes = [
    {
        path: '',
        component: WhatsAppPageComponent,
        canActivate: [authenticationWhatsAppPageGuard()]
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

export class WhatsAppPageRoutingModule { }

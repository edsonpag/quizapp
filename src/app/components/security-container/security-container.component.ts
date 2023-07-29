import { Component } from "@angular/core";

@Component({
    selector: 'security-container',
    templateUrl: './security-container.component.html',
    styleUrls: ['./security-container.component.css']
})

export class SecurityContainerComponent {
    items = 
    [
        {
            alt: "Selo de 100% de privacidade",
            path: "../../../assets/img/privacity.png",
            text: "Privacidade Protegida"
        },
        {
            alt: "Selo de navegação 100% segura",
            path: "../../../assets/img/navegacao-segura.png",
            text: "Navegação Segura"
        },
        {
            alt: "Selo de 100% de segurança",
            path: "../../../assets/img/security.png",
            text: "Selo Site Seguro"
        }
    ]
}
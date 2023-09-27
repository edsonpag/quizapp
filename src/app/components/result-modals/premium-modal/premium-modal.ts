import { Component } from "@angular/core";

@Component({
    selector: 'premium-modal',
    templateUrl: './premium-modal.html',
    styleUrls: ['./premium-modal.css']
})

export class PremiumModalComponent {
    
    goToCheckout(): void {
        window.open('https://pay.kiwify.com.br/u1XZFEI', '_blank')
    }
}
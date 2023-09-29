import { Component, Input } from "@angular/core";

@Component({
    selector: 'premium-modal',
    templateUrl: './premium-modal.html',
    styleUrls: ['./premium-modal.css']
})

export class PremiumModalComponent {

    @Input()
    title!: string

    constructor() { }
    
    goToCheckout(): void {
        const leadName = localStorage.getItem('lead_name')
        const leadEmail = localStorage.getItem('lead_email')
        const leadCellphoneNumber = localStorage.getItem('lead_cellphoneNumber')
        let checkoutUrl = `https://pay.kiwify.com.br/u1XZFEI`
        if (leadName && leadEmail && leadCellphoneNumber)
            checkoutUrl += `?name=${leadName}&email=${leadEmail}&phone=${leadCellphoneNumber}`
        window.open(checkoutUrl, '_blank')
    }
}
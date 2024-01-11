import { Component } from "@angular/core";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { QuizService } from "src/app/services/quiz.service";

@Component({
    selector: 'premium-page',
    templateUrl: './premium-page.component.html',
    styleUrls: ['./premium-page.component.css']
})

export class PremiumPageComponent {
    resultData

    pageData: any = {
        avatar: "",
        alt: "",
        personalityDescription: "",
        pages: [],
        professions: []
    }

    currentPage = 0

    numberOfPages = 0

    personalities = ["", "Comunicativa", "Estável", "Analítica"]

    depoiments

    constructor(private quizService: QuizService, private depoimentsService: DepoimentsService) {
        this.resultData = this.quizService.getResult()
        this.depoiments = this.depoimentsService.getAll()
    }

    async ngOnInit(): Promise<void> {
        await this.loadPageData()
        this.updateNumberOfPages()
        this.addGooglePixel()
    }

    async loadPageData(): Promise<any> {
        this.pageData = await import(`../../configs/pages/${this.resultData.category.name}.json`)
    }

    updateNumberOfPages(): void {
        const firstPage = 1
        const allDefaultPages = this.pageData.pages.length
        const lastPage = 1
        this.numberOfPages = firstPage + allDefaultPages + lastPage
    }

    addGooglePixel(): void {
        // @ts-ignore
        gtag('event', 'conversion', {
            'send_to': 'AW-11296404846/eFL7CLDc6ucYEO7qxYoq',
            'transaction_id': ''
        });
    }

    nextSlide(): void {
        this.currentPage++;
    }

    goToPage(pageNumber: number) {
        this.currentPage = pageNumber
    }

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
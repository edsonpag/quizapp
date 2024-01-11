import { Component } from "@angular/core";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { QuizService } from "src/app/services/quiz.service";

@Component({
    selector: 'vsl-page',
    templateUrl: './vsl-page.component.html',
    styleUrls: ['./vsl-page.component.css']
})

export class VslPageComponent {

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

    goToCheckout(): void {
        const leadName = localStorage.getItem('lead_name')
        const leadEmail = localStorage.getItem('lead_email')
        const leadCellphoneNumber = localStorage.getItem('lead_cellphoneNumber')
        let checkoutUrl = `https://pay.kiwify.com.br/Qb6YTZk`
        if (leadName && leadEmail && leadCellphoneNumber)
            checkoutUrl += `?name=${leadName}&email=${leadEmail}&phone=${leadCellphoneNumber}`
        window.open(checkoutUrl, '_blank')
    }
}


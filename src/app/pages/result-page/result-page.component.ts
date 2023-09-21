import { Component, OnDestroy, OnInit } from "@angular/core";
import { DarkModeService } from "src/app/services/dark-mode.service";
import { QuizService } from "src/app/services/quiz.service";

@Component({
    selector: 'result-page',
    templateUrl: './result-page.component.html',
    styleUrls: ['./result-page.component.css']
})

export class ResultPageComponent implements OnInit, OnDestroy {


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

    constructor(private quizService: QuizService, private darkModeService: DarkModeService) {
        this.resultData = this.quizService.getResult()
    }

    async ngOnInit(): Promise<void> {
        this.darkModeService.addDarkMode()
        await this.loadPageData()
        this.updateNumberOfPages()
    }

    ngOnDestroy(): void {
        this.darkModeService.removeDarkMode()
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

    nextSlide(): void {
        this.currentPage++;
    }

    goToPage(pageNumber: number) {
        this.currentPage = pageNumber
    }
}
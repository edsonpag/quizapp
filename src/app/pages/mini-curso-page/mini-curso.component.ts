import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { Depoiment } from "src/app/interfaces/depoiment.interface";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { QuizService } from "../quiz-page/quiz.service";
import { Result } from "src/app/interfaces/results.interface";
import { Checkout } from "src/app/enums/checkout.enum";
import { FormDataQuiz } from "src/app/interfaces/form-data.interface";
import { SalesNotificationService } from "src/app/services/sales-notification.service";
import { ToastService } from "src/app/services/app-toast.service";
import PageData from "src/app/interfaces/page-data.interface";
// @ts-ignore
import * as ScrollReveal from "../../libs/scrollreveal/scrollreveal";

@Component({
    selector: 'mini-curso',
    templateUrl: './mini-curso.component.html',
    styleUrls: ['./mini-curso.component.css']
})

export class MiniCursoPageComponent implements OnInit, AfterViewInit, OnDestroy {

    vslData: Result;
    
    checkoutLink: string = "";
    
    depoiments: Depoiment[] = []

    pageData: PageData = {
        copy1: "",
        copy2: "",
        copy3: "",
        copy4: "",
        copy5: "",
        copy6: "",
        copy7: "",
        copy8: "",
        copy9: "",
        copy10: "",
        copy11: "",
        videoSrc: ""
    }

    newCopy1: string = ""

    constructor(private depoimentsService: DepoimentsService, public quizService: QuizService, private salesNotificationService: SalesNotificationService, private toastService: ToastService) {
        this.vslData = this.quizService.getVslData()
        this.checkoutLink = new Checkout().links[this.vslData.category.index]
        this.depoiments = this.depoimentsService.getAll()
    }

    ngOnInit(): void {
        this.addConversionEventGoogleAds()
        this.addDarkMode()
        this.attachEvents()
    }

    async ngAfterViewInit(): Promise<void> {
        await this.fillPage()
        this.addScrollReveal()
    }

    ngOnDestroy(): void {
        this.removeConversionEventGoogleAds()
        this.removeDarkMode()
    }

    addConversionEventGoogleAds(): void {
        let script = document.createElement('script');
        script.id = 'script-conversao-lead'
        script.textContent = `gtag('event', 'conversion', {'send_to': 'AW-11296404846/Xq5gCPr2htMYEO7qxYoq'});`
        document.head.appendChild(script);
    }

    addDarkMode(): void {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "white";
    }

    attachEvents(): void {
        this.attachVslButtonClickEvent()
        this.attachChangeHistoryButtonClickEvent()
    }

    attachVslButtonClickEvent(): void {
        document.querySelectorAll('.vsl-button').forEach(vslButtonEl => vslButtonEl.addEventListener('click', () => {
            const formDataQuiz: FormDataQuiz = this.quizService.getFormDateQuiz();
            let queryParms = "?";
            queryParms += "name=" + formDataQuiz.name;
            queryParms += "&"
            queryParms += "email=" + formDataQuiz.email;
            queryParms += "&"
            queryParms += "phone=" + formDataQuiz.cellphoneNumber;
            window.open(this.checkoutLink + queryParms, "_blank")
        }))
    }

    attachChangeHistoryButtonClickEvent(): void {
        const changeHistoryButton = document.querySelector(".change-history-button")
        changeHistoryButton?.addEventListener('click', () => {
            const fullname = this.quizService.getFormDateQuiz().name
            const treasureMapPersonName = document.querySelector('.treasure-map-person-name')
            if (fullname && treasureMapPersonName) {
                treasureMapPersonName.textContent = fullname
                this.newCopy1 = this.pageData.copy1.replaceAll('Rafaela', fullname)
                scrollTo({
                    behavior: "smooth",
                    top: 830
                })
            }
        })
    }

    async fillPage(): Promise<void> {
        this.pageData = await import(`../../configs/pages/${this.vslData.category.name}.json`)
    }

    addScrollReveal(): void {
        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: 900,
            delay: 0
        })
        ScrollReveal().reveal('.cv-page-1 h2', { origin: 'left' })
        ScrollReveal().reveal('.cv-page-1 .video-player', { origin: 'left' })
        ScrollReveal().reveal('.depoiment-form-container div', { origin: 'bottom' })
        ScrollReveal().reveal('.depoiments-container .depoiment div', { origin: 'left' })
    }

    removeDarkMode(): void {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "black";
    }

    removeConversionEventGoogleAds(): void {
        document.querySelector('#script-conversao-lead')?.remove()
    }
}
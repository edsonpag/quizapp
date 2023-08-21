import { Component, OnDestroy, OnInit } from "@angular/core";
import { Depoiment } from "src/app/interfaces/depoiment.interface";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { QuizService } from "../quiz-page/quiz.service";
import { Result } from "src/app/interfaces/results.interface";
import { Checkout } from "src/app/enums/checkout.enum";
import { FormDataQuiz } from "src/app/interfaces/form-data.interface";
import { SalesNotification } from "src/app/interfaces/sales-notification";
import { SalesNotificationService } from "src/app/services/sales-notification.service";
import { ToastService } from "src/app/services/app-toast.service";
import PageData from "src/app/interfaces/page-data.interface";
// @ts-ignore
import * as ScrollReveal from "../../libs/scrollreveal/scrollreveal";

@Component({
    selector: 'vsl-page',
    templateUrl: './vsl-page.component.html',
    styleUrls: ['./vsl-page.component.css']
})

export class VlsPageComponent implements OnInit, OnDestroy {

    vslData!: Result;
    
    videoSrc: string = "";
    
    checkoutLink: string = "";
    
    depoiments: Depoiment[] = []

    courses: string[] = ["", "Influencer", "Social Media", "Gestor de Tráfego"]

    pageData: PageData = {
        profission: "",
        congratulations: "",
        headline: "",
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
        copy11: ""
    }

    newCopy1: string = ""

    constructor(private depoimentsService: DepoimentsService, private quizService: QuizService, private salesNotificationService: SalesNotificationService, private toastService: ToastService) { }

    async ngOnInit(): Promise<void> {
        this.addConversionEventGoogleAds()
        this.addDarkMode()
        this.addAnimations()
        const results = this.quizService.getResults();
        results.sort((a, b) => b.points - a.points);
        this.vslData = results[0];
        this.checkoutLink = new Checkout().links[this.vslData.category.index];
        this.depoiments = this.depoimentsService.getAll();
        await this.fillPage()
        if (localStorage.getItem('sendEmail') != 'false')
            this.sendEmails()
        this.handleSalesNotification()
        this.saveCompletedQuiz()
    }

    ngOnDestroy(): void {
        document.querySelector('#script-conversao-lead')?.remove()
        this.removeDarkMode()
    }

    addConversionEventGoogleAds(): void {
        let script = document.createElement('script');
        script.id = 'script-conversao-lead'
        script.textContent = `gtag('event', 'conversion', {'send_to': 'AW-11296404846/Xq5gCPr2htMYEO7qxYoq'});`
        document.head.appendChild(script);
    }

    async fillPage(): Promise<void> {
       this.pageData = await import(`../../configs/pages/${this.vslData.category.name}.json`)
    }

    sendEmails(): void {
        let shootingDate = (new Date().getTime() + (15 * 60000))
        const email = {
            from: 'Digital Quiz <contato@digitalquiz.com.br>',
            to: this.quizService.getFormDateQuiz().email,
            subject: `Este é o nosso compromisso com você`,
            templateCode: '002',
            shootingDate: new Date(shootingDate),
            attachments: [
                {
                    filename: "image-01.png",
                    path: "src/views/assets/email-002/image-01.png",
                    cid: "image-01.png"
                },
                {
                    filename: "image-02.png",
                    path: "src/views/assets/email-002/image-02.png",
                    cid: "image-02.png"
                },
                {
                    filename: "image-03.png",
                    path: "src/views/assets/email-002/image-03.png",
                    cid: "image-03.png"
                },
                {
                    filename: "image-04.png",
                    path: "src/views/assets/email-002/image-04.png",
                    cid: "image-04.png"
                },
                {
                    filename: "image-05.png",
                    path: "src/views/assets/email-002/image-05.png",
                    cid: "image-05.png"
                },
                {
                    filename: "image-06.png",
                    path: "src/views/assets/email-002/image-06.png",
                    cid: "image-06.png"
                },
                {
                    filename: "image-07.png",
                    path: "src/views/assets/email-002/image-07.png",
                    cid: "image-07.png"
                }
            ],
            context: {
                fullname: this.quizService.getFormDateQuiz().name,
                checkoutLink: this.checkoutLink
            }
        }

        fetch('https://imail.onrender.com/email/store', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }

    goToCheckout(): void {
        window.location.href = this.checkoutLink + this.getQueryparams();
    }

    getQueryparams(): string {
        const formDataQuiz: FormDataQuiz = this.quizService.getFormDateQuiz();
        let queryParms = "?";
        queryParms += "name=" + formDataQuiz.name;
        queryParms += "&"
        queryParms += "email=" + formDataQuiz.email;
        queryParms += "&"
        queryParms += "phone=" + formDataQuiz.cellphoneNumber;
        return queryParms;
    }

    arrowDownClick(): void {
        scrollTo({
            behavior: "smooth",
            top: 830
        })
    }

    handleSalesNotification(): void {
        setInterval(() => {
            const salesNotification: SalesNotification[] = this.salesNotificationService.getAll();
            if (salesNotification.length > 0) {
                const randomPosition = Math.floor(salesNotification.length * Math.random());
                this.toastService.show({ header: "QuizEducation", body: `${salesNotification[randomPosition].name} acabou de comprar o treinamento`, classname: "bg-purple text-light", delay: 4000 });
                this.salesNotificationService.remove(randomPosition);
            }     
        }, 120000)
    }

    addDarkMode(): void {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "white";
    }

    removeDarkMode(): void {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "black";
    }

    addAnimations(): void {
        const allH2 = document.querySelectorAll('.cv-page-1 h2');
        let currentH2Index = 0
        if (currentH2Index < allH2.length) {
            const h2 = allH2.item(currentH2Index)
            h2.classList.add('animated-p')
            currentH2Index++
        }
        const interval = setInterval(() => {
            if (currentH2Index >= allH2.length) {
                document.querySelector('p')?.classList.add('animated-p')
                setTimeout(() => {
                    document.querySelector('.arrow-down')?.classList.add('animated-arrow-down')
                    document.querySelector('.arrow-down')?.classList.add('bounce')
                    this.addScrollReveal()
                    document.querySelector('#page-2')?.classList.remove('hide')
                }, 1000)
                clearInterval(interval)
            }
            else {
                const h2 = allH2.item(currentH2Index)
                h2.classList.add('animated-p')
                currentH2Index++
            }
        }, 700)
    }

    addScrollReveal(): void {
        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: 900,
            delay: 0
        })
        ScrollReveal().reveal('#copy-2-title', { origin: 'left' })
        ScrollReveal().reveal('.copy-part', { origin: 'bottom', interval: 200 })
        ScrollReveal().reveal('.treasure-map-person-name', { origin: 'left' })
        ScrollReveal().reveal('.treasure-map', { origin: 'left' })
        ScrollReveal().reveal('.paragraph-1', { origin: 'left' })
        ScrollReveal().reveal('.paragraph-2', { origin: 'bottom' })
        ScrollReveal().reveal('.list-group li', { origin: 'bottom', interval: 200 })
        ScrollReveal().reveal('.first-button', { origin: 'bottom' })
        ScrollReveal().reveal('.audios h2', { origin: 'bottom' })
        ScrollReveal().reveal('.audios audio', { origin: 'left', interval: 200 })
        ScrollReveal().reveal('.depoiment-form-container div', { origin: 'bottom' })
        ScrollReveal().reveal('.depoiments-container .depoiment div', { origin: 'left' })
        ScrollReveal().reveal('.faq-container .faq-title', { origin: 'left' })
        ScrollReveal().reveal('.my-accordion-item', { origin: 'bottom', interval: 200 })
        ScrollReveal().reveal('.last-button', { origin: 'bottom' })
        ScrollReveal().reveal('.still-have-doubts', { origin: 'left' })
        ScrollReveal().reveal('.still-have-doubts-p', { origin: 'left' })
        ScrollReveal().reveal('.change-history-button', { origin: 'bottom' })
    }

    saveCompletedQuiz(): void {
        localStorage.setItem("categoryName", this.vslData.category.name)
        localStorage.setItem("categoryIndex", this.vslData.category.index.toString())
        localStorage.setItem("points", this.vslData.points.toString())
        if (localStorage.getItem("fullname") === null)
            localStorage.setItem("fullname", this.quizService.getFormDateQuiz().name)
        localStorage.setItem("sendEmail", 'false')
    }

    changeHistoryButton(): void {
        const fullname = localStorage.getItem("fullname")
        const treasureMapPersonName = document.querySelector('.treasure-map-person-name')
        if (fullname && treasureMapPersonName) {
            treasureMapPersonName.textContent = fullname
            this.newCopy1 = this.pageData.copy1.replaceAll('Rafaela', fullname)
        }
        scrollTo({
            behavior: "smooth",
            top: 830
        })
    }
}
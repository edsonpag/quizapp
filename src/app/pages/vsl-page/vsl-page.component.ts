import { Component, OnDestroy, OnInit } from "@angular/core";
import { Depoiment } from "src/app/interfaces/depoiment.interface";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { QuizService } from "../quiz-page/quiz.service";
import { Result } from "src/app/interfaces/results.interface";
import { Checkout } from "src/app/enums/checkout.enum";
import { FormDataQuiz } from "src/app/interfaces/form-data.interface";
import Email from "src/app/interfaces/email.interface";
import { SalesNotification } from "src/app/interfaces/sales-notification";
import { SalesNotificationService } from "src/app/services/sales-notification.service";
import { ToastService } from "src/app/services/app-toast.service";
import PageData from "src/app/interfaces/page-data.interface";

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
        copy: ""
    }

    constructor(private depoimentsService: DepoimentsService, private quizService: QuizService, private salesNotificationService: SalesNotificationService, private toastService: ToastService) { }

    async ngOnInit(): Promise<void> {
       /*this.addConversionEventGoogleAds()*/
        this.addDarkMode()
        this.addAnimations()
        /*const results = this.quizService.getResults();
        results.sort((a, b) => b.points - a.points);
        this.vslData = results[0];
        this.checkoutLink = new Checkout().links[this.vslData.category.index];*/
        this.depoiments = this.depoimentsService.getAll();
        await this.fillPage()
        /*this.sendEmails()*/
        this.handleSalesNotification()
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
       //this.pageData = await import(`../../configs/pages/${this.vslData.category.name}.json`)
       this.pageData = await import(`../../configs/pages/INFLUENCER.json`)
    }

    sendEmails(): void {
        let shootingDate = (new Date().getTime() + (15 * 60000))
        const email: Email = {
            from: 'Digital Quiz <contato@digitalquiz.com.br>',
            to: this.quizService.getFormDateQuiz().email,
            subject: `Prezado passageiro ${this.quizService.getFormDateQuiz().name}!`,
            templateCode: '001',
            fullname: this.quizService.getFormDateQuiz().name,
            profession: this.courses[this.vslData.category.index],
            shootingDate: new Date(shootingDate),
            checkoutLink: this.checkoutLink,
            sent: false
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

    handleSalesNotification(): void {
        setInterval(() => {
            const salesNotification: SalesNotification[] = this.salesNotificationService.getAll();
            if (salesNotification.length > 0) {
                const randomPosition = Math.floor(salesNotification.length * Math.random());
                this.toastService.show({ header: "QuizEducation", body: `${salesNotification[randomPosition].name} acabou de comprar o treinamento`, classname: "bg-purple text-light", delay: 4000 });
                this.salesNotificationService.remove(randomPosition);
            }     
        }, 60000)
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
            h2.classList.add('animated-text')
            currentH2Index++
        }
        const interval = setInterval(() => {
            if (currentH2Index >= allH2.length) {
                document.querySelector('p')?.classList.add('animated-p')
                setTimeout(() => {
                    document.querySelector('.arrow-down')?.classList.add('animated-arrow-down')
                    document.querySelector('.arrow-down')?.classList.add('bounce')
                }, 1000)
                clearInterval(interval)
            }
            else {
                const h2 = allH2.item(currentH2Index)
                h2.classList.add('animated-text')
                currentH2Index++
            }
        }, 1700)
    }
}
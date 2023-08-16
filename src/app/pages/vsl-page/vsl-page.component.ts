import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { Depoiment } from "src/app/interfaces/depoiment.interface";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { QuizService } from "../quiz-page/quiz.service";
import { Result } from "src/app/interfaces/results.interface";
import { Checkout } from "src/app/enums/checkout.enum";
import { FormDataQuiz } from "src/app/interfaces/form-data.interface";
import { VslPageService } from "./vsl-page.service";
import { LeadService } from "src/app/services/lead.service";
import { DOCUMENT } from "@angular/common";
import Email from "src/app/interfaces/email.interface";

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

    constructor(private depoimentsService: DepoimentsService, private quizService: QuizService, public vslPageService: VslPageService, private leadService: LeadService, @Inject(DOCUMENT) private document: Document) { }

    ngOnInit(): void {
        this.addConversionEventGoogleAds()
        const results = this.quizService.getResults();
        results.sort((a, b) => b.points - a.points);
        this.vslData = results[0];
        this.videoSrc = `../../../assets/video/${this.vslData.category.name}.mp4`;
        this.checkoutLink = new Checkout().links[this.vslData.category.index];
        this.depoiments = this.depoimentsService.getAll();
        this.document.body.style.backgroundColor = "black";
        this.document.body.style.color = "white";
        const navbar = this.document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "white";
        this.sendEmails()
    }

    ngOnDestroy(): void {
        document.querySelector('#script-conversao-lead')?.remove()
    }

    addConversionEventGoogleAds(): void {
        let script = document.createElement('script');
        script.id = 'script-conversao-lead'
        script.textContent = `gtag('event', 'conversion', {'send_to': 'AW-11296404846/Xq5gCPr2htMYEO7qxYoq'});`
        document.head.appendChild(script);
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
}
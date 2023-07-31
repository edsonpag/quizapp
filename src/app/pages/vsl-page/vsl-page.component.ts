import { Component, Inject, OnInit } from "@angular/core";
import { Depoiment } from "src/app/interfaces/depoiment.interface";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { QuizService } from "../quiz-page/quiz.service";
import { Result } from "src/app/interfaces/results.interface";
import { Checkout } from "src/app/enums/checkout.enum";
import { FormDataQuiz } from "src/app/interfaces/form-data.interface";
import { VslPageService } from "./vsl-page.service";
import { LeadService } from "src/app/services/lead.service";
import { DOCUMENT } from "@angular/common";

@Component({
    selector: 'vsl-page',
    templateUrl: './vsl-page.component.html',
    styleUrls: ['./vsl-page.component.css']
})

export class VlsPageComponent implements OnInit {

    vslData: Result | null = null;
    
    videoSrc: string = "";
    
    checkoutLink: string = "";
    
    depoiments: Depoiment[] = []

    courses: string[] = ["", "Influeencer de Sucesso", "Social Media Pro", "Anuciante Pro"]

    constructor(private depoimentsService: DepoimentsService, private quizService: QuizService, public vslPageService: VslPageService, private leadService: LeadService, @Inject(DOCUMENT) private document: Document) { }

    ngOnInit(): void {
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
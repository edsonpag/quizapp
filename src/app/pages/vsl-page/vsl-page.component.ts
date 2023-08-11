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
import Email from "src/app/interfaces/email.interface";

@Component({
    selector: 'vsl-page',
    templateUrl: './vsl-page.component.html',
    styleUrls: ['./vsl-page.component.css']
})

export class VlsPageComponent implements OnInit {

    vslData!: Result;
    
    videoSrc: string = "";
    
    checkoutLink: string = "";
    
    depoiments: Depoiment[] = []

    courses: string[] = ["", "Influencer", "Social Media", "Gestor de Tráfego"]

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
        this.sendEmails()
        
    }

    sendEmails(): void {
        let shootingDate = (new Date().getTime() + (15 * 60000))
        const email: Email = {
            from: 'Digital Quiz <contato@digitalquiz.com.br>',
            to: this.quizService.getFormDateQuiz().email,
            subject: `Prezado passageiro ${this.quizService.getFormDateQuiz().name}!`,
            text: `Prepara o embarque, porque o avião dos futuros alunos prósperos do Digital Boost está prestes a decolar, não queremos que você fique de fora dessa viagem! É isso mesmo, a oportunidade de aprender a ganhar dinheiro como ${this.courses[this.vslData.category.index]} sem sair de casa, sem ter um chefe chato e sem preocupações com falta de dinheiro no final do mês!
            
⏰ É HOJE, APROVEITE QUE ESSE PREÇO É ÚNICO

O conhecimento obtido por diversos profissionais, como o comandante Claudio que é o CEO da Digital Quiz e faturou mais de R$30.000 em apenas um mês usando a tecnologia ao seu favor. Fora todo conhecimento, existem várias bagagens premiadas te aguardando, sim elas estão a poucos cliques de você, veja algumas delas que estamos presenteando você.
             
Bagagem número 1: Mapa do Sucesso, criado com o intuito de não ter erro no seu plano de estudo, todo o passo a passo do que tem que ser feito para começar a faturar seus R$500,00 a mais todos os meses.
            
Bagagem número 2: Aplicativo Secreto: Esse aqui é ótimo para todos nós que esquecemos o conteúdo aprendido, ele é como se fosse aquele bilhete que você tem de sua passagem aérea, para você lembrar sempre do seu objetivo, só que com uma metodologia campeã. 
            
Bagagem número 3: Template da Proposta Campeã, esse foi usado por diversas pessoas que fazem parceria com empresas, para fechar contrato. Só de você enviar isso para um futuro cliente/parceiro, a sua credibilidade aumentará de tal tamanho que será quase impossível não fazer dinheiro com isso!
            
Não perca mais tempo, esse voo é unico e leva a uma vida mais prospera e feliz. Quando você chegar no destino desejado pode vir nos agradecer e iremos amar colocar seu depoimento junto com de nossos outros alunos. Até esse mês ainda, por apenas R$47,00 você garante seu acesso junto com milhares de outros tripulantes para viagem de sucesso e prosperidade, vamos embarcar juntos nessa?
            
Link: ${this.checkoutLink}`,
            fullname: this.quizService.getFormDateQuiz().name,
            profession: this.courses[this.vslData.category.index],
            shootingDate: new Date(shootingDate),
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
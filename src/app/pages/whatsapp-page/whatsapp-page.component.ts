import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
// @ts-ignore
import * as ScrollReveal from "../../libs/scrollreveal/scrollreveal";
import { Depoiment } from "src/app/interfaces/depoiment.interface";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { Result } from "src/app/interfaces/results.interface";
import { QuizService } from "../quiz-page/quiz.service";

@Component({
    selector: 'whatsapp-page',
    templateUrl: './whatsapp-page.component.html',
    styleUrls: ['./whatsapp-page.component.css']
})

export class WhatsAppPageComponent implements OnInit, AfterViewInit, OnDestroy {

    vslData: Result;

    depoiments: Depoiment[] = []

    peopleHelped!: string

    peopleHelpedLocaleFormatted!: string

    whatsappNumber: string

    whatsappLink: string

    constructor(private depoimentsService: DepoimentsService, private quizService: QuizService) {
        this.depoiments = this.depoimentsService.getAll()
        this.vslData = this.quizService.getVslData()
        this.whatsappNumber = this.getWhatsappNumber()
        this.whatsappLink = this.getWhatsappLink()
    }

    ngOnInit(): void {
        this.addDarkMode()
        this.initPeopleHelped()
        this.attachEventsListener()
        this.sendEmails()
        this.saveCompletedQuiz()
    }

    ngAfterViewInit(): void {
        this.addScrollReveal()
    }

    ngOnDestroy(): void {
        this.removeDarkMode()
    }

    getWhatsappNumber(): string {
        let whatsappNumber = localStorage.getItem("whatsappNumber")
        if (whatsappNumber != null)
            return whatsappNumber
        const whatsappNumbers = ["5547999480308", "5547992528564"]
        const whatsappPosition = Math.floor(Math.random() * whatsappNumbers.length)
        whatsappNumber = whatsappNumbers[whatsappPosition]
        localStorage.setItem("whatsappNumber", whatsappNumber)
        return whatsappNumber
    }

    getWhatsappLink(): string {
        let whatsappLink = `https://wa.me/${this.whatsappNumber}?text=`
        let whatsappText = "Olá, gostaria de saber minha profissão digital secreta"
        if (this.vslData.category.name === "INFLUENCER")
            whatsappText += "!"
        else if (this.vslData.category.name === "SOCIAL_MEDIA")
            whatsappText += "!!"
        else
            whatsappText += "!!!"
        let whatsappTextEncoded = encodeURIComponent(whatsappText)
        whatsappLink = whatsappLink + whatsappTextEncoded
        return whatsappLink
    }

    addDarkMode(): void {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "white";
    }

    initPeopleHelped(): void {
        let peopleHelpedAux = localStorage.getItem("peopleHelped") 
        if (!peopleHelpedAux)
            peopleHelpedAux = '10138'
        this.peopleHelped = peopleHelpedAux
        this.peopleHelpedLocaleFormatted = parseInt(this.peopleHelped).toLocaleString("pt-BR")
        setInterval(() => {
            this.peopleHelped = (parseInt(this.peopleHelped) + 1).toString()
            localStorage.setItem('peopleHelped', this.peopleHelped)
            this.peopleHelpedLocaleFormatted = parseInt(this.peopleHelped).toLocaleString("pt-BR")
        }, 1500)
    }

    attachEventsListener(): void {
        this.attachWhatsAppButtonClickEvent()
    }

    attachWhatsAppButtonClickEvent(): void {
        document.querySelectorAll('.vsl-button').forEach(vslButtonEl => vslButtonEl.addEventListener("click", () => {
            window.open(this.whatsappLink, "_blank")
        }))
    }

    sendEmails(): void {
        if (localStorage.getItem('sendEmail') === 'false')
            return
        const emails = ['contato@digitalquiz.com.br', 'comercial@digitalquiz.com.br', 'contato02@digitalquiz.com.br', 'contato03@digitalquiz.com.br', 'contato04@digitalquiz.com.br', 'contato05@digitalquiz.com.br', 'contato06@digitalquiz.com.br', 'contato07@digitalquiz.com.br', 'contato08@digitalquiz.com.br', 'contato09@digitalquiz.com.br', 'contato10@digitalquiz.com.br']
        const selectedEmail = emails[Math.floor(Math.random() * emails.length)]
        let shootingDate = (new Date().getTime() + (15 * 60000))
        const email = {
            from: `Digital Quiz <${selectedEmail}>`,
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
                whatsappLink: this.whatsappLink
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

    saveCompletedQuiz(): void {
        localStorage.setItem("categoryName", this.vslData.category.name)
        localStorage.setItem("categoryIndex", this.vslData.category.index.toString())
        localStorage.setItem("points", this.vslData.points.toString())
        if (this.quizService.getFormDateQuiz()) {
            if (localStorage.getItem("fullname") === null)
                localStorage.setItem("fullname", this.quizService.getFormDateQuiz().name)
            if (localStorage.getItem("cellphoneNumber") === null)
                localStorage.setItem("cellphoneNumber", this.quizService.getFormDateQuiz().cellphoneNumber)
            if (localStorage.getItem("email") === null)
                localStorage.setItem("email", this.quizService.getFormDateQuiz().email)
        }
        localStorage.setItem("sendEmail", 'false')
    }

    addScrollReveal(): void {
        ScrollReveal({
            reset: true,
            distance: '60px',
            duration: 900,
            delay: 0
        })
        ScrollReveal().reveal('.cv-page-1 h2', { origin: 'left' })
        ScrollReveal().reveal('.cv-page-1 p', { origin: 'bottom' })
        ScrollReveal().reveal('#button-zero', { origin: 'left'  })
        ScrollReveal().reveal('.people-helped', { origin: 'left'  })
        ScrollReveal().reveal('.depoiments-container .depoiment div', { origin: 'left' })
        ScrollReveal().reveal('.depoiment-form-container form div', { origin: 'bottom' })
        ScrollReveal().reveal('#button-one', { origin: 'left'  })
    }

    removeDarkMode(): void {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "black";
    }

}
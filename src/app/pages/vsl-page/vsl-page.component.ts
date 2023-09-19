import { Component, OnDestroy, OnInit } from "@angular/core";
// @ts-ignore
import * as ScrollReveal from "../../libs/scrollreveal/scrollreveal";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { SalesNotification } from "src/app/interfaces/sales-notification";
import { SalesNotificationService } from "src/app/services/sales-notification.service";
import { ToastService } from "src/app/services/app-toast.service";

@Component({
    selector: 'vsl-page',
    styleUrls: ['./vsl-page.component.css'],
    templateUrl: './vsl-page.component.html'
})

export class VslPageComponent implements OnInit, OnDestroy {

    depoiments

    checkoutLink = "https://pay.kiwify.com.br/Qb6YTZk"

    constructor(private depoimentsService: DepoimentsService, private salesNotificationService: SalesNotificationService, private toastService: ToastService) {
        this.depoiments = this.depoimentsService.getAll()
    }
    
    ngOnInit(): void {
        this.addDarkMode()
        this.adjustNavbar()
        this.updatePage()
    }

    ngOnDestroy(): void {
        this.removeDarkMode()
        this.removeAdjustNavbar()
    }

    addDarkMode(): void {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "white";
    }

    adjustNavbar(): void {
        const navbar = document.querySelector(".navbar") as HTMLElement;
        navbar.style.position = "absolute"
    }

    updatePage(): void {
        setTimeout(() => {
            this.handleSalesNotification()
            document.querySelector(".vsl-button.hide")?.classList.remove("hide")
        }, 415000)
    }

    removeDarkMode(): void {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        const navbar = document.querySelector(".navbar-brand") as HTMLElement;
        navbar.style.color = "black";
    }

    removeAdjustNavbar(): void {
        const navbar = document.querySelector(".navbar") as HTMLElement;
        navbar.style.position = "static"
    }

    goToCheckout(): void {
        window.open(this.checkoutLink, '_blank')
    }

    handleSalesNotification(): void {
        setInterval(() => {
            const salesNotification: SalesNotification[] = this.salesNotificationService.getAll();
            if (salesNotification.length > 0) {
                const randomPosition = Math.floor(salesNotification.length * Math.random());
                this.toastService.show({ header: "QuizEducation", body: `${salesNotification[randomPosition].name} acabou de resgatar o acesso ao aplicativo`, classname: "bg-purple text-light", delay: 4000 });
                this.salesNotificationService.remove(randomPosition);
            }     
        }, 60000)
    }
}
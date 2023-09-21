import { Component, OnDestroy, OnInit } from "@angular/core";
import { DepoimentsService } from "src/app/services/depoiments.service";
import { SalesNotification } from "src/app/interfaces/sales-notification";
import { SalesNotificationService } from "src/app/services/sales-notification.service";
import { ToastService } from "src/app/services/app-toast.service";
import { DarkModeService } from "src/app/services/dark-mode.service";

@Component({
    selector: 'vsl-page',
    styleUrls: ['./vsl-page.component.css'],
    templateUrl: './vsl-page.component.html'
})

export class VslPageComponent implements OnInit, OnDestroy {

    depoiments

    checkoutLink = "https://pay.kiwify.com.br/Qb6YTZk"

    constructor(private depoimentsService: DepoimentsService, private salesNotificationService: SalesNotificationService, private toastService: ToastService, private darkModeService: DarkModeService) {
        this.depoiments = this.depoimentsService.getAll()
    }
    
    ngOnInit(): void {
        this.darkModeService.addDarkMode()
        this.adjustNavbar()
        this.updatePage()
    }

    ngOnDestroy(): void {
        this.darkModeService.removeDarkMode()
        this.removeAdjustNavbar()
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
                this.toastService.show({ header: "QuizEducation", body: `${salesNotification[randomPosition].name} acabou de resgatar o acesso ao aplicativo`, classname: "bg-purple text-light", delay: 6000 });
                this.salesNotificationService.remove(randomPosition);
            }     
        }, 60000)
    }
}
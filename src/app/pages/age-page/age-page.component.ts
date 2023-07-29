import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LeadService } from "src/app/services/lead.service";

@Component({
    selector: 'age-page',
    templateUrl: './age-page.component.html',
    styleUrls: ['./age-page.component.css']
})

export class AgePageComponent {

    constructor(private leadService: LeadService, private router: Router) { }

    saveAge(event: Event, ageRange: string): void {
        const target = event.target as HTMLElement;
        target.style.backgroundColor = "var(--primary-color)";
        target.style.color = "white";
        this.leadService.lead.ageRange = ageRange;
        setTimeout(() => {
            this.router.navigate(['quiz']);
        }, 150);
    }
}
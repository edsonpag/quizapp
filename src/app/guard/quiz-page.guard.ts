import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { LeadService } from "../services/lead.service";

@Injectable({
    providedIn: 'root'
})

class QuizPageGuard {

    constructor(private leadService: LeadService, private router: Router) { }

    canActivate(): boolean {
        const hasAcess: boolean = this.leadService.lead.ageRange != "";
        if (!hasAcess) {
            this.router.navigate(['/age'])
            return false;
        }
        return true;
    }
}

export const authenticationGuardQuizPage = (): CanActivateFn => {
    return (): boolean => {
        return inject(QuizPageGuard).canActivate();
    }
}
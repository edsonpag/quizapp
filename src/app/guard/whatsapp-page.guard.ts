import { Injectable, inject } from "@angular/core";
import { QuizService } from "../pages/quiz-page/quiz.service";
import { CanActivateFn, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

class WhatsAppPageGuard {

    constructor(private quizService: QuizService, private router: Router) { }

    canActivate(): boolean {
        const hasAcess: boolean = this.quizService.isSubmitted()
        if (!hasAcess) {
            this.router.navigate(['/'])
            return false
        }
        return true
    }
}

export const authenticationWhatsAppPageGuard = (): CanActivateFn => {
    return (): boolean => {
        return inject(WhatsAppPageGuard).canActivate()
    }
}
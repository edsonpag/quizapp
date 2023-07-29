import { Injectable, inject } from "@angular/core";
import { QuizService } from "../pages/quiz-page/quiz.service";
import { CanActivateFn, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

class VslPageGuard {

    constructor(private quizService: QuizService, private router: Router) { }

    canActivate(): boolean {
        const hasAcess: boolean = this.quizService.isSubmitted() && this.quizService.getFormDateQuiz() != undefined;
        if (!hasAcess) {
            this.router.navigate(['/'])
            return false;
        }
        return true;
    }
}

export const authenticationVslPageGuard = (): CanActivateFn => {
    return (): boolean => {
        return inject(VslPageGuard).canActivate();
    }
}
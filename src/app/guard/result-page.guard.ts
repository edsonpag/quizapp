import { Injectable, inject } from "@angular/core";
import { QuizService } from "../services/quiz.service";
import { CanActivateFn, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

class ResultPageGuard {

    constructor(private quizService: QuizService, private router: Router) { }

    canActivate(): boolean {
        const hasAcess: boolean = this.quizService.isSubmitted()
        if (!hasAcess) {
            this.router.navigate(['/aplicativo'])
            return false
        }
        return true
    }
}

export const authenticationResultPageGuard = (): CanActivateFn => {
    return (): boolean => {
        return inject(ResultPageGuard).canActivate()
    }
}
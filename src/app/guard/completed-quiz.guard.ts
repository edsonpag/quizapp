import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { QuizService } from "../pages/quiz-page/quiz.service";
import { Result } from "../interfaces/results.interface";

@Injectable({
    providedIn: 'root'
})

class CompletedQuizGuard {

    constructor(private quizService: QuizService, private router: Router) { }

    canActivate(): boolean {
        const categoryName = localStorage.getItem("categoryName")
        const categoryIndex = localStorage.getItem("categoryIndex")
        const points = localStorage.getItem("points")
        if (categoryName && categoryIndex && points) {
            let results: Result[] = [
                {
                    category: {
                        name: categoryName,
                        index: parseInt(categoryIndex)
                    },
                    points: parseInt(points)
                }
            ]
            this.quizService.setResults(results)
            this.quizService.setSubmitted(true)
            this.router.navigate(['quiz', 'profission'])
            return false
        }
        return true
    }
}

export const authenticationGuardCompletedQuiz = (): CanActivateFn => {
    return (): boolean => {
        return inject(CompletedQuizGuard).canActivate();
    }
}
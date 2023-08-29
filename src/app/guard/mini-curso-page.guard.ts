import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { QuizService } from "../pages/quiz-page/quiz.service";
import { Result } from "../interfaces/results.interface";

@Injectable({
    providedIn: 'root'
})

class MiniCursoGuard {

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

            let cellphoneNumber = localStorage.getItem('cellphoneNumber')
            if (!cellphoneNumber) cellphoneNumber = ''
            let email = localStorage.getItem('email')
            if (!email) email = ''
            let name = localStorage.getItem('fullname')
            if (!name) name = ''
            this.quizService.setFormDataQuiz({cellphoneNumber, email, name, terms: true})
            this.quizService.setResults(results)
            this.quizService.setSubmitted(true)
            return true
        }
        return false
    }
}

export const authenticationGuardMiniCurso = (): CanActivateFn => {
    return (): boolean => {
        return inject(MiniCursoGuard).canActivate();
    }
}
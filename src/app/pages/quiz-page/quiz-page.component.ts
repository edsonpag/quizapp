import { Component, OnInit } from "@angular/core";
import { QuizService } from "./quiz.service";
import { Question } from "src/app/interfaces/question.interface";
import { ToastService } from "src/app/services/app-toast.service";
import { Router } from "@angular/router";
import { Category } from "src/app/enums/category.enum";
import { Result } from "src/app/interfaces/results.interface";
import { LeadService } from "src/app/services/lead.service";

@Component({
    selector: 'quiz-page',
    templateUrl: './quiz-page.component.html',
    styleUrls: ['./quiz-page.component.css']
})

export class QuizPageComponent implements OnInit {
    currentPage = 0;
    numberOfQuestionsPerPage = 5;
    questions: Question[][] = [];
    progressBarValue = 0;
    numberOfSelectedQuestions = 0;
    totalOfQuestions = 0;

    constructor(private quizService: QuizService, private toastService: ToastService, private router: Router, private leadService: LeadService) { }

    ngOnInit(): void {
        const questions: Question[] = this.quizService.questions;
        this.totalOfQuestions = questions.length;
        this.splitQuestionsIntoPages(questions);
        this.updateNumberOfSelectedQuestions();
        this.updateProgressBarValue();
    }

    splitQuestionsIntoPages(questions: Question[]): void {
        for(let i = 0; i < questions.length; i += this.numberOfQuestionsPerPage)
            this.questions.push(questions.slice(i, i + this.numberOfQuestionsPerPage));
    }
    
    handleClick(id: number, selectedAnswerText: string): void {
       this.updateSelectedQuestion(id, selectedAnswerText);
       this.updateNumberOfSelectedQuestions();
       this.updateProgressBarValue();
    }

    updateSelectedQuestion(id: number, selectedAnswerText: string): void {
        let question = this.questions[this.currentPage].find(question => question.id === id);
        question?.answers.forEach((answer) => {
            if(answer.text === selectedAnswerText)
                answer.selected = true;
            else
                answer.selected = false;
        });
    }

    updateNumberOfSelectedQuestions(): void {
        this.numberOfSelectedQuestions = 0;
        this.questions.forEach(groupOfQuestions => {
            groupOfQuestions.forEach(question => {
                question.answers.forEach(answer => {
                    if(answer.selected)
                        this.numberOfSelectedQuestions++;
                });
            })
        });
    }

    updateProgressBarValue(): void {
        this.progressBarValue = Math.ceil((this.numberOfSelectedQuestions / this.totalOfQuestions) * 100)
    }

    previousPage(): void {
        this.currentPage--;
    }

    nextPage(): void {
        this.handleShowAndHideAlerts();
        if (!this.allQuestionsOnThePageHaveBeenAnswered())
            this.toastService.show({ header: "QuizEducation", body: "Você precisa responder todas as perguntas para avançar", classname: "", delay: 5000 })
        else
        {
            this.currentPage++;
            setTimeout(() => {
                scroll({
                    top: 0
                });
            }, 100);
        }
    }

    allQuestionsOnThePageHaveBeenAnswered(): boolean {
        const numberOfQuestionsShownUntilNow = (this.currentPage + 1) * this.numberOfQuestionsPerPage;
        return this.numberOfSelectedQuestions >= numberOfQuestionsShownUntilNow;
    }

    calculateResults(): void {
        const points: any = {
            'strongly-disagree': -5,
            'disagree': -2,
            'agree': 2,
            'strongly-agree': 5
        }
        const questionsByCategory: Question[][] = this.splitQuestionsByCategory();
        const results: Result[] = [];
        questionsByCategory.forEach((questionGroup, index) => {
            let categoryPoints = 0;
            questionGroup.forEach(question => {
                question.answers.forEach(answer => {
                    if (answer.selected) {
                        categoryPoints += points[answer.text];
                    }
                })
            });
            results.push({
                category: {
                    name: Category[index + 1],
                    index: index + 1
                },
                points: categoryPoints
            })
        });
        this.quizService.setResults(results);
    }

    joinQuestions(): Question[] {
        const questions: Question[] = [];
        this.questions.forEach(questionGroup => {
            questions.push(...questionGroup);
        });
        return questions;
    }

    splitQuestionsByCategory(): Question[][] {
        const questionsSplitByCategory: Question[][] = [];
        const questions = this.joinQuestions();
        const numberOfCategories = Object.keys(Category).length / 2;
        for (let i = 1; i < numberOfCategories; i++)
            questionsSplitByCategory.push(questions.filter(question => question.category.valueOf() === i));
        return questionsSplitByCategory;
    }

    handleShowAndHideAlerts(): void {
        this.questions[this.currentPage].forEach(question => {
            let anySelectedAnswer = false;
            question.answers.forEach(answer => {
                if (answer.selected)
                    anySelectedAnswer = true;
            });
            question.showAlert = !anySelectedAnswer;
        })
    }

    finish(): void {
        this.handleShowAndHideAlerts();
        const HUNDRED_PER_CENT = 100;
        if (this.progressBarValue < HUNDRED_PER_CENT) {
            this.toastService.show({ header: "QuizEducation", body: "Você precisa responder todas as perguntas para finalizar", classname: "", delay: 5000 })
            return;
        }
        this.calculateResults();
        this.quizService.setSubmitted(true);
        this.router.navigate(['quiz/loading'])
    }
}
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { emailValidator } from "./email.validator";
import { cellphoneValidator } from "./cellphone.validator";
import { Router } from "@angular/router";
import { nameValidator } from "./name.validator";
import { QuizService } from "../quiz-page/quiz.service";
import { LeadService } from "src/app/services/lead.service";
import { Result } from "src/app/interfaces/results.interface";

@Component({
    selector: 'results-page',
    templateUrl: './results-page.component.html',
    styleUrls: ['./results-page.component.css']
})

export class ResultsPageComponent implements OnInit, AfterViewInit {
    value: number = 0;

    courses: string[] = ["", "Influencer", "Social Media", "Gestor de Tráfego"]

    vslData!: Result;

    @ViewChild('loading') loading!: ElementRef;

    liberationForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, nameValidator]),
        email: new FormControl('', [Validators.required, emailValidator]),
        cellphoneNumber: new FormControl('', [Validators.required, cellphoneValidator]),
        terms: new FormControl('', [Validators.requiredTrue])
    });

    constructor(private router: Router, private quizService: QuizService, private leadService: LeadService) {}

    ngOnInit(): void {
        const results = this.quizService.getResults();
        results.sort((a, b) => b.points - a.points);
        this.vslData = results[0];
    }

    getName(): AbstractControl | null {
        return this.liberationForm.get('name');
    }

    getEmail(): AbstractControl | null {
        return this.liberationForm.get('email');
    }

    getCellphoneNumber(): AbstractControl | null {
        return this.liberationForm.get('cellphoneNumber');
    }

    getTerms(): AbstractControl | null {
        return this.liberationForm.get('terms');
    }

    ngAfterViewInit(): void {
        this.updateProgressBar();
    }

    updateProgressBar(): void {
        const MAX_VALUE_ALLOWED = 100;
        const MAX_VALUE_TO_INCREMENT = 30;
        const interval = setInterval(() => {
            const randomValueToIncrement = Math.floor(Math.random() * MAX_VALUE_TO_INCREMENT) + 1;
            const incrementedValue = this.value + randomValueToIncrement;
            if (incrementedValue > MAX_VALUE_ALLOWED) {
                this.value = MAX_VALUE_ALLOWED;
                clearInterval(interval);
                setTimeout(() => {
                    this.loading.nativeElement.classList.add('hide');
                }, 600)
            } else {
                this.value = incrementedValue
            }
        }, 600);
    }

    onSubmit(): void {
        this.quizService.setFormDataQuiz(this.liberationForm.value);
        this.leadService.lead.cellphoneNumber = this.getCellphoneNumber()?.value
        this.leadService.lead.name = this.getName()?.value
        this.leadService.lead.email = this.getEmail()?.value
        this.leadService.lead.terms = this.getTerms()?.value
        this.leadService.lead.profission = this.courses[this.vslData.category.index]
        this.leadService.add(this.leadService.lead);
        this.router.navigate(['quiz/profission']);
    }
}
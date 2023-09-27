import { AfterViewInit, Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LeadService } from "src/app/services/lead.service";
import { QuizService } from "src/app/services/quiz.service";
import { cellphoneValidator } from "src/app/validators/cellphone.validator";
import { emailValidator } from "src/app/validators/email.validator";
import { nameValidator } from "src/app/validators/name.validator";

@Component({
    selector: 'ia-loading-page',
    templateUrl: './ia-loading-page.component.html',
    styleUrls: ['./ia-loading-page.component.css']
})

export class IALoadingPageComponent implements AfterViewInit {
   
    value: number = 0;

    resultData

    personalities = ["", "Comunicativa", "Estável", "Analítica"]

    liberationForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, nameValidator]),
        age: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, emailValidator]),
        cellphoneNumber: new FormControl('', [Validators.required, cellphoneValidator]),
        terms: new FormControl('', [Validators.requiredTrue])
    });

    constructor(private router: Router, private quizService: QuizService, private leadService: LeadService) {
        this.resultData = this.quizService.getResult()
    }

    ngAfterViewInit(): void {
        this.updateProgressBar();
    }

    getName(): AbstractControl | null {
        return this.liberationForm.get('name');
    }

    getAge(): AbstractControl | null {
        return this.liberationForm.get('age');
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
                    document.querySelector(".liberation.hide")?.classList.remove('hide')
                    document.querySelector(".loading-page")?.classList.add('hide')
                }, 600)
            } else {
                this.value = incrementedValue
            }
        }, 600);
    }

    handleAgeInputData(event: any): void {
        if (event.target.value)
            event.target.value = Math.round(event.target.value.replace(/\D/g,''))
        else
            event.target.value = ""
    }


    saveLeadData(): void {
        this.leadService.lead.cellphoneNumber = this.getCellphoneNumber()?.value
        this.leadService.lead.name = this.getName()?.value
        this.leadService.lead.age = this.getAge()?.value
        this.leadService.lead.email = this.getEmail()?.value
        this.leadService.lead.terms = this.getTerms()?.value
        this.leadService.lead.personality = this.personalities[this.resultData.category.index]
        this.leadService.add(this.leadService.lead);
    }

    onSubmit(): void {
        this.saveLeadData()
        this.router.navigate(['/quiz/result']);
    }
}
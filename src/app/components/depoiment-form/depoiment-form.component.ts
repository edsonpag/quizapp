import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Depoiment } from "src/app/interfaces/depoiment.interface";
import { DepoimentsService } from "src/app/services/depoiments.service";
import * as moment from 'moment'

@Component({
    selector: 'depoiment-form-component',
    templateUrl: './depoiment-form.component.html',
    styleUrls: ['./depoiment-form.component.css']
})

export class DepoimentFormComponent {

    currentRate = 0

    depoimentForm: FormGroup = new FormGroup({
        name: new FormControl('', Validators.required),
        age: new FormControl<number | null>(null, Validators.required),
        depoiment: new FormControl('', Validators.required),
        testPerformed: new FormControl('', Validators.required)
    })

    constructor(private depoimentsService: DepoimentsService) { }

    changeCurrentRate(index: number): void {
        this.currentRate = index + 1
    }

    onSubmit(): void {
        this.addDepoiment()
        this.updatePageAfterAddDepoiment()
    }

    addDepoiment(): void {
        const formValue = this.depoimentForm.value
        const testPerformed = new Date(formValue.testPerformed)
        const depoiment: Depoiment = {
            name: formValue.name,
            age: formValue.age,
            rate: this.currentRate,
            text: formValue.depoiment,
            quizDate: `Teste realizado dia ${moment(testPerformed).format('DD/MM/YYYY')} ás ${moment(testPerformed).format('hh:mm a')}`,
            commentDate: `Comentário enviado dia ${moment().format('DD/MM/YYYY')} ás ${moment().format('hh:mm a')}`
        }
        this.depoimentsService.add(depoiment)
    }

    updatePageAfterAddDepoiment(): void {
        document.querySelector('form')?.classList.add('hide')
        document.querySelector('.depoiment-added')?.classList.remove('hide')
    }

    onClose(): void {
        document.querySelector('.depoiment-added')?.classList.add('hide')
    }
}
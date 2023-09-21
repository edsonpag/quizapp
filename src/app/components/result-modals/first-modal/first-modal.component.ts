import { Component, Input } from "@angular/core";

@Component({
    selector: 'first-modal',
    templateUrl: './first-modal.component.html',
    styleUrls: ['./first-modal.component.css']
})

export class FirstModalComponent {

    @Input()
    personality!: string

    @Input()
    avatar!: string

    @Input()
    alt!: string

    @Input()
    personalityDescription!: string
}
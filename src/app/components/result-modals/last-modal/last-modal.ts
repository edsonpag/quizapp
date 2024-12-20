import { Component, Input } from "@angular/core";

@Component({
    selector: 'last-modal',
    templateUrl: './last-modal.html',
    styleUrls: ['./last-modal.css']
})

export class LastModalComponent {

    @Input()
    professions!: any[]

    @Input()
    premium!: boolean

    title: string = "Profissões Recomendadas"
}
import { Component, Input } from "@angular/core";

@Component({
    selector: 'default-modal',
    templateUrl: './default-modal.html',
    styleUrls: ['./default-modal.css']
})

export class DefaultModalComponent {

    @Input()
    title!: string

    @Input()
    text!: string

    @Input()
    avatar!: string

    @Input()
    alt!: string

    @Input()
    premium!: boolean
}
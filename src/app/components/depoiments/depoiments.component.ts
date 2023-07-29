import { Component, Input } from "@angular/core";
import { Depoiment } from "src/app/interfaces/depoiment.interface";

@Component({
    selector: 'depoiments-component',
    templateUrl: './depoiments.component.html',
    styleUrls: ['./depoiments.component.css']
})

export class DepoimentsComponent {
    @Input() depoiment!: Depoiment;
    
}
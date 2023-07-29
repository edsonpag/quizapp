import { Component } from "@angular/core";
import { ToastService } from "src/app/services/app-toast.service";

@Component({
    selector: 'toast-component',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.css']
})

export class ToastComponent {
    constructor(public toastService: ToastService) { }
}
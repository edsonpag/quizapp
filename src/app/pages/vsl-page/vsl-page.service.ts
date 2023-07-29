import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Injectable({ providedIn: 'root' })

export class VslPageService {

    private startTimer: boolean = false;

    constructor(@Inject(DOCUMENT) private document: Document) { }

    isStartTimer(): boolean {
        return this.startTimer;
    }

    setStartTimer(startTimer: boolean): void {
        this.startTimer = startTimer;
    }

    updateVslPage(): void {
        this.document.querySelector(".vsl-page .hide")?.classList.remove("hide");
        this.startTimer = true;
    }

}
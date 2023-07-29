import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {
    @Input() text!: String;
    @Input() width!: String;
    @Input() height!: String;
    @Input() fontSize!: String;
    @Input() spanFree!: boolean;
    @Input() disabled!: boolean;

    ngOnInit(): void {
        this.width = this.width ?? "13.9rem";
        this.height = this.height ?? "4rem";
        this.fontSize = this.fontSize ?? "1.4rem";
        this.spanFree = this.spanFree ?? false;
        this.disabled = this.disabled ?? false;
    }
}
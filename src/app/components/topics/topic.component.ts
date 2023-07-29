import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'topic-component',
    templateUrl: './topic.component.html',
    styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {
    @Input() title!: String;
    @Input() description!: String;

    ngOnInit(): void {
        this.title = this.title ?? "";
        this.description = this.description ?? "";
    }
}
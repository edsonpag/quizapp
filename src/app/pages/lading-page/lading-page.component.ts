import { Component, Inject } from '@angular/core';
import { Topic } from '../../components/topics/topic.interface';
import { TopicService } from '../../components/topics/topic.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.css']
})

export class LadingPageComponent {
  topics: Topic[] = [];

  constructor(private topicService: TopicService, @Inject(DOCUMENT) private document: Document, private router: Router) {
    this.topics = this.topicService.getAllTopics();
  }
}
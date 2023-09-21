import { Component } from '@angular/core';
import { Topic } from '../../components/topics/topic.interface';
import { TopicService } from '../../components/topics/topic.service';

@Component({
  selector: 'lading-page',
  templateUrl: './lading-page.component.html',
  styleUrls: ['./lading-page.component.css']
})

export class LadingPageComponent {
  topics: Topic[] = [];

  constructor(private topicService: TopicService) {
    this.topics = this.topicService.getAllTopics();
  }
}
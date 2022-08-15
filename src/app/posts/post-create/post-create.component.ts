import {Component, EventEmitter, Output} from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>(); //Output turns this event into something that can be seem from the outside

  onAddPost() { //runs when the user clicks the button to save post
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post); //postCreated is the event emitter. app.component will get this data
  }
}

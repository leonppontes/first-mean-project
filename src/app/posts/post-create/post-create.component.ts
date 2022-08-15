import {Component, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
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

  onAddPost(form: NgForm) { //runs when the user clicks the button to save post
    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    }
    this.postCreated.emit(post); //postCreated is the event emitter. app.component will get this data
  }
}

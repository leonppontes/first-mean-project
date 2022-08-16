import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) { //runs when the user clicks the button to save post
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content); //postCreated is the event emitter. app.component will get this data
  }
}

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

  //When Angular creates a new instance of a component, directive, or pipe class,
  // it determines which services or other dependencies that class needs by looking
  // at the constructor parameter types
  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) { //runs when the user submits the form
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}

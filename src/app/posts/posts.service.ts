import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

//The first step is to add the @Injectable decorator to show that the class can be injected.
@Injectable({providedIn: 'root'})
//not used here but When you register a provider at the component level, you get a new instance of the
//service with each new instance of that component.

//When you provide the service at the root level, Angular creates a single, shared instance of the PostsService
// and injects it into any class that asks for it. Registering the provider in the @Injectable metadata also
//allows Angular to optimize an app by removing the service from the compiled application if it isn't used,
//a process known as tree-shaking.
export class PostsService {
  private posts: Post[] = []; //posts is an array of the type Post
  private postsUpdated = new Subject<Post[]>(); //private means it can't be edited from outside //new subject type Post[]
//A Subject is like an Observable, but can multicast to many Observers.(https://www.tektutorialshub.com/angular/subjects-in-angular/)

  getPosts() {
    return [...this.posts]; //this == PostsService
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]); //next multicasts the new [...this.posts] to the observers subscribed
    //squared brackets to create a new array
    //three dots to copy all of the elements of the array and put them on the new array
    // (https://oprearocks.medium.com/what-do-the-three-dots-mean-in-javascript-bc5749439c9a)
  }
}

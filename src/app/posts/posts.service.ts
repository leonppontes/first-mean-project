import { Post } from "./post.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = []; //private means it can't be edited from outside
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; //not useful rn
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}

//Now we have one and the same instance and we got it injected into post-list and there we got our postsService
//Now we ned to call getPosts

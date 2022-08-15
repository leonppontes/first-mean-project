import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts = [];

  onPostAdded(post) {   //from the event emitter in post-create
    this.storedPosts.push(post);
  }
}

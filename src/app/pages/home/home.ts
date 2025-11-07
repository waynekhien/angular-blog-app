import { Component } from '@angular/core';
import { PostCard } from "../../layouts/post-card/post-card";

@Component({
  selector: 'app-home',
  imports: [PostCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

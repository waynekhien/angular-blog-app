import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layouts/header/header";
import { CategoryNavbar } from "./layouts/category-navbar/category-navbar";
import { Footer } from "./layouts/footer/footer";
import { PostCard } from "./layouts/post-card/post-card";
import { SubcriptionForm } from "./subcription-form/subcription-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CategoryNavbar, Footer, PostCard, SubcriptionForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-blog-app');
}

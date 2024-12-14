import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SwissMint';

  // Array to store the image URLs for the carousel
  slides = [
    'assets/homepage/street-wear.jpg',
    'assets/homepage/high-end-cothing-brand.jpg',  
    'assets/homepage/urban-wear.jpg'
  ];

  // The current index of the slide being displayed
  currentIndex = 0;

  // Method to move to the next slide
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Method to move to the previous slide
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}

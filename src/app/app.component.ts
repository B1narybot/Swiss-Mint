import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
   RouterOutlet, RouterModule,  CommonModule,  NavbarComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SwissMint';
  
  slides = [
    {
      image: 'assets/homepage/street-wear.jpg',
      heading2: 'Street Wear Collection',
      heading3: 'Explore the trendiest street fashion.',
      paragraph: 'Get the latest designs and styles to stand out in the streetwear scene.'
    },
    {
      image: 'assets/homepage/high-end-cothing-brand.jpg',
      heading2: 'High-End Fashion',
      heading3: 'Luxury and elegance combined.',
      paragraph: 'Discover high-end collections from renowned designers.'
    },
    {
      image: 'assets/homepage/urban-wear.jpg',
      heading2: 'Urban Wear',
      heading3: 'Style with comfort.',
      paragraph: 'Urban wear brings together comfort and style for everyday use.'
    }
  ];
  
  currentIndex = 0;

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}

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

  // Existing slides for the carousel
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

  // New variables for the product slider
  productSliderCurrentIndex = 0;
  totalCards = 8;
  visibleCards = 4;
  cardWidth = 220; // width of each card + margin

  // Methods for the existing slide carousel
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // Methods for the product slider
  moveProductSliderLeft(): void {
    if (this.productSliderCurrentIndex > 0) {
      this.productSliderCurrentIndex--;
    }
  }

  moveProductSliderRight(): void {
    if (this.productSliderCurrentIndex < this.totalCards - this.visibleCards) {
      this.productSliderCurrentIndex++;
    }
  }

  // Method to calculate the transform value for the product slider
  getProductSliderTransform(): string {
    return `translateX(-${this.productSliderCurrentIndex * this.cardWidth}px)`;
  }
}

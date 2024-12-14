import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  private hamburger!: HTMLElement;  // Using definite assignment assertion
  private navLinks!: HTMLElement;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Check if the platform is browser before accessing the DOM
    if (isPlatformBrowser(this.platformId)) {
      this.hamburger = document.getElementById('hamburger') as HTMLElement;
      this.navLinks = document.getElementById('navLinks') as HTMLElement;

      // Ensure the elements exist before adding the event listener
      if (this.hamburger && this.navLinks) {
          this.hamburger.addEventListener('click', this.toggleNav.bind(this));
      }
    }
  }

  private toggleNav(): void {
    this.navLinks.classList.toggle('show');
  }
}

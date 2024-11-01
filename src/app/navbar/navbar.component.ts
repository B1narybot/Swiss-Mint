import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
}) export class NavbarComponent implements AfterViewInit {
  private hamburger!: HTMLElement; // Using definite assignment assertion
  private navLinks!: HTMLElement;

  ngAfterViewInit(): void {
      this.hamburger = document.getElementById('hamburger') as HTMLElement;
      this.navLinks = document.getElementById('navLinks') as HTMLElement;

      if (this.hamburger && this.navLinks) {
          this.hamburger.addEventListener('click', this.toggleNav.bind(this));
      }
  }

  private toggleNav(): void {
      this.navLinks.classList.toggle('show');
  }
}



import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeComponent],
  // templateUrl: './app.component.html',
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/monstera.png" alt="logo" style='width: 50px; 
        height: 50px;' aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Plants-Web';
}

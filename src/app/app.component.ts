import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    
    <section class="hero is-fullheight is-info is-bold">
        <div class="hero-body">
            <flash-messages></flash-messages>
           <router-outlet></router-outlet>
        </div>
    </section>
    
    <app-footer></app-footer>
  `,
  styles: [`
  .hero-body {
      justify-content: center;
  }
  `]
})
export class AppComponent {
  title = 'app';
}

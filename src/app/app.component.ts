import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    
    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
           <router-outlet></router-outlet>
        </div>
    </section>
    
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}

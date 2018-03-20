import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {GifService} from "@app/core/services/gif.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
      GifService
  ],
  exports: [FooterComponent, HeaderComponent],
  declarations: [FooterComponent, HeaderComponent]
})
export class CoreModule { }

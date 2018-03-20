import { Component, OnInit } from '@angular/core';
import {GifService} from "@app/core/services/gif.service";
import {Gif} from "@app/models/gif.model";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-create',
  template: `
   <div class="container"> 
    <h1 class="title has-text-centered">Create a GIF</h1>
      <div class="box">
          <app-gif 
              [url]="randomGif.url"
              [caption]="caption"
              *ngIf="randomGif"
          ></app-gif>
          <div class="field">
            <input type="text" class="input" [(ngModel)]="caption">
          </div>
          <a class="button is-success" (click)="saveGif()">Create</a>
      </div>
   </div>
  `,
  styles: [` 
      
      .box {
          max-width: 50%;
          margin: 0 auto;
      }
      ::ng-deep img {
          width: 100%;
          border-radius: 3px;
      }
      
      .button {
          display: block;
          width: 100%;
    }
  `]
})
export class CreateComponent implements OnInit {

  randomGif: Gif;
  caption = '';
  constructor(private gifService: GifService, private flashService: FlashMessagesService) { }

  ngOnInit() {
   this.getRandomGif();

  }
  saveGif() {
    this.gifService.save(this.randomGif.id, this.randomGif.url, this.caption)
        .subscribe(data => {
         this.getRandomGif();
         this.caption = '';
         this.flashService.show('Created a new gif!',  {
             cssClass: 'notification is-success',
             timeout: 2000
         })
        });
  }

  getRandomGif(){
      this.gifService.getRandom()
          .subscribe(gif =>{
              this.randomGif = gif;
          });
  }

}

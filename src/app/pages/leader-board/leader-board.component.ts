import { Component, OnInit } from '@angular/core';
import {Gif} from "@app/models/gif.model";
import {GifService} from "@app/core/services/gif.service";

@Component({
  selector: 'app-leader-board',
  template: `
   <h1 class="title has-text-centered">Leader</h1>
      <table class="table is-bordered is-hover is-striped">
          <tbody>
            <tr *ngFor = 'let gif of leaderBoardGifs; let i = index'>
                <td>{{ i + 1 }}</td>
                <td>
                    <app-gif [url]="gif.url" [caption]="gif.caption"></app-gif>
                </td>
                <td>{{gif.votes}}</td>
            </tr>
          </tbody>
      </table>
  `,
  styles: []
})
export class LeaderBoardComponent implements OnInit {

  leaderBoardGifs: Gif[];
  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getLeaderBoard();
  }
  getLeaderBoard() {
    this.gifService.getLeaderBoard().subscribe( gifs => {
      this.leaderBoardGifs = gifs
    });
  }
}

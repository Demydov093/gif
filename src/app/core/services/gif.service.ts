import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Gif } from "@app/models/gif.model";


@Injectable()
export class GifService {
  apiUrl = 'https://wt-7d94730fd4037bcdc96753d2cbe14c4c-0.run.webtask.io/express-gif';
  constructor(private http: HttpClient) {}


    // Create ==================================
    // get random
    getRandom(): Observable<Gif> {
       return this.http.get<Gif>(`${this.apiUrl}/random`);
    }

    // store a gif
    save(id: string, url: string, caption: string): Observable<Gif> {
        return this.http.post<Gif>(this.apiUrl, {id, url, caption, votes: 0});
    }


    // Battle ==================================

    getBattle(): Observable<Gif[]> {
      return this.http.get<Gif[]>(`${this.apiUrl}/versus`);
    }

    vote(id): Observable<any> {
        return this.http.post(`${this.apiUrl}/vote`, {id});
    }
    // Leader ==================================
    // get a leaderboard
    getLeaderBoard(): Observable<Gif[]>  {
        return this.http.get<Gif[]>(`${this.apiUrl}/leader`);
    }
}

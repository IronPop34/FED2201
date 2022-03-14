import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvShow } from '../data-info/interfaces/tv-show';

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  url: string = 'https://fed2201-4510b-default-rtdb.firebaseio.com/tv-shows';
  jsonExt: string = '.json';

  constructor(private http: HttpClient) {}

  // GET the TV Show data from our DB
  public getTvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(this.url + this.jsonExt);
  }

  // POST data submitted by the user into our DB
  public postNewTvShow(newTvShow: TvShow): void {
    this.http.post<TvShow>(this.url + this.jsonExt, newTvShow).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  // UPDATE data to our DB
  public updateTvShow(tvShowID: any, newTvShowData: TvShow): void {
    console.log(`TV show is trying to be updated`)
    this.http.patch(`${this.url}/${tvShowID}${this.jsonExt}`, JSON.stringify(newTvShowData)).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error.message);
      }
    )
  }
  
  // DELETE data from our DB
  public deleteTvShow(tvShowID: string): void {
    console.log(`TV show is trying to be deleted`)
    this.http.delete(`${this.url}/${tvShowID}${this.jsonExt}`).subscribe(data => console.log(`${data} deleted`))
    
  }
}

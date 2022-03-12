import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvShow } from '../data-info/interfaces/tv-show';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  url: string = 'https://fed2201-4510b-default-rtdb.firebaseio.com/tv-shows';
  jsonExt: string = '.json'

  constructor(private http: HttpClient) { }

  // GET the TV Show data from our DB
  public getTvShows(): Observable<TvShow[]> {

    return this.http.get<TvShow[]>(this.url + this.jsonExt)//options: {
      // headers?: HttpHeaders;
      // params?: HttpParams
    }


    // createAndStorePost(title: string, content: string) {
    //   const postData: Post = { title: title, content: content };
    //   this.http
    //     .post<{ name: string }>(
    //       'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
    //       postData
    //     )
    //     .subscribe(
    //       responseData => {
    //         console.log(responseData);
    //       },
    //       error => {
    //         this.error.next(error.message);
    //       }
    //     );
    // }
  // Post data submitted by the user into our DB
  public postNewTvShow(newTvShow: TvShow): void {
    this.http.post<TvShow>(this.url + this.jsonExt, newTvShow)
    .subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error.message)
      }
    )
  }  

}

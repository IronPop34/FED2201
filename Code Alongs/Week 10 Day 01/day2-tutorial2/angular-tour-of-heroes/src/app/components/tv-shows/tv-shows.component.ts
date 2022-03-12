import { Component, OnInit } from '@angular/core';
// import { map } from 'rxjs/operators';
import { TvShowService } from 'src/app/services/tv-show.service';
import { TvShow } from 'src/app/data-info/interfaces/tv-show';
import { TvShow as Show } from 'src/app/data-info/classes/tv-shows';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  // tvShows = new Array<TvShow[]>();
  tvShows: TvShow[] = [];

  constructor(private tvShowService: TvShowService) {
    // // TRYING to use the class (instead of interface)
    // tvShowService.getTvShows().subscribe((response) => {
    //   this.tvShows = response.map((show) => {
    //     let currentShow = new Show(show.title, show.genre, show.ongoing);
    //     currentShow.setRuntime(show.runtime);
    //     currentShow.setCountryOfOrigin(show.countryOfOrigin);
    //     currentShow.setNumberOfEpisodes(show.numberOfEpisodes);
    //     currentShow.setNumberOfSeasons(show.numberOfSeasons);
    //     currentShow.setAnimated(show.animated);
    //     return currentShow;
    //   });
    // });

    // Using the interface (instead of class)
    tvShowService.getTvShows().subscribe((response) => {
      this.tvShows = response.map((show) => {
        return {
          // title: string;
          // genre: string;
          // runtime: number;
          // countryOfOrigin: string;
          // numberOfSeasons: number;
          // numberOfEpisodes: number;
          // animated: boolean;
          // ongoing: boolean;
          title: show.title,
          genre: show.genre,
          runtime: show.runtime,
          countryOfOrigin: show.countryOfOrigin,
          numberOfSeasons: show.numberOfSeasons,
          numberOfEpisodes: show.numberOfEpisodes,
          animated: show.animated,
          ongoing: show.ongoing
        };
      });

      console.log(this.tvShows);
    });
  }

  ngOnInit(): void {}

  onClickSubmit(result: any): void {
    // console.log(`new hero's name: "${result.newHero}"`)
    console.dir(result);

    let submittedTvShow:TvShow =  {
      title: result.tvShowTitle,
      genre: result.tvShowGenre,
      runtime: result.tvShowRuntime,
      countryOfOrigin: result.tvShowCountryOfOrigin,
      numberOfSeasons: result.tvShowNumberOfSeasons,
      numberOfEpisodes: result.tvShowNumberOfEpisodes,
      animated: result.animated,
      ongoing: result.ongoing,
    };

    this.tvShowService.postNewTvShow(submittedTvShow)

    this.tvShowService.getTvShows().subscribe((response) => {
      this.tvShows = response.map((show) => {
        return {
          title: show.title,
          genre: show.genre,
          runtime: show.runtime,
          countryOfOrigin: show.countryOfOrigin,
          numberOfSeasons: show.numberOfSeasons,
          numberOfEpisodes: show.numberOfEpisodes,
          animated: show.animated,
          ongoing: show.ongoing
        };
      });

      console.log(this.tvShows);
    });
  }
}

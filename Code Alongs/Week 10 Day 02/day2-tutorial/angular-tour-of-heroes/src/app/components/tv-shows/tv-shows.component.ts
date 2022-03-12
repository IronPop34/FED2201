import { Component, OnInit } from '@angular/core';
// import { map } from 'rxjs/operators';
import { TvShowService } from 'src/app/services/tv-show.service';
import { TvShow } from 'src/app/data-info/interfaces/tv-show';
import { Form, NgForm, FormGroup, FormControl } from '@angular/forms';
// import { TvShow as Show } from 'src/app/data-info/classes/tv-shows';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  tvShows: TvShow[] = [];
  isUpdating: boolean = false;
  showBeingUpdated: any = {}

  // Define the expected properties we want to receive from our tvShow Form
  tvShowForm = new FormGroup({
    tvShowTitle: new FormControl(''),
    tvShowGenre: new FormControl(''),
    tvShowCountryOfOrigin: new FormControl(''),
    tvShowNumberOfSeasons: new FormControl(''),
    tvShowNumberOfEpisodes: new FormControl(''),
    tvShowRuntime: new FormControl(''),
    tvShowAnimated: new FormControl(''),
    tvShowOngoing: new FormControl(''),
  });

  constructor(private tvShowService: TvShowService) {
    // Using the interface (instead of class)
    tvShowService.getTvShows().subscribe((response) => {
      console.dir(response);

      for (let entry in response) {
        this.tvShows.push({ ...response[entry], id: entry });
      }

      console.log(this.tvShows);
    });
  }

  ngOnInit(): void {}

  onClickSubmit(submission: any): void {
    console.log(`New TV Show submission... \n\n`);
    console.dir(submission);

    let submittedTvShow: TvShow = {
      title: submission.tvShowTitle,
      genre: submission.tvShowGenre,
      runtime: submission.tvShowRuntime,
      countryOfOrigin: submission.tvShowCountryOfOrigin,
      numberOfSeasons: submission.tvShowNumberOfSeasons,
      numberOfEpisodes: submission.tvShowNumberOfEpisodes,
      animated: submission.tvShowAnimated || false,
      ongoing: submission.tvShowOngoing || false,
    };

    if (this.isUpdating) {
      this.tvShowService.updateTvShow(this.showBeingUpdated.id, this.showBeingUpdated)

      // find the object that tv show object that was just updated and change it locally so that the table updates as well
      // this.tvShows.find(show => show.id === this.showBeingUpdated.id)
      
      // change the table
      let foundIndex = this.tvShows.indexOf(this.showBeingUpdated)
      this.tvShows[foundIndex] = this.showBeingUpdated

    } else {
      this.tvShowService.postNewTvShow(submittedTvShow)
      this.tvShows.push(submittedTvShow);
    }

    //clear the form input fields
    // console.dir(this.tvShowForm);
    this.tvShowForm.reset();
    this.isUpdating = false
  }

  onEditButtonClicked(showToBeEdited: TvShow): void {
    console.log(`Edit button clicked!!!`);
    console.log(`You want to edit the show:`);
    console.dir(showToBeEdited);

    this.showBeingUpdated = showToBeEdited

    this.isUpdating = true;

    console.log(`current tvShowForm...`);
    console.dir(this.tvShowForm);
    this.tvShowForm.setValue({
      tvShowTitle: showToBeEdited.title,
      tvShowGenre: showToBeEdited.genre,
      tvShowCountryOfOrigin: showToBeEdited.countryOfOrigin,
      tvShowNumberOfSeasons: showToBeEdited.numberOfSeasons,
      tvShowNumberOfEpisodes: showToBeEdited.numberOfEpisodes,
      tvShowRuntime: showToBeEdited.runtime,
      tvShowAnimated: showToBeEdited.animated,
      tvShowOngoing: showToBeEdited.ongoing,
    });

    // actually update the DB
    // this.tvShowService.updateTvShow(showToBeEdited.id, showToBeEdited)
  }

  cancelUpdate(): void {
    console.log(`Edit/Update was canceled.`);
    this.isUpdating = false;
  }
}

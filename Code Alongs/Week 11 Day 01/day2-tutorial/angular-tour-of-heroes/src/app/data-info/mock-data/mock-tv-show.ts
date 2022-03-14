// import { Hero } from '../interfaces/hero';
import { TvShow } from "../interfaces/tv-show";

export const TVSHOWS: TvShow[] = [
    {
        title: "The Office",
        genre: "Comedy",
        runtime: 30,
        countryOfOrigin: "United States",
        numberOfSeasons: 9,
        numberOfEpisodes: 201,
        animated: false,
        ongoing: false
    },
    {
        title: "The Flash",
        genre: "sci-fi",
        runtime: 60,
        countryOfOrigin: "United States",
        numberOfSeasons: 8,
        numberOfEpisodes: 159,
        animated: true,
        ongoing: true
    },
    {
        title: "The Powerpuff Girls",
        genre: "Superhero",
        runtime: 22,
        countryOfOrigin: "United States",
        numberOfSeasons: 6,
        numberOfEpisodes: 78,
        animated: true,
        ongoing: false
    },
    {
        title: "Vikings Valhalla",
        genre: "Adventure",
        runtime: 60,
        countryOfOrigin: "Canada",
        numberOfSeasons: 1,
        numberOfEpisodes: 8,
        animated: false,
        ongoing: true
    },
    {
        title: "Squid Game",
        genre: "Drama",
        runtime: 60,
        countryOfOrigin: "South Korea",
        numberOfSeasons: 1,
        numberOfEpisodes: 9,
        animated: false,
        ongoing: true
    }
];

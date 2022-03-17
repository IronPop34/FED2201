export class TvShow {
    // define the expected types of properties
    public title: string;
    public genre: string;
    public runtime?: number;
    public countryOfOrigin?: string;
    public numberOfSeasons?: number;
    public numberOfEpisodes?: number;
    public animated?: boolean;
    public ongoing: boolean;

    //define the expected types of methods
    public setRuntime(runtime: number): void {
        this.runtime = runtime;
    }
    public setCountryOfOrigin(countryOfOrigin: string): void {
        this.countryOfOrigin = countryOfOrigin;
    }
    public setNumberOfSeasons(numberOfSeasons: number): void {
        this.numberOfSeasons = numberOfSeasons;
    }
    public setNumberOfEpisodes(numberOfEpisodes: number): void {
        this.numberOfEpisodes = numberOfEpisodes;
    }
    public setAnimated(animated: boolean): void {
        this.animated = animated;
    }

    // define the constructor function for the class's instantiation
    constructor (title: string, genre: string, ongoing: boolean) {
        this.title = title;
        this.genre = genre;
        this.ongoing = ongoing;
    }

}
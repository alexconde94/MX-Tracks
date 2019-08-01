import { Component, OnInit } from '@angular/core';
import { TrackFactory } from '../factories/track-factory';
import { TrackService } from '../services/track.service';

@Component({
  selector: 'app-new-track-form',
  templateUrl: './new-track-form.component.html',
  styleUrls: ['./new-track-form.component.css']
})
export class NewTrackFormComponent {

  trackName: string;
  mxsimForumURL: string;
  trackType: string;
  trackDescription: string;
  downloadURL: string;
  imageURL: string;
  youtubeURL: string;
  rating: number;

  constructor(private trackService: TrackService) { }

  submitTrack() {
    this.trackService.addTrack(TrackFactory.createTrack(
        this.trackService.getNextTrackId(),
        this.trackName,
        this.cleanMXSimURL(this.mxsimForumURL),
        this.trackType,
        this.trackDescription,
        this.downloadURL,
        this.imageURL,
        this.youtubeURL,
        this.rating
      )
    );
  }

  private cleanMXSimURL(uncleanURL: string): string {
    console.log("Cleaning " + uncleanURL);

    if (uncleanURL == null || uncleanURL.length == 0) {
      throw Error("Something went wrong cleaning the MXSim forum URL")
    }

    let baseURL: string = "https://forum.mxsimulator.com/viewtopic.php?t=";
    let parsedURL: string[] = uncleanURL.split("t=", 2);

    if (parsedURL.length != 2) {
      throw Error("Something went wrong cleaning the MXSim forum URL")
    }
    else {
      return baseURL.concat(parsedURL[1])
    }
  }

}

import { Injectable } from '@angular/core';
import { MOCK_TRACKS } from 'src/mocks/mock-tracks';
import { Track } from 'src/models/Track';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  trackList: BehaviorSubject<Track[]> = new BehaviorSubject<Track[]>(null);

  constructor() { 
    this.trackList.next(MOCK_TRACKS);
  }

  addTrack(newTrack: Track) {
    this.trackList.next(this.trackList.value.concat(newTrack));
  }

  getNextTrackId(): number {
    return 10;
  }

}

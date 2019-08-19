import { Injectable } from '@angular/core';
import { MOCK_TRACKS } from 'src/mocks/mock-tracks';
import { Track } from 'src/models/Track';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  trackList: BehaviorSubject<Track[]> = new BehaviorSubject<Track[]>(null);

  constructor(private http: HttpClient) {
  }

  getTrackList(): Observable<Track[]> {
    return this.http.get<Track[]>("http://localhost:8080/trackList");
    // return this.http.get<Track[]>("http://mxsimatlasservices-env-1.p3qhwpmbmg.us-east-1.elasticbeanstalk.com:8080/trackList");
  }

  addTrack(newTrack: Track) {
    this.trackList.next(this.trackList.value.concat(newTrack));
  }

  getNextTrackId(): number {
    return 10;
  }

}

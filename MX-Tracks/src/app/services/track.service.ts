import { Injectable } from '@angular/core';
import { MOCK_TRACKS } from 'src/mocks/mock-tracks';
import { Track } from 'src/models/Track';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ApiResponse } from 'src/models/ApiResponse';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  trackList: BehaviorSubject<Track[]> = new BehaviorSubject<Track[]>(null);

  constructor(private http: HttpClient) {
    this.fetchTrackList();
  }

  fetchTrackList() {
    this.http.get<ApiResponse<Track[]>>(environment.midTierBaseUrl + "/trackList").forEach(response => {
      this.trackList.next(response.content);
      console.log(response.message);
    });
  }

  addTrack(newTrack: Track) {
    // this.trackList.next(this.trackList.value.concat(newTrack));
    this.http.post<Track>(environment.midTierBaseUrl + "/trackList/add", newTrack, httpOptions).subscribe();
  }

  getNextTrackId(): number {
    return 10;
  }

}

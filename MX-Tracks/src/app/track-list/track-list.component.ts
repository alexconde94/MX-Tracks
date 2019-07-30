import { Component, OnInit } from '@angular/core';
import { MOCK_TRACKS } from 'src/mocks/mock-tracks';
import { Track } from 'src/models/Track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  trackList: Track[];

  constructor() { 
    this.trackList = MOCK_TRACKS;
  }

  ngOnInit() {
  }

}

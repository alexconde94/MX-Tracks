import { Component, OnInit } from '@angular/core';
import { Track } from 'src/models/Track';
import { MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { TrackService } from '../services/track.service';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 700,
  hideDelay: 100,
  touchendHideDelay: 100
}

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ]
})

export class TrackListComponent{

  trackList: Track[];

  constructor(private trackService: TrackService) { 
    this.trackService.trackList.subscribe(trackList => this.trackList = trackList);
  }

}

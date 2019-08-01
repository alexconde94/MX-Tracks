import { Track } from 'src/models/Track';
import { TrackService } from '../services/track.service';

export class TrackFactory {
    
    nextTrackId: number;

    constructor(private trackService: TrackService) {
        this.nextTrackId = trackService.getNextTrackId();
    }

    public static createTrack(
        trackId: number,
        trackName: string,
        mxsimForumURL: string,
        downloadURL?: string,
        trackType?: string,
        trackDescription?: string,
        imageURL?: string,
        youtubeURL?: string,
        rating?: number ): Track {
        return {
            trackId: trackId,
            trackName: trackName,
            mxsimForumURL: mxsimForumURL,
            downloadURL: downloadURL,
            trackType: trackType,
            trackDescription: trackDescription,
            imageURL: imageURL,
            youtubeURL: youtubeURL,
            rating: rating
        }
    }

}
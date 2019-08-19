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
        mxSimForumUrl: string,
        downloadUrl?: string,
        trackType?: string,
        trackDescription?: string,
        imageUrl?: string,
        youtubeUrl?: string,
        rating?: number ): Track {
        return {
            trackId: trackId,
            trackName: trackName,
            mxSimForumUrl: mxSimForumUrl,
            downloadUrl: downloadUrl,
            trackType: trackType,
            trackDescription: trackDescription,
            imageUrl: imageUrl,
            youtubeUrl: youtubeUrl,
            rating: rating
        }
    }

}
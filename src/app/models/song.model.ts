export class SongModel {
  id: string;
  votes: number;
  name: string;
  artist: string;
  year: string;
}


export class AllSongsModel{
  list: Array<YearlySongsModel> = new Array<YearlySongsModel>();
}

export class YearlySongsModel {
  year: string;
  songs: Array<SongModel> = new Array<SongModel>();
}

import { Component, OnInit } from '@angular/core';
import { SongModel, AllSongsModel, YearlySongsModel } from '../models/song.model';

@Component({
  selector: 'app-fifa',
  templateUrl: './fifa.component.html',
  styleUrls: ['./fifa.component.css']
})
export class FifaComponent implements OnInit {
  topSongs: Array<SongModel> = new Array<SongModel>();
  list2018: Array<SongModel> = new Array<SongModel>();
  list2017: Array<SongModel> = new Array<SongModel>();
  allSongs: Array<YearlySongsModel> = new Array<YearlySongsModel>();
  ngOnInit() {
    this.InitializeFakeLists();
  }

  InitializeFakeLists() {
    this.topSongs = [
      { id: '1', name: 'Where does it come from?', votes: 10, year: '2018', artist: 'ABC' },
      { id: '2', name: 'Where can I get some?', votes: 10, year: '2018', artist: 'BBB' },
      { id: '3', name: 'What is Lorem Ipsum?', votes: 10, year: '2015', artist: 'CCC' },
      { id: '4', name: 'Why do we use it?', votes: 10, year: '2014', artist: 'ABC' },
      { id: '5', name: 'All the Lorem Ipsum', votes: 10, year: '2017', artist: 'ABCD' },
      { id: '6', name: 'Lorem Ipsum', votes: 10, year: '2018', artist: 'EEE' }
    ];

    this.list2018 = [
      { id: '1', name: 'The standard chunk of Lorem Ipsum used since', votes: 10, year: '2018', artist: 'ABC' },
      { id: '2', name: 'Where can I', votes: 10, year: '2018', artist: 'BBB' },
      { id: '3', name: 'What is Lor', votes: 10, year: '2018', artist: 'CCC' },
      { id: '4', name: 'Why do we u', votes: 10, year: '2018', artist: 'ABC' },
      { id: '5', name: 'All the Lor', votes: 10, year: '2018', artist: 'ABCD' }
    ];

    this.list2017 = [
      { id: '1', name: 'Where does it come f', votes: 10, year: '2017', artist: 'ABC' },
      { id: '2', name: 'Where can I get some', votes: 10, year: '2017', artist: 'BBB' },
      { id: '3', name: 'What is Lorem Ipsum?', votes: 10, year: '2017', artist: 'CCC' },
      { id: '4', name: 'Why do we use it?', votes: 10, year: '2017', artist: 'ABC' }
    ];

    this.allSongs.push({ year: '2017', songs: this.list2017 });
    this.allSongs.push({ year: '2018', songs: this.list2018 });
    this.allSongs.push({ year: '2018', songs: this.list2018 });
    this.allSongs.push({ year: '2018', songs: this.list2018 });
    console.log(this.allSongs);
  }
}

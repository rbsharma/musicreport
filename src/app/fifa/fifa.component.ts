import { Component, OnInit } from '@angular/core';
import { SongModel } from '../models';

@Component({
  selector: 'app-fifa',
  templateUrl: './fifa.component.html'
})
export class FifaComponent implements OnInit {
  listA: Array<SongModel> = new Array<SongModel>();
  listB: Array<SongModel> = new Array<SongModel>();
  listC: Array<SongModel> = new Array<SongModel>();
  ngOnInit() {
    this.InitializeFakeLists();
  }

  InitializeFakeLists() {
    this.listA = [
      { id: '1', name: 'Where does it come from?', votes: 10, year: '2018', artist: 'ABC' },
      { id: '2', name: 'Where can I get some?', votes: 10, year: '2018', artist: 'BBB' },
      { id: '3', name: 'What is Lorem Ipsum?', votes: 10, year: '2015', artist: 'CCC' },
      { id: '4', name: 'Why do we use it?', votes: 10, year: '2014', artist: 'ABC' },
      { id: '5', name: 'All the Lorem Ipsum', votes: 10, year: '2017', artist: 'ABCD' },
      { id: '6', name: 'Lorem Ipsum', votes: 10, year: '2018', artist: 'EEE' }
    ];

    this.listB = [
      { id: '1', name: 'The standard chunk of Lorem Ipsum used since', votes: 10, year: '2018', artist: 'ABC' },
      { id: '2', name: 'Where can I', votes: 10, year: '2018', artist: 'BBB' },
      { id: '3', name: 'What is Lor', votes: 10, year: '2015', artist: 'CCC' },
      { id: '4', name: 'Why do we u', votes: 10, year: '2014', artist: 'ABC' },
      { id: '5', name: 'All the Lor', votes: 10, year: '2017', artist: 'ABCD' }
    ];                  

    this.listC = [
      { id: '1', name: 'Where does it come f', votes: 10, year: '2018', artist: 'ABC' },
      { id: '2', name: 'Where can I get some', votes: 10, year: '2018', artist: 'BBB' },
      { id: '3', name: 'What is Lorem Ipsum?', votes: 10, year: '2015', artist: 'CCC' },
      { id: '4', name: 'Why do we use it?', votes: 10, year: '2014', artist: 'ABC' }
    ];                 
}

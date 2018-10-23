import { Component, OnInit, Input } from '@angular/core';
import { SongModel } from '../../../models/song.model';
@Component({
  selector: 'app-fifa-table-main',
  templateUrl: './main-table.component.html'
})
export class MainTableComponent implements OnInit {
  @Input() data: Array<SongModel>;
  ngOnInit() {
    console.log(this.data);
  }
}

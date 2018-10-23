import { Component, OnInit, Input } from '@angular/core';
import { YearlySongsModel } from '../../../models/song.model';
@Component({
  selector: 'app-fifa-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input() data: YearlySongsModel;
  ngOnInit() {
    console.log(this.data);
  }
}

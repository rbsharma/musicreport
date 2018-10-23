import { Component, OnInit, Input } from '@angular/core';
import { SongModel } from '../../../models';
@Component({
  selector: 'app-fifa-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
  @Input() data: SongModel;
  ngOnInit() {
    console.log(this.data);
  }
}

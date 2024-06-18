import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ListItem } from '../list-item/list-item.model';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.css',
})
export class ListTableComponent {
  @Input() list: ListItem[] = [];
  @Output() delete = new EventEmitter<number>();

  constructor() {}

  deleteListItem(id: number) {
    this.delete.emit(id);
  }

  editItem(item: ListItem) {
    // Logic to edit item
  }
}

import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ListItem } from './list-item.model';
import { MenuItem } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() data?: ListItem;

  @Output() delete = new EventEmitter<number>();

  @ViewChild('overlayPanel') overlayPanel: OverlayPanel | undefined;

  assignedUsersMenu: MenuItem[] = [];

  ngOnInit() {
    this.assignedUsersMenu =
      this.data?.assignedUsers.map((user) => ({
        label: user || '',
      })) || [];
  }

  changeActiveStatus() {
    if (this.data) {
      this.data.isActive = !this.data.isActive;
    }
  }

  deleteItem() {
    if (this.data) {
      this.delete.emit(this.data.id);
    }
  }

  showAssignedUsers(event: Event) {
    this.overlayPanel?.toggle(event);
  }
}

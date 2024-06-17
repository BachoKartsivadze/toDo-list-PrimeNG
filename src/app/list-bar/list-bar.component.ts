import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { ListItem } from '../list-item/list-item.model';

@Component({
  selector: 'app-list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.css'],
})
export class ListBarComponent implements OnInit {
  public listForm: FormGroup<{
    name: FormControl<string | null>;
    dueDate: FormControl<Date | null>;
    isActive: FormControl<boolean | null>;
    assignedUsers: FormArray<FormControl<string | null>>;
  }>;

  list: ListItem[] = [];

  constructor(private fb: FormBuilder) {
    this.listForm = this.fb.group({
      name: this.fb.control<string | null>(null),
      dueDate: this.fb.control<Date | null>(null),
      isActive: this.fb.control<boolean | null>(null),
      assignedUsers: this.fb.array<FormControl<string | null>>([
        this.createAssignedUserControl(),
      ]),
    });
  }

  ngOnInit(): void {}

  get assignedUsers(): FormArray<FormControl<string | null>> {
    return this.listForm.controls.assignedUsers;
  }

  createAssignedUserControl(): FormControl {
    return this.fb.control(null, Validators.required);
  }

  addUserField(): void {
    this.assignedUsers.push(this.fb.control<string | null>(null));
  }

  removeUserField(index: number): void {
    this.assignedUsers.removeAt(index);
  }

  createListItem(): void {
    if (this.listForm.valid) {
      const newItem: ListItem = {
        ...(this.listForm.value as Omit<ListItem, 'id'>),
        id: this.list.length + 1,
        isActive: this.listForm.controls.isActive.value || false,
      };
      this.list.push(newItem);
      this.listForm.reset();
      this.assignedUsers.clear();
      this.addUserField();
    }
  }

  deleteListItem(id: number): void {
    this.list = this.list.filter((item) => item.id !== id);
  }
}

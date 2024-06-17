export interface ListItem {
  name: string | undefined;
  id: number;
  isActive: boolean;
  dueDate: Date | null | undefined;
  assignedUsers: (string | null)[];
}

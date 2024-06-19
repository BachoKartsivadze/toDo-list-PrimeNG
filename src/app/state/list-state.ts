import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ListItem } from '../list-item/list-item.model';

// Actions
export class AddListItem {
  static readonly type = '[List] Add Item';
  constructor(public payload: ListItem) {}
}

export class RemoveListItem {
  static readonly type = '[List] Remove Item';
  constructor(public id: number) {}
}

export class UpdateListItem {
  static readonly type = '[List] Update Item';
  constructor(public payload: ListItem) {}
}

// State Model
export interface ListStateModel {
  items: ListItem[];
}

// State
@State<ListStateModel>({
  name: 'list',
  defaults: {
    items: [],
  },
})
export class ListState {
  @Selector()
  static getItems(state: ListStateModel) {
    return state.items;
  }

  @Action(AddListItem)
  add(
    { getState, patchState }: StateContext<ListStateModel>,
    { payload }: AddListItem
  ) {
    const state = getState();
    patchState({
      items: [...state.items, payload],
    });
  }

  @Action(RemoveListItem)
  remove(
    { getState, patchState }: StateContext<ListStateModel>,
    { id }: RemoveListItem
  ) {
    patchState({
      items: getState().items.filter((item) => item.id !== id),
    });
  }

  @Action(UpdateListItem)
  update(
    { getState, patchState }: StateContext<ListStateModel>,
    { payload }: UpdateListItem
  ) {
    const state = getState();
    const items = [...state.items];
    const index = items.findIndex((item) => item.id === payload.id);
    items[index] = payload;
    patchState({ items });
  }
}

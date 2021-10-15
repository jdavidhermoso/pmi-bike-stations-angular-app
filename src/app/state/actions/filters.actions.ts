import {createAction, props} from '@ngrx/store';
import {Filters} from '../../models/filters';

export const filtersActionsIds = {
  filter: '[Filters] filter',
};

export const filter = createAction(filtersActionsIds.filter,
  props<{ payload: Filters }>());

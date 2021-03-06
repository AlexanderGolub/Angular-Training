import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { authenticationReducer } from './authentication.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  authentication: authenticationReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

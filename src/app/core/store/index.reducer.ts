import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';

export const REDUCERS = new InjectionToken<ActionReducerMap<unknown, Action>>('Root reducers token', {
  factory: (): ActionReducerMap<unknown, Action> => ({
    // example: ExampleReducer,
  }),
});

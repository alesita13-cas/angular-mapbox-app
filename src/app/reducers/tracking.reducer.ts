import { Action, createReducer, on, createAction, props } from '@ngrx/store';

export interface TrackingState {
  clicks: { [tag: string]: number };
}

export const initialState: TrackingState = {
  clicks: {}
};

export const trackClick = createAction(
  '[Tracking] Track Click',
  props<{ tag: string }>()
);

export const resetTracking = createAction('[Tracking] Reset');

export const trackingReducer = createReducer(
  initialState,
  on(trackClick, (state, { tag }) => ({
    ...state,
    clicks: {
      ...state.clicks,
      [tag]: (state.clicks[tag] || 0) + 1
    }
  })),
  on(resetTracking, () => initialState)
);

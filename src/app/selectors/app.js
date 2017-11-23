import { createSelector } from 'reselect';

export const getTotalPoint = createSelector(
  state => state.events,
  events => {
    return events.reduce((acc, event) => {
      return acc + event.point;
    }, 0);
  },
);

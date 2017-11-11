import { createActions } from 'redux-actions';

const { resetEvents } = createActions({
  RESET_EVENTS: () => ({}),
});

export { resetEvents };

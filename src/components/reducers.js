export const GREETING_CHANGE = 'GREETING_CHANGE';
export const NAME_CHANGE = 'NAME_CHANGE';

export const changeGreeting = state => state.greeting;
export const changeName = state => state.name;

export function greeting(state = 'Hello', { type, payload }) {
  switch(type) {
    case GREETING_CHANGE:
      return payload;

    default:
      return state;
  }
}

export function name(state = '', { type, payload }) {
  switch(type) {
    case NAME_CHANGE:
      return payload;

    default:
      return state;
  }
}
export default function storeReducer(state = {}, action) {
  switch (action.type) {
    case 'add_todo':
      return [...stater, action.payload.description];
    default:
      return state;
  }
}

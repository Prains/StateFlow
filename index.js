export default class State {
  constructor() {}

  permanentStorage(stateName, initialStateValue) {
    localStorage.setItem(stateName, JSON.stringify(initialStateValue));
  }

  temporaryStorage(stateName, initialStateValue) {
    sessionStorage.setItem(stateName, JSON.stringify(initialStateValue));
  }

  getItemFromStorage(stateName) {
    const localState = JSON.parse(localStorage.getItem(stateName));
    const sessionState = JSON.parse(sessionStorage.getItem(stateName));

    const realState = localState ? localState : sessionState;

    return realState;
  }
}

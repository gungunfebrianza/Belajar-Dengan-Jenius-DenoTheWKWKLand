class AppState {
  states = [];
  private static instanceRef: AppState;
  private constructor(data: string[]) {
  }
  static getInstance(): AppState {
    if (AppState.instanceRef == undefined) {
      AppState.instanceRef = new AppState([]);
    }
    return AppState.instanceRef;
  }
}

//const applicationState = new AppState(); error

const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();

appState1.states.push("hi");
appState2.states.length;
appState2.states.push("Maudy");
appState2.states.length;

console.log(appState1.states);
console.log(appState2.states);

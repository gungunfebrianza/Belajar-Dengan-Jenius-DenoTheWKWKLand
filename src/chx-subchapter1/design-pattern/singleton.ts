class AppState {
  counter = 0;
  private static instanceRef: AppState;
  private constructor() {
  }
  static getInstance(): AppState {
    if (AppState.instanceRef == undefined) {
      AppState.instanceRef = new AppState();
    }
    return AppState.instanceRef;
  }
}

//const applicationState = new AppState(); error

const appState1 = AppState.getInstance();
const appState2 = AppState.getInstance();
console.log("hello");

appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;
console.log(appState1.counter);
console.log(appState2.counter);

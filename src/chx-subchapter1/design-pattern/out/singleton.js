var AppState = /** @class */ (function () {
    function AppState() {
        this.counter = 0;
    }
    AppState.getInstance = function () {
        if (AppState.instanceRef == undefined) {
            AppState.instanceRef = new AppState();
        }
        return AppState.instanceRef;
    };
    return AppState;
}());
//const applicationState = new AppState(); error
var appState1 = AppState.getInstance();
var appState2 = AppState.getInstance();
console.log("hello");
appState1.counter++;
appState1.counter++;
appState2.counter++;
appState2.counter++;
console.log(appState1.counter);
console.log(appState2.counter);
//# sourceMappingURL=singleton.js.map
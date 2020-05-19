var AppState = /** @class */ (function () {
    function AppState(data) {
        this.counter = [];
    }
    AppState.getInstance = function () {
        if (AppState.instanceRef == undefined) {
            AppState.instanceRef = new AppState([]);
        }
        return AppState.instanceRef;
    };
    return AppState;
}());
//const applicationState = new AppState(); error
var appState1 = AppState.getInstance();
var appState2 = AppState.getInstance();
console.log("hello");
appState1.counter.push("hi");
appState2.counter.length;
appState2.counter.push("Maudy");
appState2.counter.length;
console.log(appState1.counter);
console.log(appState2.counter);
//# sourceMappingURL=singleton.js.map
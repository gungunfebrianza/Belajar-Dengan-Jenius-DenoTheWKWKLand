var Win32Virus = /** @class */ (function () {
    function Win32Virus(IDmalware) {
        this.IDMalware = IDmalware;
    }
    Win32Virus.prototype.getOSInformation = function () {
        console.log("OS Windows : User Maudy");
    };
    Win32Virus.prototype.infectStartup = function () {
        console.log("Startup OS Infected");
    };
    Win32Virus.prototype.getIDMalware = function () {
        console.log(this.IDMalware);
    };
    return Win32Virus;
}());
var exampleVirus = new Win32Virus("111");
//# sourceMappingURL=implement-interface.js.map
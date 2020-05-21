var Virus = /** @class */ (function () {
    function Virus(IDmalware) {
        this.IDMalware = IDmalware;
    }
    Virus.prototype.getOSInformation = function () {
        console.log("OS Windows : User Maudy");
    };
    Virus.prototype.infectStartup = function () {
        console.log("Startup OS Infected");
    };
    Virus.prototype.getIDMalware = function () {
        console.log(this.IDMalware);
    };
    return Virus;
}());
var exampleVirus1 = new Virus("101");
exampleVirus1.getOSInformation();
exampleVirus1.infectStartup();
exampleVirus1.getIDMalware();
console.log(typeof exampleVirus1);
var exampleVirus2 = new Virus("102");
console.log(typeof exampleVirus2);
//# sourceMappingURL=virus-game1.js.map
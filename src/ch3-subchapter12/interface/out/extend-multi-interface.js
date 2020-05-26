var CryptoLocker = /** @class */ (function () {
    function CryptoLocker(IDMalware, RansomwareVersion, IDTrojan) {
        this.IDMalware = IDMalware;
        this.RansomwareVersion = RansomwareVersion;
        this.IDTrojan = IDTrojan;
    }
    CryptoLocker.prototype.getOSInformation = function () {
        console.log("OS Windows : User Maudy");
    };
    CryptoLocker.prototype.infectStartup = function () {
        console.log("Startup OS Infected");
    };
    CryptoLocker.prototype.encryptAllFiles = function () {
        console.log("Encrypt All Files, Success");
    };
    CryptoLocker.prototype.extortion = function () {
        console.log("Send Bitcoin to : 8sdhshj6sgjhd&");
    };
    CryptoLocker.prototype.keylogger = function () {
        console.log("Keylogger Active!");
    };
    CryptoLocker.prototype.screenlogger = function () {
        console.log("Screen Active!");
    };
    return CryptoLocker;
}());
var exampleCryptoLocker = new CryptoLocker("101", "v1.0.1", "22");
exampleCryptoLocker.encryptAllFiles();
exampleCryptoLocker.extortion();
//# sourceMappingURL=extend-multi-interface.js.map
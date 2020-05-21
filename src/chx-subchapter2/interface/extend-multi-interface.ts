interface Malware {
  IDMalware: string;
  getOSInformation(): void;
  infectStartup(): void;
}

interface ITrojan {
  IDTrojan: string;
  keylogger(): void;
  screenlogger(): void;
}

interface IRansomware extends Malware, ITrojan {
  RansomwareVersion: string;
  encryptAllFiles(): void;
  extortion(): void;
}

class CryptoLocker implements IRansomware {
  public RansomwareVersion: string;
  public IDMalware: string;
  public IDTrojan: string;
  constructor(IDMalware: string, RansomwareVersion: string, IDTrojan: string) {
    this.IDMalware = IDMalware;
    this.RansomwareVersion = RansomwareVersion;
    this.IDTrojan = IDTrojan;
  }
  getOSInformation(): void {
    console.log("OS Windows : User Maudy");
  }
  infectStartup(): void {
    console.log("Startup OS Infected");
  }
  encryptAllFiles(): void {
    console.log("Encrypt All Files, Success");
  }
  extortion(): void {
    console.log("Send Bitcoin to : 8sdhshj6sgjhd&");
  }
  keylogger(): void {
    console.log("Keylogger Active!");
  }
  screenlogger(): void {
    console.log("Screen Active!");
  }
}

const exampleCryptoLocker: CryptoLocker = new CryptoLocker(
  "101",
  "v1.0.1",
  "22",
);
exampleCryptoLocker.encryptAllFiles();
exampleCryptoLocker.extortion();

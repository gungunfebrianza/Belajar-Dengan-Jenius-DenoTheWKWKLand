interface Ransomware extends IMalware {
  RansomwareVersion: string;
  encryptAllFiles(): void;
  extortion(): void;
}

class WannaCry implements Ransomware {
  public RansomwareVersion: string;
  public IDMalware: string;
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
}

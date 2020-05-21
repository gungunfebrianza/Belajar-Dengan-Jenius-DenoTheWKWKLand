interface Malware {
  IDMalware: string;
  getOSInformation(): void;
  infectStartup(): void;
}

class Virus implements Malware {
  public IDMalware: string;
  constructor(IDmalware: string) {
    this.IDMalware = IDmalware;
  }
  getOSInformation() {
    console.log(`OS Windows User Maudy`);
  }
  infectStartup() {
    console.log();
  }
}

const vir1 = new Virus("1");

interface Trojan extends Malware {
  TrojanVersion: string;
  keylogger(): void;
  screenlogger(): void;
}

class virus2 implements Trojan {
  public TrojanVersion: string;
  keylogger(): void {
    console.log("Keylogger Active");
  }
  screenlogger(): void {
    console.log("Screenlogger Active");
  }
  public IDMalware: string;
  constructor(IDmalware: string) {
    this.IDMalware = IDmalware;
  }
  getOSInformation() {
    console.log(`OS Windows User Maudy`);
  }
  infectStartup() {
    console.log();
  }
}



interface Ransomware {
  RansomwareVersion: string;
  encrypt(): void;
  extortion(): void;
}

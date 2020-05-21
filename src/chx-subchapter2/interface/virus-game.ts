interface Malware {
  IDMalware: string;
  getOSInformation(): void;
  infectStartup(): void;
}

interface Trojan {
  TrojanVersion: string;
  keylogger(): void;
  screenlogger(): void;
}

interface Ransomware {
  RansomwareVersion: string;
  encrypt(): void;
  extortion(): void;
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

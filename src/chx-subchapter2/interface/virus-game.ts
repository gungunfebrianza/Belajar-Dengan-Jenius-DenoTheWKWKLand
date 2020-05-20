interface Malware {
  IDMalware: string;
  getOSInformation(): void;
  infectStartup(): void;
  infect(): void;
}

interface Trojan {
  keylogger(): void;
  screenlogger(): void;
}

interface Ransomware {
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
  infect() {
  }
}

const vir1 = new Virus("1");

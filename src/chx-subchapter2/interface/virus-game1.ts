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

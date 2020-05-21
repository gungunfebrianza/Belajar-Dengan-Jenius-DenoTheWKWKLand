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
  getOSInformation(): void {
    console.log("OS Windows : User Maudy");
  }
  infectStartup(): void {
    console.log("Startup OS Infected");
  }
  getIDMalware(): void {
    console.log(this.IDMalware);
  }
}

const exampleVirus1: Virus = new Virus("101");
exampleVirus1.getOSInformation();
exampleVirus1.infectStartup();
exampleVirus1.getIDMalware();
console.log(typeof exampleVirus1);

const exampleVirus2: Malware = new Virus("102");
console.log(typeof exampleVirus2);

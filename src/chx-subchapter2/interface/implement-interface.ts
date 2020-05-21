interface IMalware {
  IDMalware: string;
  getOSInformation(): void;
  infectStartup(): void;
}

class Win32Virus implements IMalware {
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

const exampleVirus: Win32Virus = new Win32Virus("111");

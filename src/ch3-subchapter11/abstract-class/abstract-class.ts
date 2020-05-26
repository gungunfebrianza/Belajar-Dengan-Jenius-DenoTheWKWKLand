abstract class Agent {
  constructor(public fullName: string) {
  }
  printName(): void {
    console.log(this.fullName);
  }
  abstract printDivision(): void;
}

class AgentCIA extends Agent {
  constructor(public fullName: string, public division: string) {
    super(fullName);
  }
  public printDivision(): void {
    console.log(`Agent ${this.fullName} from ${this.division}`);
  }
}

let agentCIA: Agent;
agentCIA = new AgentCIA("Gun Gun Febrianza", "Counter-terorrism Division");
agentCIA.printDivision();

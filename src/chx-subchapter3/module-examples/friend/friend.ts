class Friend {
  constructor(public firstName: string) {}
}
export class Developer extends Friend {
  constructor(public firstName: string) {
    super(firstName);
  }
}

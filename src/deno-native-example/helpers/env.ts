/**
* @description function method for handling  environment
* this method set value to environment  deno system, for check this environment console.log(Deno.env)
*/
function Env(this: any, key: string, value: any) {
  this.deno = Deno.env.toObject();
  this.keys = this.Keys(key, value);
  Object.defineProperty(this.deno, "ENV", {
    value: this.keys,
    writable: true,
    enumerable: true,
  });
  return this.deno.ENV;
}
/**
* @description function method to get key value for environment
*/
Env.prototype.Keys = function (this: any, key: string, value: any) {
  this.values = this.Values(value);
  const keys: string[] = [];
  keys.push(key);
  this.keys = keys;
  this.key = {};

  if (this.keys.length > 0) {
    for (let i of this.keys) {
      this.key[i] = this.values;
    }
  }
  return this.key;
};
/**
* @description function method to get value for environment
*/
Env.prototype.Values = function (value: any) {
  const values: string[] = [];
  values.push(value);
  this.values = values;
  this.value = undefined;

  if (this.values.length > 0) {
    for (let i of this.values) {
      this.value = i;
    }
  }
  return this.value;
};

/**
* @description function method for handling environment
*/
export function env(key: string, value: any) {
  switch (typeof value) {
    case "string":
      let envStr: any = new (Env as any)(key, value);
      return envStr;
    case "number":
      let envNum: any = new (Env as any)(key, value);
      return envNum;
    default:
      let envAny: any = new (Env as any)(key, value);
      return envAny;
  }
}

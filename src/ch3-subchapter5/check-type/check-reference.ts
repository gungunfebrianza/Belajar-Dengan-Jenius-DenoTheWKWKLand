  const map = new Map();
  const items = ["Hi", "Maudy"];
  const object = {};
  function reflect(value: string) {
    return value;
  }
  console.log(map instanceof Map);
  console.log(items instanceof Array);
  console.log(object instanceof Object);
  console.log(reflect instanceof Function);

  /* 
  true
  true
  true
  true 
  */

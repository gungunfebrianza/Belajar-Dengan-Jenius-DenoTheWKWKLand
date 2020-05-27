const getUser = (id: any, callback: any) => {
  const user = {
    id: id,
    name: "Gun Gun Febrianza",
  };

  console.log("First Function Done!");
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject: any) => {
  console.log("Then Executen Call back");
  console.log(userObject);
});

/* 
  First Function Done!
  Then Executen Call back
  { id: 31, name: "Gun Gun Febrianza" } 
  */

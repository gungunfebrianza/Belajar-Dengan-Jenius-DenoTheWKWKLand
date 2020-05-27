const getUser = (id: any, callback: any) => {
  const user = {
    id: id,
    name: "Gun Gun Febrianza",
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObject: any) => {
  console.log(userObject);
});

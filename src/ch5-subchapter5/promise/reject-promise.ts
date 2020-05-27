var objpromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Error!"));
  }, 1000);
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

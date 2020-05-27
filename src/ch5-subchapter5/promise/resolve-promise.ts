var objpromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("done");
  }, 1000);
});

promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

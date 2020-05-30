var objpromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Success");
  }, 1000);
});

objpromise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);
// Success

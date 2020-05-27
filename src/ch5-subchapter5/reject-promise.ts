var objpromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error("Error!"));
  }, 1000);
});

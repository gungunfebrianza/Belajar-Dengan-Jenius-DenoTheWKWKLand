fetch("https://api.kawalcorona.com/indonesia/")
  .then((res) => res.json())
  .then((data) => {
    data.map((obj: Object) => {
      console.log(obj);
    });
  })
  .catch((err) => console.log(err));

/*   
  {
    name: "Indonesia",
    positif: "23,851",
    sembuh: "6,057",
    meninggal: "1,473",
    dirawat: "16,321"
  } 
  */

  const result = await fetch("https://deno.land/");
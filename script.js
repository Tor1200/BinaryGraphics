function binaryRender() {
  //Initialise value to print (set it to "" to indicate that it's a string, 'cause this isn't typescript)
  let binnum = "";
  //add the amount of 0s as the amount of elements in html(currently 10)
  for (let i in document.querySelector("h1").innerHTML) {
    binnum += "0";
  }
  const areas = [];
  for (let i = 0; i < binnum.length / 2; i++) {
    let toAdd = Math.floor(Math.random() * binnum.length);
    if (!areas.includes(toAdd)) {
      areas.push(toAdd);
    } else {
      i--;
    }
  }
  for (let i = 0; i < areas.length; i++) {
    let temp =
      binnum.slice(0, areas[i]) +
      "1" +
      binnum.slice(areas[i] + 1, binnum.length);
    binnum = temp;
  }
  document.querySelector("h1").innerHTML = binnum;
  console.log(binnum);
}

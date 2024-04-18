
const API_URL="https://restcountries.com/v3.1/all"

// console.log(API_URL);
 function reqListener() {
     const countriesData=(JSON.parse(this.responseText));
   
     console.log(countriesData.length);
     for(let i=0;i<countriesData.length;i++){
     console.log (countriesData[i].flags.png);
     }
    }

    // function reqListener() {
    //     console.log(this.responseText);
    //   }
      
      const req = new XMLHttpRequest();
      req.addEventListener("load", reqListener);
      req.open("GET", API_URL);
      req.send();
      
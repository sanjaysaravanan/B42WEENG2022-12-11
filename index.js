// Load all the countries data from the restcountries.com
//  (https://restcountries.com/v3.1/all) and show in the console

// Step 1:
// Creating an XMLHttpRequest Object ( Has the capablity to load data from server )
const countriesRequest = new XMLHttpRequest();

// Step 2: Configuration
countriesRequest.open('GET', 'https://restcountries.com/v3.1/all/sdfasd');

// Step 3: Make the Request
countriesRequest.send();

// Step 4: Get the data in Your desired format
countriesRequest.onload = function () {

  if (countriesRequest.status === 200) {
    const countries = JSON.parse(countriesRequest.responseText);
    // country
    /**
     * {
     * flag: 'FL',
     *  name: {
     *    common: 'India'  
     *  }
     * }
     */https://restcounts.com
    // countries.forEach(function displayCountryInfo(country) {
    //   // console.log(country['name']['common'], country['flag']);
    //   console.log(country.name.common, country.flag);
    // });

    // for...in
    // for(var index in countries) {
    //   console.log(countries[index].name.common, countries[index].flag);
    // }

    // for...of
    for (var country of countries) {
      console.log(country.name.common, country.flag);
    }
  } else {
    console.log('Countries Not Found');
  }


}

countriesRequest.onerror = function () {
  console.log('Countries Not Found');
}

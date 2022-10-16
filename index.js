// attach eventlistener to button

 document.getElementById('country-name-btn').addEventListener('click', () => {

   const userInput = document.getElementById('country-name-input').value 
   
   getCountryInfo(userInput)

})
 
 function getCountryInfo(countryName){

    fetch('./countries/countries.txt')
     .then( function (response) {
      //   console.log('Response from API: ', response.json());
        return response.json();
     })
        .then( (data) => {
           console.log('Data from API: ', data)
           const countries = data;
           for(let country of countries){
            if(countryName ===''){
             document.getElementById('country-name').innerText ='You must enter a country.'
             return;
            }
            else if( countryName.toLowerCase() === country.name.toLowerCase()){
          
             document.getElementById('country-name').innerText = country.name;
             document.getElementById('country-capital').innerText = `Capital: ${country.capital}`
             document.getElementById('country-flag').setAttribute('src', country.flags.svg );
             document.getElementById('population').innerHTML = `This country is located in ${country.subregion} and has <span>${country.population}</span> inhabitants.`
             return;
            }
            else{
             document.getElementById('country-name').innerText =`${countryName} wasn't found in our record.`
            }
         }
        })
     .catch( (error) => {
      console.log('Error while getting the data: ', error)
      document.getElementById('country-name').innerText = 'Error while getting the data.' 
     })
 }

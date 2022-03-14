console.log('i love you');
const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data => displayCountries(data))
}

const displayCountries = (country) =>{
    console.log(country);
}


loadCountries()
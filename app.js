// const loadCountries = ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res =>res.json())
//     .then(data => displayCountries(data))
// }

// const displayCountries = countries =>{
//     console.log(countries[0]);
//     const countriesHtml = countries.map(country=>getCountryHtml(country))
//     const container = document.getElementById('countries')
//     container.innerHTML = countriesHtml.join(' ')
// }


// const getCountryHtml = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }


// loadCountries()


// pracricing


// const loadCountries =() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data =>displayCountries(data))
// }

// const displayCountries = countries =>{
//     // console.log(countries);
//     const countriesHtml = countries.map(country=>getCountryHtml(country))
//     const container =document.getElementById('countries')
//     container.innerHTML = countriesHtml.join(' ')
//     // console.log(countriesHtml);
// }

// const getCountryHtml=country=>{
//     return `
//     <div class= "country">
//         <h2>${country.name.common}</h2>
//         <img src = "${country.flags.png}">
//     </div>
//     `
// }



// loadCountries()

// again practising

const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data =>displayCountries(data))
}

const displayCountries = countries =>{
    const countriesHtml=countries.map(country=>getCountryHtml(country))
    const container = document.getElementById('countries')
    container.innerHTML=countriesHtml.join(' ')

}

const getCountryHtml = ({name,flags,area,continents}) =>{
    return `
    <div>
    <h2>${name.common}</h2>
    <p>Area: ${area}</p>
    <p>Continent: ${continents}</p>
    <img src="${flags.png}">
    </div>
    `
}

loadCountries()
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = countries => {
    console.log(countries[10]);
    const container = document.getElementById('countries');
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join('');
    // console.log(countryHTML)
}

const getCountryHTML = country => {
    return `
        <div class="country">
            <h2>${country.altSpellings[1]}</h2>
            <h4>${country.capital}</h4>
            <img src="${country.flags.png}">
        </div>
    
    `
}
loadCountries()
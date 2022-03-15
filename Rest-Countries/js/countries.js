const loadCountreis = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountreis();

const displayCountries = countries => {
    //console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountriesHTML);
    const container = document.getElementById('countries').innerHTML = allCountriesHTML.join(' ');

}

const getCountryHTML = country => {
    //console.log(country.flags.png);
    return `
    <div class="country">
    <h2> ${country.name.common}</h2>
    <img src="${country.flags.png}"> 
    </div>
    `

}
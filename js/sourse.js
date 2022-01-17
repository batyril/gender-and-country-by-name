import {UI_ELEMENTS} from "../js/view.js";

const URL= {
    MALE : 'https://api.genderize.io',
    COUNTRY : 'https://api.nationalize.io',
}

let massage = undefined;
let endMale= undefined;

function GetMale(name){
    const serverUrl = URL.MALE;
    const url = `${serverUrl}?name=${name}`;
    fetch(url)
        .then(response => response.json())
        .then( function (user)  {
            endMale = user.gender;
            UI_ELEMENTS.NAME.textContent =  `  ${name}`;
            UI_ELEMENTS.MALE.textContent =  `  ${endMale}`;
        } );

}

function GetCountry(name){
    const firstName = name;
    const serverUrl = URL.COUNTRY;
    const url = `${serverUrl}?name=${firstName}`;
    fetch(url)
        .then(response => response.json())
        .then( function (user)  {
            return user.country[0]
        } )
        .then( function (country) {
            UI_ELEMENTS.COUNTRY.textContent =  `  ${country.country_id}`;
        });

}

UI_ELEMENTS.FORM.addEventListener('submit', function(){
    event.preventDefault();
    massage = UI_ELEMENTS.FORM_TEXT.value;
    UI_ELEMENTS.FORM_TEXT.value =''
    GetMale(massage);
    GetCountry(massage);
})
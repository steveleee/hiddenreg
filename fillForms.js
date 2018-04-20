function generateLastName() {
    return "last_name"
}

function generateFirstName() {
    return "first_name"
}

function generateEmail() {
    return "test@mail.com"
}

function generateBirthday() {
    return {
        monthNumber: 1,
        monthText: 'January',
        day: 1,
        year: 1990
    }
}

function fillYelpRegistration() {
    let firstNameInput = document.getElementById("first_name");
    firstNameInput.value = generateFirstName();

    let lastNameInput = document.getElementById("last_name");
    lastNameInput.value = generateLastName();

    let emailInput = document.getElementById("email");
    emailInput.value = generateEmail();

    let birthdate = generateBirthday();

    let birthMonthInput = document.getElementsByName("birthdate_m")[0];
    birthMonthInput.value = birthdate.monthNumber;

    let birthDayInput = document.getElementsByName("birthdate_d")[0];
    birthDayInput.value = birthdate.day;

    let birthYearInput = document.getElementsByName("birthdate_y")[0];
    birthYearInput.value = birthdate.year;
}

function fillCollegeConfidentialRegistration() {

}

chrome.runtime.sendMessage({type: "url"}, function(response) {
    let url = response.url;

    if (url == 'https://www.yelp.com/signup') {
        fillYelpRegistration();
    }
    else {
        console.log("URL not supported");
    } 
});

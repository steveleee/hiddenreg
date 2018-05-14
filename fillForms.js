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
    let firstNameInput = document.getElementById("register_firstname");
    firstNameInput.value = generateFirstName();

    let lastNameInput = document.getElementById("register_lastname");
    lastNameInput.value = generateLastName();

    let emailInput = document.getElementById("register_email");
    emailInput.value = generateEmail();

    let birthdate = generateBirthday();

    let birthMonthInput = document.getElementById("register_ccProfile_dob_month");
    birthMonthInput.value = birthdate.monthNumber;

    let birthDayInput = document.getElementById("register_ccProfile_dob_day");
    birthDayInput.value = birthdate.day;

    let birthYearInput = document.getElementById("register_ccProfile_dob_year");
    birthYearInput.value = birthdate.year;
}

function fillAOLRegistration() {
    let firstNameInput = document.getElementById("usernamereg-firstName");
    firstNameInput.value = generateFirstName();

    let lastNameInput = document.getElementById("usernamereg-lastName");
    lastNameInput.value = generateLastName();

    let birthdate = generateBirthday();

    let birthMonthInput = document.getElementById("usernamereg-month");
    birthMonthInput.value = birthdate.monthNumber;

    let birthDayInput = document.getElementById("usernamereg-day");
    birthDayInput.value = birthdate.day;

    let birthYearInput = document.getElementById("usernamereg-year");
    birthYearInput.value = birthdate.year;
}

chrome.runtime.sendMessage({type: "url"}, function(response) {
    let url = response.url;

    if (url == 'https://www.yelp.com/signup') {
        fillYelpRegistration();
    }
    else if (url.includes('https://auth.collegeconfidential.com/module.php/hobsonsregister/register.php')) {
        fillCollegeConfidentialRegistration();
    }
    else if (url.includes('https://login.aol.com/account/create')) {
        fillAOLRegistration();
    }
    else {
        console.log("URL not supported");
    } 
});

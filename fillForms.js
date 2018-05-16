function fetchRandomInfo() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://gentle-tor-49998.herokuapp.com/users", false);
    xhr.send();

    let result = JSON.parse(xhr.responseText)['results'][0];

    return result;
}

function fillYelpRegistration() {
    let info = fetchRandomInfo();

    let firstNameInput = document.getElementById("first_name");
    firstNameInput.value = info.name.first;

    let lastNameInput = document.getElementById("last_name");
    lastNameInput.value = info.name.last;

    let emailInput = document.getElementById("email");
    emailInput.value = info.email;

    let passwordInput = document.getElementById("password");
    passwordInput.value = info.login.password;

    let zipInput = document.getElementById("zip");
    zipInput.value = info.location.postcode;

    let birthMonthInput = document.getElementsByName("birthdate_m")[0];
    birthMonthInput.value = parseInt(info.dob_month);

    let birthDayInput = document.getElementsByName("birthdate_d")[0];
    birthDayInput.value = parseInt(info.dob_day);

    let birthYearInput = document.getElementsByName("birthdate_y")[0];
    birthYearInput.value = info.dob_year;

    saveInfoToStorage('yelp', info);
}

function fillCollegeConfidentialRegistration() {
    let info = fetchRandomInfo();

    let firstNameInput = document.getElementById("register_firstname");
    firstNameInput.value = info.name.first;

    let lastNameInput = document.getElementById("register_lastname");
    lastNameInput.value = info.name.last;

    let emailInput = document.getElementById("register_email");
    emailInput.value = info.email;

    let usernameInput = document.getElementById("register_ccProfile_username");
    usernameInput.value = info.login.username;

    let birthMonthInput = document.getElementById("register_ccProfile_dob_month");
    birthMonthInput.value = parseInt(info.dob_month);

    let birthDayInput = document.getElementById("register_ccProfile_dob_day");
    birthDayInput.value = parseInt(info.dob_day);

    let birthYearInput = document.getElementById("register_ccProfile_dob_year");
    birthYearInput.value = info.dob_year;

    saveInfoToStorage('college_confidential', info);
}

function fillAOLRegistration() {
    let info = fetchRandomInfo();

    let firstNameInput = document.getElementById("usernamereg-firstName");
    firstNameInput.value = info.name.first;

    let lastNameInput = document.getElementById("usernamereg-lastName");
    lastNameInput.value = info.name.last;

    let usernameInput = document.getElementById("usernamereg-yid");
    usernameInput.value = info.login.username;

    let passwordInput = document.getElementById("usernamereg-password");
    passwordInput.value = info.login.password;

    let genderInput = document.getElementById("usernamereg-freeformGender");
    genderInput.value = info.gender;

    // let phoneNumberInput = document.getElementById("usernamereg-phone");
    // let processedNumber = info.phone;
    // phoneNumberInput.value = processedNumber.split(")")[0].substring(1, 4) + processedNumber.split("-")[1] + processedNumber.split("-")[2];
    // console.log(processedNumber);
    // console.log(phoneNumberInput.value);

    let birthMonthInput = document.getElementById("usernamereg-month");
    birthMonthInput.value = parseInt(info.dob_month);

    let birthDayInput = document.getElementById("usernamereg-day");
    birthDayInput.value = parseInt(info.dob_day);

    let birthYearInput = document.getElementById("usernamereg-year");
    birthYearInput.value = info.dob_year;

    saveInfoToStorage('aol', info);
}

function saveInfoToStorage(key, info) {
    chrome.storage.local.set({ [key]: info }, function() {
        // Do nothing.
    });
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

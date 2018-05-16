function addTableRow(website, info) {
    if (info == null) {
        return;
    }
    
    let table = document.getElementById("credentials");
    let row = table.insertRow(-1);

    let websiteCell = row.insertCell(0);
    let usernameCell = row.insertCell(1);
    let emailAddressCell = row.insertCell(2);
    let passwordCell = row.insertCell(3);
    let firstNameCell = row.insertCell(4);
    let lastNameCell = row.insertCell(5);
    let birthMonthCell = row.insertCell(6);
    let birthDayCell = row.insertCell(7);
    let birthYearCell = row.insertCell(8);

    websiteCell.innerHTML = website;
    usernameCell.innerHTML = info.login.username;
    emailAddressCell.innerHTML = info.email;
    passwordCell.innerHTML = info.login.password;
    firstNameCell.innerHTML = info.name.first;
    lastNameCell.innerHTML = info.name.last;
    birthMonthCell.innerHTML = info.dob_month;
    birthDayCell.innerHTML = info.dob_day;
    birthYearCell.innerHTML = info.dob_year;
};

chrome.storage.local.get('aol', function(result){
    addTableRow("AOL", result.aol);
});

chrome.storage.local.get('yelp', function(result){
    addTableRow("Yelp", result.yelp);
});

chrome.storage.local.get('college_confidential', function(result){
    addTableRow("College Confidential", result.college_confidential);
});

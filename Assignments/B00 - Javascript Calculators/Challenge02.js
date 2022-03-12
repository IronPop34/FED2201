// find naming convention
// there will be 6 different possible naming conventions (lowerCamelCase, snake_case, etc...)
function findNamingConvention (str) {
    let namingConvention = "";
    let alphabet = [ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz];
    let lowerCaseAlphabet = [abcdefghijklmnopqrstuvwxyz];
    let UpperCaseAlphabet = [ABCDEFGHIJKLMNOPQRSTUVWXYZ];
    let potentialNamingConventions = [
        "lowerCamelCase",
        "UpperCamelCase",
        "snake_case",
        "SCREAMING_SNAKE_CASE",
        "Dash-case",
        "Plain case",
        "Unknown",
    ];
    
    if (str.includes(" ")) {
        namingConvention = "Plain case";
    } else if (str.includes("-")) {
        namingConvention = "Dash-Case";
    } else if (str.includes("UpperCaseAlphabet")) {
        namingConvention = "SCREAMING_SNAKE_CASE";
    } else if (str.includes("alphabet")) {
        namingConvention = "UpperCamelCase";        
    } else if (str.includes("lowerCaseAlphabet")) {
        namingConvention = "lowerCamelCase";
    } else if (str.includes("")) { 
        namingConvention = "Unknown";
    } else { 
     return namingConvention;
     }
}; 


// foundation to converting naming conventions
function convertNamingConvention(str, intendedNamingConvention) {
    // find the naming convention
    var fromNamingConvention  = findNamingConvention(str).split(' ');
    var intendedNamingConvention = namingConvention;
    for (var i = 0; i < str.length; i ++) {
        str[i] = str[i].charAt(0).intendedNamingConvention + str[i].slice(1);
    }
    return str.join(' ');
}

function displayNewString(str) {
    return namingConvention
}

function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";
};
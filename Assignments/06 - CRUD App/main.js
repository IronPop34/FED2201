var listOfGuests = [];

var entriesCreated = 0;
var updateGuestButton = document.getElementById("Update")
var deleteGuestButton = document.getElementById("Delete")
var submitGuestButton = document.getElementById("Submit-Guest")
var guestFirstNameInput = document.getElementById("First-Name")
var guestMiddleNameInput = document.getElementById("Middle-Name")
var guestLastNameInput = document.getElementById("Last-Name")
var guestEmailInput = document.getElementById("Email")
var guestDateOfBirthInput = document.getElementById("Date-of-Birth")
var guestStreetAddressInput = document.getElementById("Street-Address")
var guestCityInput = document.getElementById("City")
var guestStateInput = document.getElementById("State")
var guestZipInput = document.getElementById("Zip")


var guestsSubmittedElement = document.getElementById("guest-list")
var submitGuestButton = document.getElementById("SubmitGuest")
// console.dir(submitCarButton)

submitGuestButton.addEventListener( "click", (event) => {
    event.preventDefault();
    entriesCreated++;
  

    //print info in the console
    console.log(`Guest Information submitted:
     \nFirstName: ${guestFirstNameInput.value}
     \nMiddleName:${guestMiddleNameInput.value}
     \nLastName: ${guestLastNameInput.value}
     \nEmail: ${guestEmailInput.value}
     \nDateOfBirth: ${guestDateOfBirthInput.value}
     \nStreetAddress: ${guestStreetAddressInput.value}
     \nCity: ${guestCityInput.value}
     \nState: ${guestStateInput.value}
     \nZip: ${guestZipInput.value}`)
    
    // attach to some stored value
    var guestObject = new Guest(guestFirstNameInput.value, guestMiddleNameInput.value, guestLastNameInput.value, guestEmailInput.value, guestDateOfBirthInput.value, guestStreetAddressInput.value, guestCityInput.value, guestStateInput.value, guestZipInput.value);

    listOfGuests.push(guestObject);

    console.log('Guest List')
    console.log('listOfGuests')

    
    // add the submitted car to the OL in HTML
    // pull the innerHTML
    let existingListOfGuestsHTML = guestsSubmittedElement.innerHTML
    // now add in new data
    guestsSubmittedElement.innerHTML  = `
    ${existingListOfGuestsHTML}
    <li id="entry-${guestObject.id}">
        <ul >
            <li> <strong>FirstName: </strong> ${guestFirstNameInput.value}</li>
            <li> <strong>MiddleName: </strong> ${guestMiddleNameInput.value}</li>
            <li> <strong>LastName: </strong> ${guestLastNameInput.value}</li>
            <li> <strong>Email: </strong> ${guestEmailInput.value}</li>
            <li> <strong>DateOfBirth: </strong> ${guestDateOfBirthInput.value}</li>
            <li> <strong>StreetAddress: </strong> ${guestStreetAddressInput.value}</li>
            <li> <strong>City: </strong> ${guestCityInput.value}</li>
            <li> <strong>State: </strong> ${guestStateInput.value}</li>
            <li> <strong>Zip: </strong> ${guestZipInput.value}</li>
        </ul>

    <button id="Update-Entry-${guestObject.id}" onclick="updateGuestEntry(${guestObject.id})">Update</button>
        
    <button id="Delete-Entry-${guestObject.id}" onclick="deleteGuestEntry(${guestObject.id})">Delete</button>

    </li>     
    `
    // deleteGuestButton.addEventListener("click", (event) => {
    // figure out the target LI of the event
    // console.dir(event)    
    // })
    // Update Button Function
    function findGuestByID (id) {
        return listOfGuests.filter (guest => guest.id==id) [0]
}
    
    function updateGuestEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
              
}
    
    // Delete Button Function
    function findGuestByID (id) {
        return listOfGuests.filter (guest => guest.id==id) [0]
}
    
    function deleteGuestEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
        foundEntry.remove ()        
}

    // clear the input fields
    guestFirstNameInput.value = ""
    guestMiddleNameInput.value = ""
    guestLastNameInput.value = ""
    guestEmailInput.value = ""
    guestDateOfBirthInput.value = ""
    guestStreetAddressInput.value = ""
    guestCityInput.value = ""
    guestStateInput.value = ""
    guestZipInput.value = ""

    // alert("Submit was clicked!")
})


// Constructor Function
function Guest(firstName, middleName, lastName, email, dateOfBirth, streetAddress, city, state, zip) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.id = entriesCreated;
}

// Update Guest
function findGuestByID (id) {
    return listOfGuests.filter (guest => guest.id==id) [0]
}

function updateGuestEntry (id) {
    var foundEntry = document.getElementById (`entry-${id}`)
    console.dir (foundEntry)
    
}

// Delete Guest
    function findGuestByID (id) {
        return listOfGuests.filter (guest => guest.id==id) [0]
    }

    function deleteGuestEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
        foundEntry.parentNode.remove ()        
    }
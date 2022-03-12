var listOfMembersOfTheIronCore = []

var SignUp = document.getElementById("Sign-Up")

var entriesCreated = 0;
var memberFirstNameInput = document.getElementById("First-Name")
var memberLastNameInput = document.getElementById("Last-Name")
var memberUsernameInput = document.getElementById("Username")
var memberPasswordInput = document.getElementById("Password")
var memberEmailInput = document.getElementById("Email")
var memberContactNumberInput = document.getElementById("Contact-Number")

var memberSubmittedElement = document.getElementById("List-of-Members-of-The-IronCore")
var submitGuestButton = document.getElementById("SubmitMember")

 submitMemberButton.addEventListener("click", (event) => {
     event.preventDefault();
     entriesCreated++;


     console.log(`Member Information submitted: \nFirstName: ${memberFirstNameInput.value}\nLastName: ${memberLastNameInput.value}\nUsername: ${memberUsernameInput.value}\nPassword: ${memberPasswordInput.value}\nEmail: ${memberEmailInput.value}\nContactNumber: ${memberContactNumberInput.value}`)

     var memberObject = new Member(memberFirstNameInput.value, memberLastNameInput.value, memberUsernameInput.value, memberPasswordInput.value, memberEmailInput.value, memberContactNumberInput.value)

     listOfMembersOfTheIronCore.push(memberObject);
        
     console.log('Member List')
     console.log('ListOfMembersOIronCore')
    
     let existingListOfMembersHTML = memberSubmittedElement.innerHTML

     memberSubmittedElement.innerHTML =`
     ${existingListOfMembersHTML}
     <li id="entry-${memberObject.id}">
         <ul>
             <li> <strong>First Name: </strong> ${memberFirstNameInput.value}</li>
             <li> <strong>Last Name: </strong> ${memberLastNameInput.value}</li>
             <li> <strong>Username: </strong> ${memberUsernameInput.value}</li>
             <li> <strong>Password: </strong> ${memberPasswordInput.value}</li>
             <li> <strong>Email: </strong> ${memberEmailInput.value}</li>
             <li> <strong>Contact Number: </strong> ${memberContactNumberInput.value}</li>
         </ul>
    
     <button id="Update-Entry-${memberObject.id}" onclick="updateMemberEntry(${memberObject.id})">Update</button>
     <button id="Delete-Entry-${memberObject.id}" onclick="deleteMemberEntry(${memberObject.id})">Delete</button>
    
     </li>
     `
    
//     function findMemberByID (id) {
//         return listOfGuests.filter (guest => guest.id==id) [0]
//     }
    
//     function deleteMemberEntry (id) {
//         var foundEntry = document.getElementById (`entry-${id}`)
//         console.dir (foundEntry)
//         foundEntry.remove ()
//     }

//     function findMemberByID (id) {
//         return listOfGuests.filter (guest => guest.id==id) [0]
//     }
    
//     function updateMemberEntry (id) {
//         var foundEntry = document.getElementById (`entry-${id}`)
//         console.dir (foundEntry)
        
//     }

// Clear the input fields
     memberFirstNameInput.value = ""
     memberLastNameInput.value = ""
     memberUsernameInput.value = ""
     memberPasswordInput.value = ""
     memberEmailInput.value = ""
     memberContactNumberInput.value = ""

//Constructor Function
     function Member(FirstName, LastName, Email, ContactNumber) {
         this.FirstName = FirstName;
         this.LastName = LastName;
         this.Username = Username;
         this.Password = Password;
         this.Email = Email;
         this.ContactNumber = ContactNumber;
         this.id = entriesCreated;
     }

// Delete Button
    function findMemberByID (id) {
        return MembersOfTheIronCore.filter (member => member.id==id) [0]
    }

    function deleteMemberEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
        foundEntry.parentNode.remove ()        
    }

    function findMemberByID (id) {
        return listOfMembersOfTheIronCore.filter (guest => guest.id==id) [0]
    }

    function deleteGuestEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
        foundEntry.remove ()        
    }
 })
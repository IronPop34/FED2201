$(document).ready(() => {
    var fireBaseURL = "https://project-01---twitter-clone-default-rtdb.firebaseio.com/"
    var jsonExt = ".json"

    function Member(FirstName, LastName, Username, Password, Email, ContactNumber) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Username = Username;
        this.Password = Password;
        this.Email = Email;
        this.ContactNumber = ContactNumber;
    }
    var listOfMembersOfTheIronCore = []

    var submitMemberButton = $("#Sign-Up"); // 

    var memberFirstNameInput = $("#member-First-Name")
    var memberLastNameInput = $("#member-Last-Name")
    var memberUsernameInput = $("#member-Username")
    var memberPasswordInput = $("#member-Password")
    var memberEmailInput = $("#member-Email")
    var memberContactNumberInput = $("#member-Contact-Number")

    var memberSubmittedElement = $("#list-of-members-submitted")

    submitMemberButton.click((e) => {
        e.preventDefault();
        let submittedMember = {
            FirstName: memberFirstNameInput.val(),
            LastName: memberLastNameInput.val(),
            Username: memberUsernameInput.val(),
            Password: memberPasswordInput.val(),
            Email: memberEmailInput.val(),
            ContactNumber: memberContactNumberInput.val()
        }


        console.log(`Member Information submitted: \nFirstName: ${submittedMember.FirstName}\nLastName: ${submittedMember.LastName}\nUsername: ${submittedMember.Username}\nPassword: ${submittedMember.Password}\nEmail: ${submittedMember.Email}\nContactNumber: ${submittedMember.ContactNumber}`)
        
        listOfMembersOfTheIronCore.push(new Member(submittedMember.FirstName, submittedMember.LastName, submittedMember.Username, submittedMember.Password, submittedMember.Email, submittedMember.ContactNumber))
        console.log(listOfMembersOfTheIronCore)

        let existingListOfMembersHTML = memberSubmittedElement.html()

        memberSubmittedElement.html(` ${existingListOfMembersHTML}
        <li>
            <ul>
                <li> <strong>FirstName: </strong> ${submittedMember.FirstName}</li>
                <li> <strong>LastName: </strong> ${submittedMember.LastName}</li>
                <li> <strong>Username: </strong> ${submittedMember.Username}<li>
                <li> <strong>Password: </strong> ${submittedMember.Password}<li>
                <li> <strong>Email: </strong> ${submittedMember.Email}</li>
                <li> <strong>ContactNumber: </strong> ${submittedMember.ContactNumber}</li>
            </ul>
        </li>
        `)

        $.post(`${fireBaseURL}/Members${jsonExt}`, JSON.stringify(submittedMember))
            .then(console.log("data created!"))

        memberFirstNameInput.val("")
        memberLastNameInput.val("")
        memberUsernameInput.val("")
        memberPasswordInput.val("")
        memberEmailInput.val("")
        memberContactNumberInput.val("")
        })
        
        // // fetch("./member-data.json")
        // // .then (response => response.json())
        // // .then(data => console.log(data))
});
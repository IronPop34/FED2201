$(document).ready(() => {
    var fireBaseURL = "https://project-01---twitter-clone-default-rtdb.firebaseio.com/"
    var jsonExt = ".json"

    var fullFirebase = {}
    var listOfMembers = []

    function getMembers() {
        $.get(`${fireBaseURL}Members${jsonExt}`)
        .then((data) => {
            console.dir(data)
            for (user in data){
                listOfMembers.push (data[user].Username)
                console.log(`Success!! ${data[user].Username} loaded`)
            }
        })
    }
    getMembers()

    
    
    function postUserToFB () {
        $.post(`${firebaseUrl}/users${jsonExt}`, JSON.stringify({Username: "ex001", Password: "ex001"}))
            .then(console.log("data created!"))
    
    $("#postToFB").click((e) => {
        e.preventDefault()
        console.log("button clicked!!")
        postUserToFB()
    })

    $("#GetFirebaseData").click((e) => {
        e.preventDefault()
        $.get(`${fireBaseURL}/users${jsonExt}`)
            .then((data) => {
                console.dir(data)
                fullFirebase = data
                console.dir(data)

                for (user in fullFirebase) {
                    if( listOfMembersOfTheIronCore.includes(Username)) {

                    } else {
                        listOfMembersOfTheIronCore.push ({
                            id: Username,
                            FirstName: data[FirstName].FirstName,
                            LastName: data[LastName].LastName,
                            Username: data[Username].Username,
                            Password: data[Password].Password,
                            Email: data[Email].Email,
                            ContactNumber: data[ContactNumber].ContactNumber
                        })
                    }
                }
               
            }) .then(console.log(list))
    })

    $("GETFirebaseData").click((e) => {
        e.preventDefault()
        getUsers()

        listOfMembersOfTheIronCore.forEach(( user ) => {
            $("update-AJAX nav").HTML(`<a>${user.FirstName}</a><a>${user.LastName}</a><a>${user.Username}</a><a>${user.Password}</a><a>${user.Email}</a><a>${user.ContactNumber}</a>`)
        })
    })

    function deleteUser(Username) {
        
        let foundUser = listOfMembersOfTheIronCore.find(user => user.Username === username)
        
        console.log(`USER: ${Username} was ${foundUser === {} ? "NOT Found":"FOUND"}`)

        let listCheck = listOfMembersOfTheIronCore === [] ? false:true
        
        console.log(`from within the "deleteUser" function, the current list of Users is: ${listOfMembersOfTheIronCore}`)
        if(list && listOfMembersOfTheIronCore.includes(Username)) {
            console.log(`user: ${Username} found!`)
            $.ajax({
                url: '${firebaseUrl}/users/${foundUser.id} ',
                type: "DELETE",
                success: console.log(`DELETE was successful`)
            }).then(getUsername())
          
            } else {
            console.log(`user: ${Username} CANNOT be found!`)
        }
    }       

        $("#delete-user-button").click((e) => {
            e.preventDefault()
            let userToBeDeleted = $("#delete-user").val()
            e.preventDefault()
            deleteUser (userToBeDeleted)
        })
    }
})
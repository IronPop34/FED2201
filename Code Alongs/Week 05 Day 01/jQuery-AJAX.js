$(document).ready(() => {

    var fireBaseURL = "url to database"
    var jsonExt = ".json"

    // data planned to be stored
    var listOfFBUsers = []

    // get data from a database
    $.get(`${firebaseUrl}/users${jsonExt}`)
    .then((data) => {
        console.dir(data)
        for ( user in data){
            listOfFBUsers.push (user)
            console.log(`Success!! ${[user].username} loaded!`)
        } 
    })

    // post data to DB
     function postUserToFB () {
        $.post(`${firebaseUrl}/users${jsonExt}`, JSON.stringify({name: "example", username: "ex001"}))).then(console.log("data created!"))
    

    // set up jQuery to listen for button's click event
    $("#postToFB").click((e) => {
        e.preventDefault()
        console.log("button clicked!!!")
        postUserToFB()
    })    
var listOfPosts = [];

var entriesCreated = 0;
var updatePostButton = document.getElementById("Update")
var deletePostButton = document.getElementById("Delete")

var membersPostsInput = document.getElementById("MembersPost")
var submitPostButton = document.getElementById("Submit-Guest")

var postSubmittedELement =  document.getElementById ("Post")
var submitPostButton = document.getElementById("Submit-Guest")

submitPostButton.addEventListener( "click", (event) => {
    event.preventDefault();
    entriesCreated++;
  

    console.log(`Guest Information submitted:
     \nPost: ${memberPostInput.value}`)
    
    var memberObject = new Post(membersPost.value);

    listOfPosts.push(postObject);

    let existingListOfPostsHTML = memberSubmittedElement.innerHTML
    
    guestsSubmittedElement.innerHTML  = `
    ${existingListOfGuestsHTML}
    <li id="entry-${memberObject.id}">
        <ul >
            <li> <strong>Post: </strong> ${memberPostInput.value}</li>
        </ul>

    <button id="Update-Post-${memberObject.id}" onclick="updatePostEntry(${memberObject.id})">Update</button>
        
    <button id="Delete-Post-${guestObject.id}" onclick="deletePostEntry(${memberObject.id})">Delete</button>

    </li>    
    `

    function findGuestByID (id) {
        return listOfGuests.filter (guest => guest.id==id) [0]
}
    
    function updateGuestEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
              
}
    
    
    function findGuestByID (id) {
        return listOfGuests.filter (guest => guest.id==id) [0]
}
    
    function deleteGuestEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
        foundEntry.remove ()        
}

    guestPost.value = ""
})


// Constructor Function
function Member(post) {
    this.id = entriesCreated;
}

// Update Guest
function findPostsByID (id) {
    return listOfPosts.filter (guest => guest.id==id) [0]
}

function updatePostEntry (id) {
    var foundEntry = document.getElementById (`entry-${id}`)
    console.dir (foundEntry)
    
}

// Delete Guest
    function findPostByID (id) {
        return listOfPosts.filter (guest => guest.id==id) [0]
    }

    function deletePostEntry (id) {
        var foundEntry = document.getElementById (`entry-${id}`)
        console.dir (foundEntry)
        foundEntry.parentNode.remove ()        
    }
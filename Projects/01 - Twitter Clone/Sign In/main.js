function Getstats()
{
window.status=('Attempting to Login to user area.')

var Username;
var Password;
Username = document.memberUsernameInput.UsernameID.value
Password = document.memberPasswordInput.Password.value

if (Username == "" || Password == "")
{
alert('\nERROR\nSign In Information Incorrect,\n Please try again.\n');
window.status=('Missing data or Invalid. Check spelling and Ensure Names are in Correct Case.')
}
else
{

var location=(Password + ".html");
this.location.href = location;
window.status=(' Verifying: ' + Password +' Please wait........');
}
}
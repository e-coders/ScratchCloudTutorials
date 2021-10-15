// Arrays - Tutorials In a List.
// You can also use \n or <br> to add a line break.
tutorialHeaderArray=[
"Welcome!",

"What are cloud Variables?",

"How to upgrade to scratcher status?"
,"Tutorial not exist."];


tutorialBodyArray=[
"Welcome to Scratch Cloud Tutorials! This tutorial series will help you to make cloud games on scratch.",

"Cloud Variables are basicly varibles stored on a server. In other words, a cloud variables can be accessed anywhere, but a normal variable can be accessed locally (on your computer) only. On scratch, only a scratcher can obtain cloud variables. Go to the next page to see how to become a scratcher!"

,"When you make a new scratch account, your status is 'New Scratcher'. To have access to cloud variables, you need to become to be have scratcher status. It happens usually 2-3 weeks after you make your scratch account. To make it happen faster, share more projects and comment more in Scratch! "
,'The Tutorial you are trying to open does not exist.<div class="large"></div><button id="pBtn" class="navButton" onclick="previous()">Ok, take me back.</button>'];
// Arrays are Over. See Contributing File For Contributing Info.

// Intialize Variables
tutorialPageCounter = 1;
tutorialArrayCounter = 0;
tutorialNo = 1;
// Don't Count 404 in totalPages.
totalPages = 3;

//variables over
//functions
function next(){
    tutorialPageCounter = tutorialPageCounter + 1;
    tutorialArrayCounter = tutorialArrayCounter +1;

    document.getElementById("tutorialHead").innerHTML=tutorialHeaderArray[tutorialArrayCounter];
    document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
    tutorialNo++;
    // alert(tutorialNo);
}

function previous(){
    if(!tutorialNo == -1){
        tutorialPageCounter = tutorialPageCounter - 1;
        tutorialArrayCounter = tutorialArrayCounter - 1;

        document.getElementById("tutorialHead").innerHTML=tutorialHeaderArray[tutorialArrayCounter];
        document.getElementById("tutorialText").innerHTML=tutorialBodyArray[tutorialArrayCounter];
        tutorialNo--;
        // alert(tutorialNo);
    }
    else{
        console.log("Can't go previous to Page No. -1.");
        alert("Can't go previous to Page No. -1.");
    }
}
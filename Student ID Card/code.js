// Extract Content from Webpage
let cardLogo = document.getElementById("schoolLogo");

// Create function to create ID card
function createCard(){

    // Retrieve values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let birthDate = document.getElementById("birthdate").value;
    let gradeLevel = document.getElementById("grade").value;
    let school = document.getElementById("school").value;
    
    
    // Determine if all values are entered
    if(firstName == "" || lastName == "" || birthDate == "" || gradeLevel == "" || school == ""){
        // Show warning
        document.getElementById("warning").style.visibility = "visible";
    } else {

        // Hide warning
        document.getElementById("warning").style.display = "none";

        // Find correct school logo
        if(school == "enochs"){
            cardLogo.src = "https://cmsv2-assets.apptegy.net/uploads/10914/logo/12450/EnochsHS_CircleMark_FullBody__2_.png";
        } else if(school == "gregori"){
            cardLogo.src = "https://www.ccal209.com/cms/lib/CA50000449/Centricity/Domain/33/Gregori%20Logo.JPG";
        } else if(school == "beyer"){
            cardLogo.src = "https://cmsv2-assets.apptegy.net/uploads/10910/logo/12444/Beyer.png";
        } else if (school == "davis"){
            cardLogo.src = "https://cmsv2-assets.apptegy.net/uploads/10911/logo/12445/Davis_stroke.png";
        } else if(school == "downey"){
            cardLogo.src = "https://pbs.twimg.com/profile_images/1371947045808840704/N19oBqqo_400x400.jpg";
        } else {
            cardLogo.src = "";
        }

        // Set values
        document.getElementById("cardName").textContent = firstName + " " + lastName;
        document.getElementById("cardBirthDate").textContent = birthDate;
        document.getElementById("cardGrade").textContent = "Grade Level: " + gradeLevel;
        document.getElementById("cardID").textContent = "ID: " + parseInt(Math.floor(Math.random()  * 89999) + 10000);
        document.getElementById("card").style.visibility = "visible";
    }
}

// Create function to reset values
function resetValues(){
    // Reset ID content
    document.getElementById("cardName").textContent = ""
    document.getElementById("cardBirthDate").textContent = "";
    document.getElementById("cardGrade").textContent = "";
    document.getElementById("cardID").textContent = "";
    cardLogo.src = "";

    // Reset input values
    document.getElementById("card").style.visibility = "hidden"
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("birthdate").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("school").value = "none";
}
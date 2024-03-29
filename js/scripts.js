//  ****************************************************
//  ****************Sonya Youngblood *******************
//  *********Project 5 PUBLIC API REQUEST **************
//  ****************************************************

// Random User Generator API link provided in HTML doc used to call 12 random US employees

$.ajax({
    url: 'https://randomuser.me/api/?results=12&nat=us',
    dataType: 'json',
    success: function (data) {
        jsonData = data.results;

        // This loops through the employee data grabbing all JSON infomation
        data.results.forEach(user => {

            const picture = user.picture.large;
            const lastName = user.name.last;
            const firstName = user.name.first;
            const email = user.email;
            const city = user.location.city;
            const state = user.location.state;

            // This adds HTML ELEMENTS Dynamically (copied from html document and manipulated)
            const galleryCard =
                `<div class="card">
                <div class="card-img-container">
                    <img class="card-img" src="${picture}" alt="Empl picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${lastName}, ${firstName} </h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${city}, ${state}</p>
                </div>
                </div>`;

            // This will appends the HTML element information to the "gallery" id div tag
            $('#gallery').append(galleryCard);
        })
    }
});

//This will show a pop-up window with employee information
// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }   

// (Capitalization - Juan) 
//const street = capital(jsonData[i].location.street); (Repeat for city, state)
//Captializes the first letter of each word in selected string when called

// This will reorder the DOB using the slice method - (Steve)
// let dob = jsonData[i].dob.date;
// dob = dob.slice(5, 7) + '/' + dob.slice(8, 10) + '/' + dob.slice(0, 4);

function modalWindow(i) {
    const picture = jsonData[i].picture.large;
    const firstName = jsonData[i].name.first;
    const lastName = jsonData[i].name.last;
    const email = jsonData[i].email;
    const phone = jsonData[i].phone;
    const street = jsonData[i].location.street;
    const city = jsonData[i].location.city;
    const state = jsonData[i].location.state;
    const zipCode = jsonData[i].location.postcode;

    //This will reorder the DOB using the slice method - (Steve assisted)
    let dob = jsonData[i].dob.date;
    dob = dob.slice(5, 7) + '/' + dob.slice(8, 10) + '/' + dob.slice(0, 4);

    //This will add the HTML elements of the employee's info to the modal window pop up (copied from index.html)
    const modalContainer =

        `<div class="modal-container">
               <div class="modal">
                   <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                   <div class="modal-info-container">
                       <img class="modal-img" src="${picture}" alt="Employee Picture">
                       <h3 id="name" class="modal-name cap">${firstName} ${lastName} <br> _____________________________</h3>
                       <p>Contact Information:</p>
                       <p class="modal-text">${email}</p>
                       <p class="modal-text">${phone}</p>
                       <p class="modal-text cap">${street}, <br>${city}, ${state} <br> ${zipCode}</p>
                       <p class="modal-text">Birthday: ${dob}</p>
                </div>
        </div>`

    //Appends HTML to the modal window pop up and closes when clicked.
    // $(document).ready(function () { 

    $('body').append(modalContainer);


    //Closes modal pop up and removes HTML elements
    $('#modal-close-btn').on('click', function () {
        $('.modal-container').remove();
    });
};


//This will make the modal pop up window show an individual employee when clicked
// $(".card").click(function () {
//     alert("clicked...");
// });

$('#gallery').on('click', ".card", function () {
    i = ($(this).index());
    modalWindow(i);
});



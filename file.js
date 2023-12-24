//send button function
function send() {
    let number_data = document.getElementById("entry-field").value;
    if (number_data.toString().length < 10) {
        document.getElementById("status-text").style.visibility = "visible";
        setTimeout(function () { document.getElementById("status-text").style.visibility="hidden"; }, 2000)
    } else {
        // console.log(number_data);
        number = number_data.toString().startsWith('+91') ? number_data:`+91${number_data}`
        let go_to = `https://api.whatsapp.com/send/?phone=${number}&text&type=phone_number&app_absent=0`;
        window.open(go_to, "_blank");
    }

}
//info function
let about_button = document.getElementById("about-button");
let about_section = document.getElementById("about");
let about_section_position=about_section.offsetTop;
let main_content_position=document.getElementById("main-content-container").offsetTop;
about_button.addEventListener("click", function (e) {
    about_section.style.visibility = "visible";
    window.scroll({top:about_section_position,
    });
    setTimeout(function () { about_section.style.visibility = "hidden";
window.scroll({top:main_content_position,});
}, 10000);
});

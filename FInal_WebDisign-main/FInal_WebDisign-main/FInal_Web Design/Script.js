
const user = [{
    name: "Borge Refsness",
    Subject: "Remember Me",
    image: "Images/user-profile-icon-free-vector.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel dolorem nesciunt facere? Undedelectus voluptaset, praesentium"
},
{
    name: "Jane Doe",
    Subject: "",
    image: "Images/icon-256x256.png",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti ea consequuntur sint id officia"
},
{
    name: "John Doe",
    Subject: "",
    image: "Images/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg",
    text: "Welcome."
}]

document.getElementById("NameinboxOne").innerHTML = user[0].name;
document.getElementById("SubjectinboxOne").innerHTML = user[0].Subject;
document.getElementById("TextinboxOne").innerHTML = user[0].text;

document.getElementById("NameinboxTwo").innerHTML = user[1].name;
document.getElementById("TextinboxTwo").innerHTML = user[1].text;

document.getElementById("NameinboxThree").innerHTML = user[2].name;
document.getElementById("TextinboxThree").innerHTML = user[2].text;

//_______________________________________________________________________________\\


function slidingInbox(){
    if(document.getElementById("dropdownInbox").style.display== "none")
        document.getElementById("dropdownInbox").style.display= "block";
    else
    document.getElementById("dropdownInbox").style.display= "none"
}

let modal = document.getElementById("Modal");
let New = document.getElementById('NeMessageB')
New.onclick = function () {
    modal.style.display = "block";
}
let closer = document.getElementsByClassName("closer")[0];
let reset = document.getElementById("reset");
let send = document.getElementById("send");
closer.onclick = function () {
    modal.style.display = "none";
}
reset.onclick = function () {
    modal.style.display = "none";
}
// send.onclick = function () {
//     modal.style.display = "none"; دیگه نیاز نیست چون توسط فرم فیلد ها الزامی شده
// }
window.onclick = function (event) {
    if (event.target == document.getElementById('Modal')) {
        document.getElementById('Modal').style.display = 'none';
    }
};


document.getElementById("Bside").addEventListener("click", function() {
    document.getElementById("Menuu").style.display = "block";
});

document.getElementById("Menucloser").addEventListener("click", function() {
    document.getElementById("Menuu").style.display = "none";
});


//_____________________________________________________________________


const articles = document.querySelectorAll('#articless');
const inboxButton = document.querySelectorAll('.ContentDroper');

function hideAllArticles() {
    articles.forEach(article => { article.style.display = 'none';});
}

inboxButton.forEach((item, index) => {
    item.addEventListener('click', () => {
        hideAllArticles(); 
        articles[index].style.display = 'block';
    });
});

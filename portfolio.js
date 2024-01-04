//email form
const form = document.getElementById("contactForm");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const mess = document.getElementById("message");
const subject = document.getElementById('subject');

function sendEmail () {
    const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}<br>
    Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
            Host : "smtp.elasticemail.com",
            Username : "khazzi.dev@gmail.com",
            Password : "D8D48089BAA194AD61BD9C5B977697F737E8",
            To : 'khazzi.dev@gmail.com',
            From : "khazzi.dev@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
        message => alert(message)
        );
}
function clearForm() {
    // Reset the form after submission
    document.getElementById("contactForm").reset();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
    clearForm();
    
})


//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active sections for animation
            sec.classList.add('show-animate');
        
        }
        else {
            sec.classList.remove('show-animate');
        }
    });
    //sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when menu icon toggled
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


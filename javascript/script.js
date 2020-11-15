document.getElementById("card1").addEventListener("mouseover", card1Detail);
document.getElementById("card2").addEventListener("mouseover", card2Detail);
document.getElementById("card3").addEventListener("mouseover", card3Detail);
document.getElementById("card4").addEventListener("mouseover", card4Detail);
var card1 = document.getElementById("card1d");
var card2 = document.getElementById("card2d");
var card3 = document.getElementById("card3d");
var card4 = document.getElementById("card4d");
var i = 0;

function card1Detail() {
    card1.innerHTML = "<h4>Mark Jimuel R Faylona</h4>" +
        "<p width=\"500px\" class=\"cardd\">Jimuel is a young and emerging professional based in the city of Everett. He's a first generation immigrant that can speak 2 languages." +
        " He believes that he should work on things that people won't do today so he can do things that other people won't be able to do tomorrow." +
        " He's a former Sales Ambassador of Xfinity who assisted thousands of customers to build their desired entertainment. " +
        "plans for 2 years. Jimuel knows first-hand the adaptability and patience needed to succeed in a new fast paced environment." +
        " He experienced managing an ecommerce business that he created called Meerakol. As well as operated his" +
        " own social media marketing agency called Revenue Multiply.</p>" +
        "<a id=\"linkn\" class=\"fab fa-linkedin\" href=\"https:\//www.linkedin.com\/in\/jimuelfaylona\"> <span id=\"linkNames\">Mark Jimuel R Faylona</span></a>";

}

function card2Detail() {
    card2.innerHTML =
        "<h4>Maria O'Sullivan</h4>" +
        "<p width=\"500px\" class=\"cardd\">" +
        "Maria O’Sullivan is a Year Up Student currently enrolled in the Software Development and Testing program. Dedicated to becoming a quality service " +
        "associate, and later a software engineer or project manager, she is eager to acquire new knowledge and seek new opportunities. Having grown up working " +
        "in a high intensity family business environment, her childhood gave her unique skill sets like strong team and leadership skills. A small business owner" +
        " and digital artist, she peruses life with a creative edge and unique perspective. Maria dreams of displaying those skills, and the ones she’s nurturing " +
        "in Year Up to the right company." +
        " </p>" +
        "<a id=\"linkn\" class=\"fab fa-linkedin\" href=\"https:\//www.linkedin.com\/in\/maria-o-sullivan-259bb51b9\"> <span id=\"linkNames\">Maria O'Sullivan</span></a>";
}

function card3Detail() {
    card3.innerHTML = "<h4>Alejandro Chavez</h4>" +
        "<p width=\"500px\" class=\"cardd\">" +
        "An experienced Computer Technician with a demonstrated history of working in the computer hardware industry. Skilled in Computer Hardware Diagnostics, HTML," +
        " and CSS. With a total of 11 years of using Blender for 3D graphical art and still learning something new every day. Used Unity Engine for 1 year in game" +
        " production as well as still learning all of it's quirks. Overall they have put themselves in positions to learn on their own time considering they are always" +
        " willing to learn something new and try to achieve one goal in mind, and that goal being to learn/grow. with this mindset they can never fail as long as they" +
        " learn and grow from it." +
        "</p>" +
        "<a id=\"linkn\" class=\"fab fa-linkedin\" href=\"https:\//www.linkedin.com\/in\/alex-chavez-982799195\"> <span id=\"linkNames\">Alejandro Chavez</span></a>";
}

function card4Detail() {
    card4.innerHTML = "<h4>Anisah Abdullah</h4>" +
        "<p width=\"500px\" class=\"cardd\">" +
        "Anisah Abdullah is an emerging professional interning at King County International Airport. During Fall 2020, she became a student at one of the " +
        "leading non-profit organizations in the nation that aims to close the opportunity divide, the Year Up Program. After a rigorous application process, " +
        "she was accepted into the program and continues to thrive to become a successful Asian-Muslim software developer. She works hard to pave an opportune " +
        "future for her children and to be a leading example. She is motivated and excited to see where her journey lands her in the corporate industry." +
        "</p>" +
        "<p>" +
        "She is an emerging professional that will never stop… Over a year ago, she returned to the US with no idea what her future would hold " +
        "for her and her children. Upon hearing the news that she would return to the states, she knew that she didn’t want to see her children have to " +
        "go through the hardships of taking on responsibilities at a young age like she did. She did not want them to be striped of the opportunity to become " +
        "their best selves. That is when she knew that she had to work hard to become the support system for them that she did not have. She has faced many " +
        "challenges in her life from losing family members to raising children on my own. But one thing that will never change is that she will never stop." +
        "She will never stop working towards making a better future for her children, she will never stop thriving to be self-sufficient, and she will never " +
        "stop trying to achieve to the best. As Jeffrey Gitomer says “Obstacles can’t stop you. Problems can’t stop you. Only you can’t stop you.”" +
        "</p>" +
        "<a id=\"linkn\" class=\"fab fa-linkedin\" href=\"https:\//www.linkedin.com\/in\/anisah-abdullah-845b611b0/\"> <span id=\"linkNames\">Anisah Abdullah</span></a>";
}
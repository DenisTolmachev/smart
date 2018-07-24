/**
 * Created by denis on 16.02.2018.
 */

$(document).ready(function(){
    $("div").children(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            800:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
});

function skillsShow1() {
    var userID = document.getElementById("teamUserID1");
    var userSills = document.getElementById("teamUserSlills1");
    userID.style.display = "none";
    userSills.style.display = "block";
}

function userShow1() {
    var userID = document.getElementById("teamUserID1");
    var userSills = document.getElementById("teamUserSlills1");
    userID.style.display = "block";
    userSills.style.display = "none";
}

function skillsShow2() {
    var userID = document.getElementById("teamUserID2");
    var userSills = document.getElementById("teamUserSlills2");
    userID.style.display = "none";
    userSills.style.display = "block";
}

function userShow2() {
    var userID = document.getElementById("teamUserID2");
    var userSills = document.getElementById("teamUserSlills2");
    userID.style.display = "block";
    userSills.style.display = "none";
}

function skillsShow3() {
    var userID = document.getElementById("teamUserID3");
    var userSills = document.getElementById("teamUserSlills3");
    userID.style.display = "none";
    userSills.style.display = "block";
}

function userShow3() {
    var userID = document.getElementById("teamUserID3");
    var userSills = document.getElementById("teamUserSlills3");
    userID.style.display = "block";
    userSills.style.display = "none";
}


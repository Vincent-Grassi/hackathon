// Gets Link for Theme Song
let audioElement1 = document.createElement("audio");
audioElement1.setAttribute("src", "assets/intro sound.mp3");

let audioElement2 = document.createElement("audio");
audioElement2.setAttribute("src", "assets/it's dane.mp3");

let audioElement3 = document.createElement("audio");
audioElement3.setAttribute("src", "assets/it's laura.mp3");

let audioElement4 = document.createElement("audio");
audioElement4.setAttribute("src", "assets/it's andrew.mp3");

let audioElement5 = document.createElement("audio");
audioElement5.setAttribute("src", "assets/it's sam.mp3");

let audioElement6 = document.createElement("audio");
audioElement6.setAttribute("src", "assets/it's negin.mp3");

let audioElement7 = document.createElement("audio");
audioElement7.setAttribute("src", "assets/it's mr brown.mp3");

let audioElement8 = document.createElement("audio");
audioElement8.setAttribute("src", "assets/it's jade.mp3");

let audioElement9 = document.createElement("audio");
audioElement9.setAttribute("src", "assets/it's dartaniel.mp3");

let randomInstructor = ["Dane", "Laura", "Andrew", "Sam", "Negin", "Brown", "Darteniel", "Jade"]

let randomFloat = Math.random() * randomInstructor.length;
console.log(randomFloat);
let randomInteger = Math.floor(randomFloat);
console.log(randomInteger);
let randomGenerator = randomInstructor[randomInteger];
console.log(randomGenerator);

$(document).ready(function() {

$(".soundon-button").on("click", function() {
    audioElement1.muted = false;
    audioElement2.muted = false;
    audioElement3.muted = false;
    audioElement4.muted = false;
    audioElement5.muted = false;
    audioElement6.muted = false;
    audioElement7.muted = false;
    audioElement8.muted = false;
    audioElement9.muted = false;
    audioElement1.play();   
});

$(".soundoff-button").on("click", function() {
    audioElement1.muted = true;
    audioElement2.muted = true;
    audioElement3.muted = true;
    audioElement4.muted = true;
    audioElement5.muted = true;
    audioElement6.muted = true;
    audioElement7.muted = true;
    audioElement8.muted = true;
    audioElement9.muted = true;
});

if (randomGenerator === "Dane") {

    audioElement2.play();
    $(".oldest").addClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").removeClass("list-group-item-warning")
    $(".fourth-oldest").removeClass("list-group-item-warning")

    $(".coding-javascript").addClass("list-group-item-warning")
    $(".coding-html").addClass("list-group-item-warning")
    $(".coding-css").addClass("list-group-item-warning")
    $(".coding-python").addClass("list-group-item-warning")




}
else if (randomGenerator === "Laura") {

    audioElement3.play();    
    $(".oldest").removeClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").addClass("list-group-item-warning")
    $(".fourth-oldest").removeClass("list-group-item-warning")

    $(".coding-javascript").addClass("list-group-item-warning")
    $(".coding-html").addClass("list-group-item-warning")
    $(".coding-css").addClass("list-group-item-warning")
    $(".coding-python").addClass("list-group-item-warning")
}

else if (randomGenerator === "Andrew") {

    audioElement4.play();    
    $(".oldest").removeClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").addClass("list-group-item-warning")
    $(".fourth-oldest").removeClass("list-group-item-warning")

    $(".coding-javascript").addClass("list-group-item-warning")
    $(".coding-html").addClass("list-group-item-warning")
    $(".coding-css").addClass("list-group-item-warning")
    $(".coding-python").addClass("list-group-item-warning")

}

else if (randomGenerator === "Sam") {

    audioElement5.play();   
    $(".oldest").removeClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").addClass("list-group-item-warning")
    $(".fourth-oldest").removeClass("list-group-item-warning")

    $(".coding-javascript").addClass("list-group-item-warning")
    $(".coding-html").addClass("list-group-item-warning")
    $(".coding-css").addClass("list-group-item-warning")
    $(".coding-python").addClass("list-group-item-warning")

}

else if (randomGenerator === "Negin") {

    audioElement6.play();   
    $(".oldest").addClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").removeClass("list-group-item-warning")
    $(".fourth-oldest").removeClass("list-group-item-warning")

    $(".coding-javascript").addClass("list-group-item-warning")
    $(".coding-html").addClass("list-group-item-warning")
    $(".coding-css").addClass("list-group-item-warning")
    $(".coding-python").addClass("list-group-item-warning")

}

else if (randomGenerator === "Brown") {

    audioElement7.play();   
    $(".oldest").removeClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").removeClass("list-group-item-warning")
    $(".fourth-oldest").addClass("list-group-item-warning")

    $(".coding-javascript").removeClass("list-group-item-warning")
    $(".coding-html").removeClass("list-group-item-warning")
    $(".coding-css").removeClass("list-group-item-warning")
    $(".coding-python").removeClass("list-group-item-warning")

}

else if (randomGenerator === "Jade") {

    audioElement8.play();   
    $(".oldest").removeClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").removeClass("list-group-item-warning")
    $(".fourth-oldest").addClass("list-group-item-warning")

    $(".coding-javascript").removeClass("list-group-item-warning")
    $(".coding-html").removeClass("list-group-item-warning")
    $(".coding-css").removeClass("list-group-item-warning")
    $(".coding-python").removeClass("list-group-item-warning")

}

else if (randomGenerator === "Darteniel") {

    audioElement9.play();   
    $(".oldest").removeClass("list-group-item-warning")
    $(".second-oldest").removeClass("list-group-item-warning")
    $(".third-oldest").removeClass("list-group-item-warning")
    $(".fourth-oldest").addClass("list-group-item-warning")

    $(".coding-javascript").removeClass("list-group-item-warning")
    $(".coding-html").removeClass("list-group-item-warning")
    $(".coding-css").removeClass("list-group-item-warning")
    $(".coding-python").removeClass("list-group-item-warning")

}

   
});
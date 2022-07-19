var instructorNameToGuess

$(function(){
    $('#image-guessbox').hide();
    generateNextimage();
})

function playIntroMusic() {
    console.log("Play Intro")
    var audioFile ="./assets/introsound.mp3";
    var audio = new Audio(audioFile)
    audio.play();
    $('#image-guessbox').show();
}

function generateNextimage() {
    console.log('Randomly Generate Image')
    const instructors = ["dane", "mr.brown", "laura", "negin", "sam", "andrew"];
    var i = Math.floor(Math.random() * 5);
    console.log("random num = " + i)
    instructorNameToGuess = instructors[i]
    imgsrc='./assets/s-'+instructors[i]+'.jpg'
    $('#div-instructor-image').empty().append("<span><img src='"+imgsrc+"' width=\"150\" height=\"150\" border=\"2\"/></span>")
}

$('#button-start-game').click(function(e) {
    playIntroMusic();
});

$('#guess-buttons').click(function(e){
    //console.log(e);
    var guessedName = e.target.name;
    console.log('guessedNAme = ' + guessedName);
    console.log('instructorNameToGuess = ' + instructorNameToGuess);
    if (guessedName != instructorNameToGuess) {
        alert("You picked the wrong instructor");
    }
    imgsrc='./assets/'+instructorNameToGuess+'.jpg'
    console.log(imgsrc)
    $('#div-instructor-image').empty().append("<img src='"+imgsrc+"' width=\"150\" height=\"150\"  border=\"2\"/>")

    var audioFile ="./assets/" + instructorNameToGuess + ".mp3";
    var audio = new Audio(audioFile)
    audio.play();

    //generateNextimage();
});

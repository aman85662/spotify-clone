console.log("welcome to spotify");
//initializing the variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let MyProgressBar= document.getElementById('MyProgressBar');



let audio=[
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"},
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"},
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"},
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"},
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"},
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"},
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"},
    {songName: "let me love you",filePath: "1.mp3",coverPage: "onandon.jpg"}
]
// audioElement.play();

//handel play pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play;
    }
})
//listen to event
MyProgressBar.addEventListener('timeupdate',()=>{
    consol.log('timeupdate')
});
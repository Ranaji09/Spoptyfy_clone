
let songIndex = 0;
let audioElement = new Audio('photo/1.mp3')

let masterPlay = document.getElementById("masterplay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItem = Array.from(document.getElementsByClassName("songItem"))
let songItemplay = document.getElementsByClassName("songItemplay")

let songs = [
     { songName: " salam- e - isk", filePath: " photo/1.mp3", coverPath: "photo1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - Badshah  Gone Girl लडक खरब  Official Music Video  Payal Dev  Sakshi Vaidya.mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/Eke Odhaniya(BhojpuriWap.In).mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - Badshah  Gone Girl लडक खरब  Official Music Video  Payal Dev  Sakshi Vaidya.mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - Gaddi Ch Play Kare Mere Ni Tu Gaane Pagol  Deep Jandu slowedreverb.mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - Har Fun Maula X Money in the Grave.mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - Hips Lips Eyes Thighs Sab Gazab Official Video Goldkartz  Badshah Ileana DCruz  New Song 2023.mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - Izhar Hua Hame Bhi Pyar Hua LYRICS SONG Shreya Ghoshal  Saad Lamjarred  Presented MF EDITOR .mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - Leike janamwa Ham Aai Bar Bar Ho  Ho Ladki Janamwa  hai re samaya tutal dil ke arman  Viral Song.mp3", coverPath: "photo/1.jpg" },
     { songName: " salam- e - isk", filePath: " photo/yt1s.com - meri chokhat pe chalke aaj charo dham aaye hai song  Ringtone  Jay Shree Ramsurajsahu0001.mp3", coverPath: "photo/1.jpg" }
]
// audioElement.play();

// Handle/ play / pouse
masterPlay.addEventListener("click", () => {
     if (audioElement.paused || audioElement.currentTime <= 0) {
          audioElement.play();
          masterPlay.classList.remove('fa-play-circle')
          masterPlay.classList.add('fa-pause-circle')
          gif.style.opacity = 1;
     } else {
          audioElement.pause();
          masterPlay.classList.remove('fa-pause-circle')
          masterPlay.classList.add('fa-play-circle')
          gif.style.opacity = 0;
     }

})

// listen to Event
audioElement.addEventListener('timeupdate', () => {

     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
     myProgressBar.value = progress;
     // Update seekbar
     myProgressBar.addEventListener("change", () => {
          audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
     })

})

songItem.forEach((element, i) => {
     console.log(element, i);
     element.getElementsByTagName("img"[0].src = songs[i]).coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].filePath;
})
const mainpalyAll = () => {
     Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
          element.classList.remove("fa-pause-circle")
          element.classList.add("fa-play-circle")
     })
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element) => {
     element.addEventListener("click", (e) => {
          mainpalyAll();
          songIndex = parseInt(e.target.id)
          // console.log(index)
          e.target.classList.remove("fa-play-circle")
          e.target.classList.add("fa-pause-circle")
          audioElement.src = `photo/${songIndex + 1}.mp3`
          audioElement.currentTime = 0;
          audioElement.play();
          mainpalyAll.classList.remove("fa-play-circle")
          mainpalyAll.classList.add("fa-pause-circle")
     })
})
document.getElementById('next').addEventListener("click", () => {
     if (songIndex >= 9) {
          songIndex = 0
     } else {
          songIndex += 1;
     }
     audioElement.src = `photo/${songIndex + 1}.mp3`
     audioElement.currentTime = 0;
     audioElement.play();
     mainpalyAll.classList.remove("fa-play-circle")
     mainpalyAll.classList.add("fa-pause-circle")
})
document.getElementById('privious').addEventListener("click", () => {
     if (songIndex <= 0) {
          songIndex = 0
     } else {
          songIndex -= 1;
     }
     audioElement.src = `photo/${photo / songIndex + 1}.mp3`
     audioElement.currentTime = 0;
     audioElement.play();
     alert("ghj")
     mainpalyAll.classList.remove("fa-play-circle")
     mainpalyAll.classList.add("fa-pause-circle")
})
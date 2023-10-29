const played =  document.getElementById('player')
const titleElement = document.getElementById('title')
const authorElement = document.getElementById('author')
const coverElement = document.getElementById('cover')
const preview =  document.getElementById('preview')
const start =  document.getElementById('start')
const next =  document.getElementById('next')
const currentTime = document.getElementById('current_time')
const totalTime = document.getElementById('total_time')
const progressBar = document.getElementById('progress_bar')
const fullBar = document.getElementById('full_bar')

let duration = played.duration 

console.log(duration)
duration ? totalTime.textContent =parseTime( duration ) : totalTime.textContent = '01:12'

const songsInfo=[
  {
    img:'assets/cover-1.png',
    title:'Lost in the City Lights',
    author:'Cosmo Sheldrake',
    path:'assets/lost-in-city-lights-145038.mp3'
  },
  { 
    img:'assets/cover-2.png',
    title:'Forest Lullaby',
    author:'Lesfm',
    path:'assets/forest-lullaby-110624.mp3'
  }
]
const firstSongPath = 'assets/forest-lullaby-110624.mp3'
const secondSongPath = 'assets/lost-in-city-lights-145038.mp3'

start.addEventListener('click', ()=> {
    if(played.paused)
        played.play()
    else
        played.pause()
})

fullBar.addEventListener('click', setProgress)
next.addEventListener('click', () =>{
  setSong(changeSong(played.getAttribute('src')))
    

})
preview.addEventListener('click', () =>{
  setSong(changeSong(played.getAttribute('src')))

})

played.addEventListener('timeupdate',setTime)
  
function setTime(){

  if(played.duration){
    if(played.duration !== duration) duration = played.duration
    totalTime.textContent = parseTime(duration)
    progressBar.style.width = `${(played.currentTime / duration) * 100}%`
    currentTime.textContent = parseTime(played.currentTime)
  }
   if(played.duration === played.currentTime)
      setSong(changeSong(played.getAttribute('src')))
   
  }


function setSong(song){
  const {path, title, author, img} = song

  coverElement.setAttribute('src', img)
  titleElement.innerHTML=title
  authorElement.innerHTML=author
  played.setAttribute ('src', path)
  played.load()
  played.play()
}
function changeSong(src){
  
    if(src === songsInfo[0].path)
    return songsInfo[1]
    else
    return songsInfo[0]
}

function parseTime(time){
  const seconds =  String(Math.floor(time % 60)).padStart(2, '0') 
  const minute =String(Math.floor(time / 60)).padStart(2, '0')
  return `${minute}:${seconds}`
}

function setProgress(event) {
  const width = this.clientWidth;
  console.log(width)
  const clickX = event.offsetX;
  const duration = played.duration;
  played.currentTime = (clickX / width) * duration;
}
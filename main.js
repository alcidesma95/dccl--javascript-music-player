const played =  document.getElementById('player')

const preview =  document.getElementById('preview')
const start =  document.getElementById('start')
const next =  document.getElementById('next')

const firstSongPath = 'assets/forest-lullaby-110624.mp3'
const secondSongPath = 'assets/lost-in-city-lights-145038.mp3'

start.addEventListener('click', ()=> {
    if(played.paused)
        played.play()
    else
        played.pause()
})

next.addEventListener('click', () =>{
    const path = changeSong(played.getAttribute('src'))
    played.setAttribute ('src', path)
    played.load()
    played.play()

})
preview.addEventListener('click', () =>{
    const path = changeSong(played.getAttribute('src'))
    played.setAttribute ('src', path)
    played.load()
    played.play()

})



function changeSong(src){
    
    if(src === firstSongPath)
    return secondSongPath
    else
    return firstSongPath
}

'use strict';

let id = 'dc2e6bd1-8156-4886-adff-b39e6043af0c'

const filmes = 'https://ghibliapi.vercel.app/films/'

const criarSections = (filme) => {

    
    const section = document.getElementById('movie-card')
    section.style.backgroundImage = `url(${filme.movie_banner})`
    
    console.log(filme)
    const characterContent = `
    <div class="info-container">
        <img src="./" alt="">
        <div class="text">
            <div class="titleGs">${filme.title}</div>
            <div class="containe3ss">
                <div class="textstudios">
                    <p>${filme.description}</p>
                </div>
            </div>
            <div class="see-more">
                <p>See More</p>
            </div>
        </div>
    </div>
    `

    section.insertAdjacentHTML('afterbegin', characterContent)


}

const pegarFilme = async() => {

    fetch(`https://ghibliapi.vercel.app/films/${id}`)
    .then(response => response.json())
    .then(filme => criarSections(filme))

}

// asdasasas.addeventlist('click', () =>{

//     id = filme.id
//     pegarFilme()

// })

pegarFilme()
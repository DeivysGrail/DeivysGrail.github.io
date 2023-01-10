// Création de la bulle
const bulle = document.createElement("div")
bulle.classList.add("bulle")
document.body.appendChild(bulle)

document.addEventListener("mousemove", (e) => {
    CircleBehaviour(e)
})

document.querySelector("#os-interface").addEventListener("mouseover", (e) => {
    bulle.classList.remove("bulle_f2b")
    bulle.classList.remove("bulle_spk")
    bulle.classList.add("bulle")
})

// Lorsque la souris se déplace :
const CircleBehaviour = (e) => {
    bulle.style.display = "block" // La bulle apparaît
    bulle.style.opacity = "1"// Avec une opacité de 1
    bulle.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`// puis elle suit le curseur
    bulle.style.transition = "0.10s" // Avec un petit délai histoire de ne pas rester collée au curseur

}

// Pareil avec le scroll
document.addEventListener("wheel", (e) => {
    CircleBehaviour(e)
})
document.addEventListener("mouseleave", (e) => {
    bulle.style.opacity = "0"

})

// Explosion de la bulle au clique :

const anim_for_event = function (object) {
    object.animate([{
        height: "50px",
        width: "50px",
        transform: `translate(${object.clientX} ${object.clientY})`,
        opacity: 1
    },
        {
            transformOrigin: "center 100px",
            height: "300px",
            width: "300px",
            transform: `translate(-${object.clientX}${object.clientY})`,
            opacity: 0

        }
    ], {
        duration: 200,
        fill: "backwards"
    })

}


document.addEventListener("click", (e) => {
    anim_for_event(bulle)
})

const observer = new IntersectionObserver((e) => {
    for (let i of e) {
        if (i.isIntersecting) {
            i.target.animate([
                {
                    transform: "translate(-500px)",
                    opacity: 0
                },
                {
                    transform: "translate(O)",
                    opacity: 1

                }
            ], {
                duration: 800,
                fill: "forwards"
            })
        }
    }
})

// Login
const login = document.querySelector("#login-page")
observer.observe(login)

// Changement de curseur sur la page de login

login.addEventListener("mouseover", (e) => {
    bulle.classList.remove("bulle")
    bulle.classList.remove("bulle_spk")
    bulle.classList.add("bulle_f2b")
})

// E-COMMERCE


// Changement de la bulle lorsque'elle survole la div
const e_com = document.querySelector("#e-commerce")

e_com.addEventListener("mouseover", () => {
    bulle.classList.remove("bulle")
    bulle.classList.remove("bulle_f2b")
    bulle.classList.add("bulle_spk")

})

let current_position = 0 // Pour s'y retrouver lors du changement d'image
let nombre_image = 5 // Pour le nombre de div à créer
const container = document.querySelector("#container")

// Carousel, ajout des images
document.body.onload = function () {
    container.style.width = 800 * nombre_image + "px" // Le container grandit selon le nombre d'image
    // Création d"une div pour chaque image
    for (let i = 1; i <= nombre_image; i++) {
        let div = document.createElement("div")
        div.className = "div_img" // Ajout de la classe pour chaque image
        div.style.backgroundImage = `url('img/im${i}.jpg')`// Ajout de l'image à la div
        container.appendChild(div) // Ajout de la photo dans la div

    }
}

// Carousel gestion des boutons
const right_arrow = document.querySelector("#right-arrow")
const left_arrow = document.querySelector("#left-arrow")

right_arrow.onclick = function () { // Lors du clique
    if (current_position > -nombre_image + 1) {
        current_position--
    }
    container.style.transform = `translateX(${current_position * 800}px  )`
    container.style.transition = "transform 300ms ease"
    seeOrHide(current_position)
}

left_arrow.onclick = function () { // Lors du clique
    if (current_position < 0) {
        current_position++
    }
    container.style.transform = `translateX(${current_position * 800}px)`
    container.style.transition = "transform 300ms ease"

    seeOrHide(current_position)
}

const seeOrHide = function (e) {
    if (e === -nombre_image + 1) {
        right_arrow.style.visibility = "hidden"
    }
    else {
        right_arrow.style.visibility = "visible"

    }
    if (e === 0) {
        left_arrow.style.visibility = "hidden"
    }
    else {
        left_arrow.style.visibility = "visible"

    }
}



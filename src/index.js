import LogoImg from "./logo.png";
import DonasImg from "./donas.jpeg";
import BrujaImg from "./bruja.jpeg";
import OtonoImg from "./otono.jpeg";
import HechizoImg from "./hechizo.jpeg";
import CalabazaImg from "./calabaza.jpeg";
import FantasmasImg from "./fantasmas.jpeg";
import HeladoImg from "./helado.jpeg";

import IGFooter from "./ig.png";
import TiktokFooter from "./tiktok.png";

import CalabazaIcon from "./calabaza.png";
import './misestilos.scss';

import _ from 'lodash';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW registrado", registration);
        }).catch(error => {
            console.error("SW no registrado", error);
        })
    })
}

const bienvenida = ["Bienvenidos", "a", "Lunarum", "Panum"];
const tituloBienvenida = document.getElementById("titulo");
tituloBienvenida.innerText = _.join(bienvenida, " ");

const logo = document.getElementById("logo");
logo.src = LogoImg;

const icono = document.getElementById("icono");
icono.href = CalabazaIcon;

const img = document.getElementById("img");
img.src = DonasImg;

const instagram = document.getElementById("instagram");
instagram.src = IGFooter;

const tiktok = document.getElementById("tiktok");
tiktok.src = TiktokFooter;

const articulos = [
    {
        titulo: "Hocus Pocus",
        texto: "Amigos de Halloween, nos volvemos a reunir en esta época tan única y escalofriante. Es la época perfecta para hacer actividades de Halloween, cuéntenme, ustedes hacen algo especial durante el mes? ¡Feliz mes escalofriante!",
        img: BrujaImg,
        url: "https://www.instagram.com/p/CjVl4G5uyp3/"
    },
    {
        titulo: "Inspiración",
        texto: "No les pasa que hay ocasiones en la que la inspiración se escapa por la ventana? Que hacen cuando pasan por esos momentos? A mi me ayudan mucho los DTIYS por que me permiten seguir creando, espero les guste y no se rindan en el camino hacia sus sueños.",
        img: OtonoImg,
        url: "https://www.instagram.com/p/CoFWayFurev/"
    },
    {
        titulo: "Hechizo",
        texto: "Hace algunos años en un lugar encantado de Guanajuto una pareja realizó un pacto de amor, sentados frente a frente comieron cada quien una calavera dulce con el nombre del otro escrito en la frente. Las calaveras sellaron el pacto de que el ser amado siempre viviría muy cerca de su corazón.",
        img: HechizoImg,
        url: "https://www.instagram.com/p/CVf4VCxrT9m/"
    },
    {
        titulo: "Calabaza",
        texto: "En el país de otoño las calabazas se disfrazan de niños y piden ramitas, flores y hojas en vez de dulces en la epoca de Halloween.",
        img: CalabazaImg,
        url: "https://www.instagram.com/p/CU-tUSkL7Er/"
    },
    {
        titulo: "Fantasmas",
        texto: "Amigos de Halloween Les comparto una pequeña lista de películas perfectas para octubre, ojalá se animen a verlas.<br> Mas negro que la noche <br> EL jinete sin cabeza <br> Midsommar <br> Suspiria <br>",
        img: FantasmasImg,
        url: "https://www.instagram.com/p/CTFhPHLF68v/"
    },
    {
        titulo: "Helado heladero",
        texto: "Esto fue mi proyecto final para el webinar de <em>Ebac_latam</em> con la participación de <em>Raquel Schaar.</em> Muchas gracias, me divertí mucho haciendo este personaje inspirado en la marca de helados Ben & Jerry's, espero les guste el resultado.",
        img: HeladoImg,
        url: "https://www.instagram.com/p/CqLd5LzOwCm/"
    },
]

const contenedor = document.getElementById("contenedor");
for (let index = 0; index < articulos.length; index++) {
    const articulo = document.createElement("article");
    articulo.classList.add("caja");

    const imagen = document.createElement("img");
    imagen.alt = "Lunarum";
    imagen.src = articulos[index].img;
    imagen.classList.add("imagenes");
    const link = document.createElement("a");
    link.style = "padding: 0px;"
    link.target = "_blank";
    link.href = articulos[index].url;
    link.appendChild(imagen);
    articulo.appendChild(link);

    const titulo = document.createElement("h2");
    titulo.innerText = articulos[index].titulo;
    articulo.appendChild(titulo);

    const texto = document.createElement("p");
    texto.classList.add("texto");
    texto.innerHTML = articulos[index].texto;
    articulo.appendChild(texto);

    contenedor.appendChild(articulo);
}

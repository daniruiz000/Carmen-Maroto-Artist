import cuadro1 from "../assets/img/cuadros/cuadro1.jpg";
import cuadro2 from "../assets/img/cuadros/cuadro2.jpg";
import cuadro3 from "../assets/img/cuadros/cuadro3.jpg";
import cuadro5 from "../assets/img/cuadros/cuadro5.jpg";
import cuadro6 from "../assets/img/cuadros/cuadro6.jpg";
import cuadro8 from "../assets/img/cuadros/cuadro8.jpg";
import cuadro10 from "../assets/img/cuadros/cuadro10.jpg";
import cuadro11 from "../assets/img/cuadros/cuadro11.jpg";
import cuadro13 from "../assets/img/cuadros/cuadro13.jpg";
import cuadro14 from "../assets/img/cuadros/cuadro14.jpg";

export interface Picture {
  id: number;
  title: string;
  img: string;
  explain: string;
  alt: string;
}

export const picturesArray: Picture[] = [
  {
    id: 0,
    title: "'0'",
    img: cuadro1,
    explain: "Exploración de luz en Primavera.",
    alt: "Picture 0",
  },
  {
    id: 1,
    title: "'1'",
    img: cuadro2,
    explain: "El caos ordenado.",
    alt: "Picture 1",
  },
  {
    id: 2,
    title: "'2'",
    img: cuadro3,
    explain: "La fragilidad de la existencia.",
    alt: "Picture 2",
  },
  {
    id: 3,
    title: "'3'",
    img: cuadro5,
    explain: "Un viaje al abismo de la textura.",
    alt: "Picture 3",
  },
  {
    id: 4,
    title: "'4'",
    img: cuadro6,
    explain: "El susurro silencioso.",
    alt: "Picture 4",
  },
  {
    id: 5,
    title: "'5'",
    img: cuadro8,
    explain: "La danza efímera.",
    alt: "Picture 5",
  },
  {
    id: 6,
    title: "'6'",
    img: cuadro10,
    explain: "Espejo de abstracción.",
    alt: "Picture 6",
  },
  {
    id: 7,
    title: "'7'",
    img: cuadro11,
    explain: "El eco de la mente.",
    alt: "Picture 7",
  },
  {
    id: 8,
    title: "'8'",
    img: cuadro13,
    explain: "La sinfonía de las pinceladas y las sombras.",
    alt: "Picture 8",
  },
  {
    id: 9,
    title: "'9'",
    img: cuadro14,
    explain: "Clau en Rosa.",
    alt: "Picture 9",
  },
];

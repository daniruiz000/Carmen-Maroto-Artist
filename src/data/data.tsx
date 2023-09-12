import cuadro6 from "../assets/img/cuadros/cuadro6.jpg";

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
    img: cuadro6,
    explain: "Inspirado en los reflejos de un riachuelo serrano.",
    alt: "Picture 0",
  },
  {
    id: 1,
    title: "'1'",
    img: cuadro6,
    explain: "Inspirado en los reflejos de un riachuelo serrano.",
    alt: "Picture 1",
  },
  {
    id: 2,
    title: "'2'",
    img: cuadro6,
    explain: "Inspirado en los reflejos de un riachuelo serrano.",
    alt: "Picture 2",
  },
  {
    id: 3,
    title: "'3'",
    img: cuadro6,
    explain: "Inspirado en los reflejos de un riachuelo serrano.",
    alt: "Picture 3",
  },
  {
    id: 4,
    title: "'4'",
    img: cuadro6,
    explain: "Inspirado en los reflejos de un riachuelo serrano.",
    alt: "Picture 4",
  },
];

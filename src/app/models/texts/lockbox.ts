import { PageInfos } from "./types";

export const LockboxTexts: PageInfos = {
    title: "Lockbox",
    role: "Développeur fullstack",
    year: "2021",
    context: "Lockbox est un système de file d’attente en ligne prévu pour les pharmacies lors de fortes affluences. Le patient s’inscrit à la file d’attente en donnant ses informations via un QR Code,  un rendez-vous vient s’ajouter au planning de la pharmacie. Une estimation est donnée au patient et un message lui est envoyé 15 minutes avant son rendez-vous.",
    steps: [
        {
            title: "Cahier des charges",
            details: "Rédaction du cahier des charges avec étude de l’existant (Benchmark) et interviews des utilisateurs potentiels (pharmaciens, passants)."
        },
        {
            title: "Développement fullstack",
            details: "Développement front-end via React et back-end via ExpressJS",
            technologies: ["React","NodeJS","Github"]
        }
    ],
    img: "logo"
}
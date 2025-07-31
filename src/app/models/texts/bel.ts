import { PageInfos } from "./types";

export const BelTexts: PageInfos = {
    title: "Groupe Bel",
    role: "Développeur fullstack",
    year: "2021",
    context: "Le groupe Bel utilise divers outils webs afin de gérer sa production. J’ai travaillé sur deux d’entre eux : un portail servant aux ouvriers à visualiser les données des capteurs présents dans les usines (1), et un portail d’administration (2).",
    steps: [
        {
            title: "Formation sur Angular et correction d’anomalies",
            details: "Formation Angular avant de corriger des anomalies sur l’outil (1)."
        },
        {
            title: "Stabilisation et évolutions",
            details: "Corrections d’anomalies et ajouts de nouvelles fonctionnalités sur l’outil (2).",
            technologies: ["React","NodeJS","Github"]
        },
        {
            title: "Optimisations",
            details: "Création d’un composant commun tableau Angular sur l’outil (1).",
            technologies: ["Angular","Github"]
        }
    ],
    goals: ["Stabilisation","Optimisation","Évolution"],
    img: "bel"
}
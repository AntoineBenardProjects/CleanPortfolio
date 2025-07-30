import { PageInfos } from "./types";

export const GoMuscuTexts: PageInfos = {
    title: "GoMuscu",
    role: "Fondateur du projet",
    context: "GoMuscu est un site web responsive permettant le suivi de la pratique de la musculation, que ce soit l’aspect nutrition ou performance.\nCôté nutrition, il est possible de tracker ses calories et macronutriments tout en définissant un objectif à moyen ou long terme.\nCôté musculation, le site permet d’aider à la création d’un programme de musculation personnalisé et équilibré ainsi qu’à suivre sa progression sur les différents exercices.",
    year: "2023",
    steps: [
        {
            title: "Cahier des charges",
            details: "Rédaction du cahier des charges avec étude de l’existant (Benchmark)."
        },
        {
            title: "Charte graphique",
            details: "Création d’une charte graphique définissant logo, police, palettes de couleurs et branding."
        },
        {
            title: "Maquette",
            details: "Maquettage des différentes pages du site avec Figma.",
            technologies: ["Figma"]
        },
        {
            title: "Architecture logicielle",
            details: "Conception du modèle de données noSQL pour une implémentation sur Figma. Architecture des composants front-end.",
            technologies: ["UML"]
        },
        {
            title: "Développement front-end",
            details: "Développement front-end via Angular",
            technologies: ["Angular","Github"]
        },
        {
            title: "Déploiement",
            details: "Déploiement sur le Cloud via Firebase",
            technologies: ["Firebase"]
        }
    ],
    img: "logo.png"
}
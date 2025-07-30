import { PageInfos } from "./types";

export const NiceToMealYouTexts: PageInfos = {
    title: "NiceToMealYou",
    role: "Fondateur du projet",
    year: "2023",
    context: "NiceToMealYou est un site web responsive ayant pour but le filtre et le tri de notre carnet d’adresses.\nL’utilisateur peut ajouter des adresses à son carnet et les noter. Toutes ses adresses peuvent être visualisées sur une carte interactive d’’où l’on peut ensuite appliquer nos filtres. L’intérêt principal est de pouvoir filtrer par lignes de transports en communs (métro, RER, tramway selon les villes).\nLes utilisateurs peuvent s’ajouter afin de visualiser les cartes des autres utilisateurs.",
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
            details: "Conception du modèle de données, architecture des composants front-end et back-end.",
            technologies: ["UML"]
        },
        {
            title: "Développement fullstack",
            details: "Développement front-end via Angular et back-end via ExpressJS",
            technologies: ["Angular","Github","NodeJS"]
        },
        {
            title: "Déploiement",
            details: "Déploiement sur serveur via Docker",
            technologies: ["Docker"]
        }
    ],
    img: "NiceToMealYou.png"
}
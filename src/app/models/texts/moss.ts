import { PageInfos } from "./types";

export const MossTexts: PageInfos = {
    title: "MOSS SAS",
    role: "Développeur front-end et Analyste métier",
    year: "2022",
    context: "Ma mission chez MOSS était de remplacer un outil existant par une solution web. En effet, MOSS possédait déjà son propre portail web codé sur Angular et utilisait un autre logiciel pour gérer leurs plannings. Cependant, le logiciel utilisé n’était pas conçu pour leurs besoins, ce qui entraînait fréquemment des pannes complètes du système.",
    steps: [
        {
            title: "Spécification Technique du Besoin (STB)",
            details: "Interviews utilisateurs afin d’en déduire un besoin précis. Rédaction d’une spécification technique de ce besoin."
        },
        {
            title: "Benchmark composant graphique",
            details: "Recherche de librairie graphique Angular permettant de répondre au besoin. 4 composants ont été analysés."
        },
        {
            title: "POC",
            details: "Démonstration de faisabilité auprès de la responsable des achats via le développement partiel de l’outil. La démonstration s’est faite par la réalisation d’un scénario utilisateur.",
            technologies: ["Angular","GitKraken"]
        }
    ],
    goals: ["Définition du besoin","Choix de librairie Angular","Démonstration (POC)"],
    img: "moss.png"
}
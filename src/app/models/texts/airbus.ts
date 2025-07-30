import { PageInfos } from "./types";

export const AirbusTexts: PageInfos = {
    title: "Airbus",
    role: "Développeur fullstack",
    year: "2024-2025",
    steps: [
        {
            title: "Correction d'anomalies",
            details: "Correction d'environ 30 anomalies par mois sur l'ensemble des fonctionnalités, principalement dans la partie front-end. Grâce à cela, j'ai pu prendre en main la grande majorité du code front et supprimer du code mort.",
            technologies: ["Angular","Java"]
        },
        {
            title: "Refonte d'une nouvelle fonctionnalité",
            details: "Refonte totale de la partie front-end d'une nouvelle fonctionnalité durant 4 mois.\nAnalyse de la documentation design et communication quotidienne avec les équipes validation et design afin de cibler le besoin.",
            technologies: ["Angular"]
        },
        {
            title: "Développement d'une nouvelle fonctionnalité",
            details: "Participation majoritaire au développement front-end d'une nouvelle fonctionnalité.\nAnalyse de la documentation design, communication quotidienne avec les équipes validation et design afin de cibler le besoin et démonstrations régulière à l'équipe design.",
            technologies: ["Angular"]
        },
        {
            title: "Refactoring",
            details: "Refactoring front-end de plusieurs fonctionnalités.",
            technologies: ["Angular"]
        },
        {
            title: "Réactivité",
            details: "Participation à une réunion de crise concernant un patch urgent.\nToujours impliqué dans la résolution des problèmes urgents front-end."
        },
        {
            title: "Démonstrations",
            details: "Démonstration des fonctionnalités créées ou modifiées auprès des autres équipes."
        },
    ],
    actions: [
        {
            title: "Animation de réunions de bonnes pratiques",
            details: "Animations de points hebdomadaires afin de mettre en place de bonnes pratiques de code ainsi que de rendre le code homogène.\nPour cela, j’ai d’abord sondé tous les membres de l’équipe front-end afin de cerner quelles étaient les problématiques importantes. Puis j’ai proposé au responsable technique d’animer des réunions de 45 minutes maximum où l’on pourrait évoquer les évoquer.",
            technologies: ["Powerpoint"]
        },
        {
            title: "Lead du développement d’une nouvelle fonctionnalité",
            details: "Construction de l’architecture d’une nouvelle fonctionnalité. Mises au point avec l’équipe back-end afin de synchroniser nos travaux.",
            technologies: ["Angular","Architect","UML"]
        },
        {
            title: "Chiffrage de la mise en place de tests front-end",
            details: "Il n’y avait pas de tests front-end mis en place, aussi l’équipe dev s’était donné pour objectif d’en implémenter. Je me suis formé sur les tests unitaires et les tests end-to-end afin de connaître leurs avantages et inconvénients.\nJ’ai ensuite créé plusieurs scénarios de mise en place des tests sur une fonctionnalité existante. Les scénarios ont été débattus avec l’équipe front-end et notre testeur afin de converger vers une solution.",
            technologies: ["Powerpoint","Jasmine","Selenium"]
        },
        {
            title: "Tests de composants graphiques",
            details: "Création de composants graphiques tests en accord avec l’équipe design afin de répondre à des problèmes d’ergonomies.",
            technologies: ["Angular"]
        },
        {
            title: "Documentations front-end",
            details: "Création et documentation d’une rubrique Confluence sur le fonctionnement du code front-end.",
            technologies: ["Confluence"]
        },
        {
            title: "Rapports automatisés",
            details: "Automatisation de rapports de productivités via la récupération des données JIRA, ce afin de créer des courbes d’avancements des travaux en fonction des fonctionnalités et des périodes. Le but était de dégager des axes d’améliorations en voyant pourquoi certaines fonctionnalités fonctionnaient mieux que d’autres.",
            technologies: ["Jira","Typescript","Excel","NodeJS"]
        }
    ],
    results: [
        {
            title: "Augmentation de la productivité du front-end",
            details: "Le nombre de tickets traités par l’équipe front-end est drastiquement supérieur entre ma période d’activité et la période de 2022-2024.",
            icon: "stonks.png"
        },
        {
            title: "Gain de temps",
            details: "La fonctionnalité prise en charge a été en avance sur le planning.",
            icon: "time.png"
        },
        {
            title: "Moins d’anomalies créées",
            details: "La nouvelle fonctionnalité prise en charge a causé proportionnellement moins d’anomalies que les autres fonctions créées jusqu’alors.",
            icon: "fall.png"
        },
        {
            title: "Réduction du nombre d’anomalies",
            details: "Le nombre d’anomalies total a diminué de 60%.",
            icon: "clean.png"
        },
    ],
    context: "J’ai été déployé en mission chez Airbus par l’ESN SII dans un projet ambitieux de 60 personnes. L'équipe de développement où j'ai opéré est consitituée de 16 personnes. Le besoin front-end étant très important, j’ai surtout apporté mon expertise dans ce domaine.",
    goals: ["Stabilisation","Refonte","Évolution"],
    img: "airbus.png"
}
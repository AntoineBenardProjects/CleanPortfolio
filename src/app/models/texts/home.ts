import { Experience, Offer, OffersInfos } from "./types";

export const HomeExperiences: Experience[] = [
    {
        title: "Airbus",
        year: "2024-2025",
        role: "Fullstack, automatisation de rapports.",
        description: "Expertise apportée en front-end sur un projet de plus de 60 personnes.",
        url: "experiences/airbus",
    },
    {
        title: "GoMuscu",
        year: "2023",
        role: "Gestion de projet, design, front-end, back-end, déploiement.",
        description: "Création d’un site web responsive permettant de suivre ses dépenses caloriques et l’évolution de ses performances en musculation.",
        url: "projets/gomuscu",
    },
    {
        title: "NiceToMealYou",
        year: "2023",
        role: "Gestion de projet, design, scripting, fullstack, déploiement.",
        description: "Création d’un site web responsive permettant de trier et filtrer son carnet d’adresse par ville, arrondissement, ligne de transport en commun et bien d’autres critères.",
        url: "projets/nicetomealyou",
    },
    {
        title: "MOSS SAS",
        year: "2022",
        role: "Fullstack.",
        description: "Création une page sur leur site web interne où l’on pourrait générer les plannings afin de remplacer le logiciel utilisé.",
        url: "experiences/moss",
    },
    {
        title: "Lockbox",
        year: "2021",
        role: "Fullstack.",
        description: "Création d’un logiciel permettant d’alléger les files d’attentes devant les pharmacies lors des tests de dépistage du COVID-19.",
        url: "projets/lockbox",
    },
    {
        title: "Groupe Bel",
        year: "2021",
        role: "Fullstack.",
        description: "Aide au développement de leur portail web utilisé dans les usines de production pour visualiser les données des différents capteurs.",
        url: "experiences/bel",
    }
] 

export const HomeOffers: OffersInfos[] = [
    {
        title: "Sites webs",
        message: "Pour des sites webs plus complèxes, sur devis uniquement.",
        offers: [
            {
                name: "1 page responsive",
                price: "100€",
                additionnalPrices: [
                    "+ 50€ pour conception maquette",
                    "+ 50€ gestion du SEO"
                ]
            },
            {
                name: "3 pages responsives",
                price: "250€",
                additionnalPrices: [
                    "+ 125€ pour conception maquette",
                    "+ 125€ gestion du SEO"
                ]
            },
            {
                name: "+5 pages responsives",
                price: "80€/page",
                additionnalPrices: [
                    "+ 40€ pour conception maquette",
                    "+ 40€ gestion du SEO"
                ]
            },
        ]
    },
    {
        title: "Déploiements",
        message: "Pour des sites webs ou logiciels complèxes, sur devis uniquement. Pour applications mobiles sur appareil client, sur devis uniquement.",
        offers: [
            {
                name: "Site sur serveur client",
                price: "400€"
            },
            {
                name: "Application PlayStore",
                price: "25€",
                additionnalPrices: [
                    "+ commissions obligatoires PlayStore"
                ]
            },
            {
                name: "Application AppStore",
                price: "100€/an",
                additionnalPrices: [
                    "+ commissions obligatoires AppStore"
                ]
            },
        ]
    },
    {
        title: "Formations",
        message: "Pour une formation en rapport avec le code déployé dans un autre service, sur devis uniquement.",
        offers: [
            {
                name: "Typescript débutant",
                price: "1500€ sur 3j",
                otherPrice: "2800€ sur 7j"
            },
            {
                name: "Typescript intermédiaire",
                price: "1500€ sur 3j",
                otherPrice: "Devis"
            },
            {
                name: "Angular",
                price: "2800€ sur 7j",
                otherPrice: "Devis"
            },
        ]
    },
    {
        title: "Scripts",
        message: "Sur devis uniquement"
    }
]
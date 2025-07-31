export interface Result{
    title: string,
    details: string,
    icon?: string;
}

export interface Step extends Result{
    technologies?: string[]
}

export interface PageInfos{
    title: string,
    year: string,
    role: string;
    results?: Result[],
    actions?: Step[],
    steps: Step[],
    context: string,
    goals?: string[],
    img: string,
}

export interface Experience{
    title: string;
    year: string;
    role: string;
    description: string;
    url: string;
}

export interface Offer{
    name: string,
    price: string,
    otherPrice?: string,
    additionnalPrices?: string[],
}

export interface OffersInfos{
    title: string
    offers?: Offer[],
    message: string
}
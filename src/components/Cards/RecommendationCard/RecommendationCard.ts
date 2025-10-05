import SideBlock from "./SideBlock";

interface RecommendationCard {
    id: number,
    image: string,
    title: string,
    tags: string[],
    description: string[] | null,
    amount: number,
    isInCart: boolean,   
    sideBlock: SideBlock, 
}

export default RecommendationCard;
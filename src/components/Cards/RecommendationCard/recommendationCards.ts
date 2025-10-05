import { 
    recommendation_1, 
    recommendation_2 
} from "../../../assets/cards/recommendation-card/recommendationCardImages";
import RecommendationCard from "./RecommendationCard";
import SideBlock from "./SideBlock";

const recommendationCardsDetails: RecommendationCard[] = [
    {
        id: 1,
        image: recommendation_1,
        title: 'Я энергичная',
        description: [
            'Этот набор создан для идеального сна и полного восстановления. Магний в 5 формах успокаивает нервную систему, снижает тревожность и помогает быстрее засыпать.',
            'А экстракт ацеролы с натуральным 5-HTP и витамином В6 улучшает качество сна, делая его глубоким и восстанавливающим.'
        ],
        tags: ['витамины группы В', 'D3+K2'],
        amount: 15000,
        isInCart: false,      
        sideBlock: SideBlock.RIGHT,
    },
    {
        id: 2,
        image: recommendation_2,
        title: 'Волосы, кожа, ногти',
        description: null,
        tags: ['коллаген', 'витамины группы  В'],
        amount: 15000,
        isInCart: false,       
        sideBlock: SideBlock.LEFT,
    }
]

export default recommendationCardsDetails;
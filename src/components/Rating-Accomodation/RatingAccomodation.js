import starGrey from '../../assets/star-grey.png'
import starColored from '../../assets/star-colored.png'
import './RatingAccomodationStyle.css'

function RatingAccomodation({ rating }) {

    // Calculer le nombre d'étoiles colorées en fonction de la note
    const numColoredStars = Math.round(rating);

    // Calculer le nombre d'étoiles grises
    const numGreyStars = 5 - numColoredStars;

    // Créer des tableaux contenant le nombre d'étoiles colorées et grises à afficher
    const coloredStars = new Array(numColoredStars).fill(null);
    const greyStars = new Array(numGreyStars).fill(null);

    return (
        <div className="rating-container">
            {coloredStars.map((star, index) => (
                <img key={index} src={starColored} alt="star-colored" />
            ))}
            {greyStars.map((star, index) => (
                <img key={index} src={starGrey} alt="star-grey" />
            ))}
        </div>
    );
}

export default RatingAccomodation;
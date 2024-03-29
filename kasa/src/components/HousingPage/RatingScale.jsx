import emptyStar from "../../assets/emptyStar.png";
import fullStar from "../../assets/star-rate.png";

export default function Rate({ rating }) {
	const stars = [1, 2, 3, 4, 5];
    console.log(rating)
	return (
		<div className="rate-comp">
			{stars.map((level) =>
				rating >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
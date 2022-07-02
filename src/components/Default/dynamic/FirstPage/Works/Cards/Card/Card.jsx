import style from './Card.module.css';
import candy from './img/candy.jpg';
import short from './img/short.jpg';

const Card = (props) => {
	
	if(props.img === "candy") {
		return (
			<div className={style.card}>
				<img src={candy} alt="" />
				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</div>
		);
	} else if(props.img === "short") {
		return (
			<div className={style.card}>
				<img src={short} alt="" />
				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</div>
		);
	}
};

export default Card;
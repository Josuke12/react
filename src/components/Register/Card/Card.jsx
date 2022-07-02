import style from './Card.module.css';
import Title from './Title/Title.jsx';
import Inputs from './Inputs/Inputs.jsx';
import RegButton from './RegButton/RegButton.jsx';

const Card = (props) => {
	return (
		<div className={style.card}>
			<Title />
			<Inputs registerPage={props.registerPage}/>
			<RegButton registerHander={props.registerPage.registerHander} />
		</div>
	);
};

export default Card;
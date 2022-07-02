import style from './Cards.module.css';
import Card from './Card/Card.jsx';

const Cards = () => {
	return (
		<div className={style.cards}>
			<Card 
				img="candy" 
				title="Кондитерский цех" 
				text="Цех кондитерских изделий занимается изготовлением кондитерских изделий которые будут приятным сюрпризом для любого мероприятия!" 
			/>
			<Card 
				img="short" 
				title="Швейный цех" 
				text="Цех швейных изделий занимается шитьём специальной одежды, костюмов для активного отдыха." 
			/>
		</div>
	);
};

export default Cards;
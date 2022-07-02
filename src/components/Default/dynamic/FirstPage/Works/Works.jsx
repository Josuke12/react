import style from './Works.module.css';
import Cards from './Cards/Cards.jsx';

const Works = () => {
	return (
		<div className={style.works} id="works">
			<h2 id="works">Что мы предлагаем</h2>
			<Cards />
		</div>
	);
};

export default Works;
import style from './FirstPage.module.css';
import Title from './Title/Title.jsx';
import Works from './Works/Works.jsx';

const FirstPage = () => {
	return (
		<main>
			<div className={style.container}>
				<Title />
				<Works />
			</div>
		</main>
	);
};

export default FirstPage;
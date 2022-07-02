import style from './Copyright.module.css';

const Copyright = () => {
	return (
		<div className={style.copyright}>
			<p>Сайт не является официальным продуктом колонии и создан для учебных целей.</p>
			<p>Copyright (c) 2022, Andrey Sidelnik {"<a.sidelnik22@gmail.com>"}</p>
		</div>
	);
};

export default Copyright;
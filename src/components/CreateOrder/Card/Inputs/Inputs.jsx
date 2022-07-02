import style from './Inputs.module.css';
import React from 'react';

const Inputs = (props) => {

	let typeElement = React.createRef();
	let descriptionElement = React.createRef();

	const onChangeType = () => {
		const text = typeElement.current.value;
		props.createPage.updateType(text);
	}

	const onChangeDescription = () => {
		const text = descriptionElement.current.value;
		props.createPage.updateDescription(text);
	}


	return (
		<div className={style.inputs}>
			<input onChange={onChangeType} ref={typeElement} type="text" placeholder="Тип заказа" value={props.createPage.type} />
			<input onChange={onChangeDescription} ref={descriptionElement} type="text" placeholder="Описание" value={props.createPage.description} />
		</div>
	);
};

export default Inputs;
import style from './Button.module.css';
import {NavLink} from 'react-router-dom';

const Button = (props) => {
	if(props.button === "contained") return <NavLink className={style.contained} to={props.page}>{props.text}</NavLink>
	else if(props.button === "outlined") return <NavLink className={style.outlined} to={props.page}>{props.text}</NavLink>
	else if(props.button === "blue") return <NavLink className={style.blue} to={props.page}>{props.text}</NavLink>
	else if(props.button === "user") return <NavLink className={style.user} to={props.page}>{props.text}</NavLink>
};

export default Button;
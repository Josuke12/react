import style from './StatusCard.module.css';

const StatusCard = props => {
	if(props.status === "accepted") return <p className={style.accepted}>Одобрен</p>
	else if(props.status === "declined") return <p className={style.declined}>Отклонён</p>
	else if(props.status === "watching") return <p className={style.watching}>Обрабатывается</p>
};

export default StatusCard;
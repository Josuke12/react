import './Header.css';
import Logo from './Logo/Logo.jsx';
import Buttons from './Buttons/Buttons.jsx';
import SocialsList from './SocialsList/SocialsList.jsx';

const Header = (props) => {
	return (
		<header>
			<Logo />
			<Buttons user={props.user}/>
			<SocialsList />
		</header>
	);
};

export default Header;
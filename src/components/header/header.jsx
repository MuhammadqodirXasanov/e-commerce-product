import React from 'react';
import logo from '../../imgs/logo.svg';
import cartIcon from '../../imgs/icon-cart.svg';
import profileIcon from "../../imgs/i'm.jpg";
import menuIcon from '../../imgs/icon-menu.svg';
import xIcon from './../../imgs/icon-close.svg';
import Context from '../../context';
import Cart from '../cart/cart';
import './header.css';

const Header = () => {
	const [isNav, setIsNav] = React.useState(false);
	const [isCart, setIsCart] = React.useState(false);
	const [, , , , count, , cartCountRef, addedNum] = React.useContext(Context);

	React.useEffect(() => {}, addedNum);

	return (
		<>
			<header className='header'>
				<div className='header__box header-box1'>
					<img
						onClick={() => setIsNav(true)}
						className='header__menu'
						src={menuIcon}
						alt='menu bars'
					/>
					<img className='header__logo' src={logo} alt='logo' />
					<nav className={`header__links-box ${isNav && 'mob-nav-links'}`}>
						{isNav && <img onClick={() => setIsNav(false)} src={xIcon} />}
						<a href='#'>Collections</a>
						<a href='#'>Men</a>
						<a href='#'>Women</a>
						<a href='#'>About</a>
						<a href='#'>Contact</a>
					</nav>
				</div>
				<div className='header__box'>
					<span ref={cartCountRef} className='cart-count'>
						{addedNum}
					</span>
					<img
						className='header__cart-icon'
						onClick={() => setIsCart(!isCart)}
						src={cartIcon}
						alt='cart'
					/>
					{isCart && <Cart />}
					<img
						className='header__profile-icon'
						src={profileIcon}
						alt='profile icon'
					/>
				</div>
			</header>
			<hr className='header__line' />
		</>
	);
};

export default Header;

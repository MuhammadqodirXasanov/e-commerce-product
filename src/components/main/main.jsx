import React from 'react';
import prod1Thumb from '../../imgs/image-product-1-thumbnail.jpg';
import prod2Thumb from '../../imgs/image-product-2-thumbnail.jpg';
import prod3Thumb from '../../imgs/image-product-3-thumbnail.jpg';
import prod4Thumb from '../../imgs/image-product-4-thumbnail.jpg';
import plusIcon from '../../imgs/icon-plus.svg';
import minusIcon from '../../imgs/icon-minus.svg';
import cartIcon from '../../imgs/icon-cart.svg';
import Context from '../../context';
import Modal from '../modal/modal';
import './main.css';

const Main = () => {
	const [
		isModal,
		setIsModal,
		mainImg,
		dispatch,
		count,
		setCount,
		cartCountRef,
		,
		setAddedNum,
	] = React.useContext(Context);

	return (
		<>
			{isModal && <Modal />}
			<div className='main'>
				<div className='main__box'>
					<img
						onClick={() => setIsModal(true)}
						className='main__big-img'
						src={mainImg}
						alt='product big'
					/>
					<div className='main__thumb-imgs-box'>
						<img
							onClick={() => dispatch({ count: '1' })}
							src={prod1Thumb}
							alt='product small'
						/>
						<img
							onClick={() => dispatch({ count: '2' })}
							src={prod2Thumb}
							alt='product small'
						/>
						<img
							onClick={() => dispatch({ count: '3' })}
							src={prod3Thumb}
							alt='product small'
						/>
						<img
							onClick={() => dispatch({ count: '4' })}
							src={prod4Thumb}
							alt='product small'
						/>
					</div>
				</div>
				<div className='main__box'>
					<h5 className='main__heading'>Sneaker Company</h5>
					<h1 className='main__title'>Fall Limited Edition Sneakers</h1>
					<p className='main__text'>
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</p>
					<div className='main__flex'>
						<div className='main__pricing-box'>
							<h2 className='main__price'>$125.00</h2>
							<h5 className='main__disc'>50%</h5>
						</div>
						<p className='main__unprice'>$250.00</p>
					</div>
					<div className='main__btn-box'>
						<div className='main__counter-box'>
							<button
								onClick={() => setCount((num) => (num <= 0 ? num : num - 1))}
								className='main__outline-btn minus'
							>
								<img src={minusIcon} alt='minus' />
							</button>
							<h5 className='main__count'>{count}</h5>
							<button
								onClick={() => setCount((num) => num + 1)}
								className='main__outline-btn'
							>
								<img src={plusIcon} alt='plus' />
							</button>
						</div>
						<button
							onClick={() => count && setAddedNum((prev) => (prev += count))}
							className='main__btn'
						>
							<img src={cartIcon} alt='cart' />
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;

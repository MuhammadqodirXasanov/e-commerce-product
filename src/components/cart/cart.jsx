import React from 'react';
import cartImg from '../../imgs/image-product-1-thumbnail.jpg';
import deleteCartIcon from '../../imgs/icon-delete.svg';
import Context from '../../context';
import './cart.css';

const Cart = () => {
	const [, , , , , , , addedNum, setAddedNum] = React.useContext(Context);

	return (
		<div className='cart'>
			<h4 className='cart-title'>Cart</h4>
			<hr className='cart-line' />
			{addedNum ? (
				<>
					<div className='cart-flex'>
						<img className='cart-img' src={cartImg} alt='sneakers' />
						<div className='cart-flex'>
							<div>
								<p className='cart-text'>Fall Limited Edition Sneakers</p>
								<p className='cart-text'>
									$125.00 x{' '}
									<span className='total-price'>${addedNum * 125}.00</span>
								</p>
							</div>
							<img
								onClick={() => setAddedNum((prev) => prev - 1)}
								className='crash'
								src={deleteCartIcon}
								alt='crash'
							/>
						</div>
					</div>
					<button className='cart-btn'>Chekout</button>
				</>
			) : (
				<h5 className='cart-empty'>Empty</h5>
			)}
		</div>
	);
};

export default Cart;

import React from 'react';
import prod1Thumb from '../../imgs/image-product-1-thumbnail.jpg';
import prod2Thumb from '../../imgs/image-product-2-thumbnail.jpg';
import prod3Thumb from '../../imgs/image-product-3-thumbnail.jpg';
import prod4Thumb from '../../imgs/image-product-4-thumbnail.jpg';
import closeIcon from '../../imgs/icon-close.svg';
import Context from '../../context';
import './modal.css';

const Modal = () => {
	const [, setIsModal, mainImg, dispatch] = React.useContext(Context);

	return (
		<div className='modal'>
			<img
				onClick={() => setIsModal(false)}
				className='closeIcon'
				src={closeIcon}
			/>
			<img className='modal-img' src={mainImg} alt='product big' />
			<div className='thumb-imgs-box'>
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
	);
};

export default Modal;

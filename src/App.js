import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import prod1 from './imgs/image-product-1.jpg';
import prod2 from './imgs/image-product-2.jpg';
import prod3 from './imgs/image-product-3.jpg';
import prod4 from './imgs/image-product-4.jpg';
import Context from './context';
import './app.css';

const App = () => {
	const [isModal, setIsModal] = React.useState(false);
	const [count, setCount] = React.useState(0);
	const [{ mainImg }, dispatch] = React.useReducer(reducer, { mainImg: prod1 });
	const [addedNum, setAddedNum] = React.useState(0);
	const cartCountRef = React.useRef(null);

	function reducer(state, action) {
		switch (action.count) {
			case '1':
				return { mainImg: prod1 };
			case '2':
				return { mainImg: prod2 };
			case '3':
				return { mainImg: prod3 };
			case '4':
				return { mainImg: prod4 };
			default:
				return { mainImg: prod1 };
		}
	}

	return (
		<Context.Provider
			value={[
				isModal,
				setIsModal,
				mainImg,
				dispatch,
				count,
				setCount,
				cartCountRef,
				addedNum,
				setAddedNum,
			]}
		>
			<Header />
			<Main />
		</Context.Provider>
	);
};

export default App;

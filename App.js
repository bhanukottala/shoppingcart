import React, { Component } from 'react';
import ProductDetails from './productDetails';

class App extends Component {
	constructor() {
		super();
		this.state = { data: [] };
	}

	componentDidMount = () => {
		fetch('https://raw.githubusercontent.com/bhanuchanderk97/shoppingcart/master/jsondata.json')
			.then((res) => res.json())
			.then((json) => {
				this.setState({ data: json });
			});
	};

	addCartFunc = (qnty, totalPrice) => {
		console.log(qnty + '---' + totalPrice);
	};

	render() {
		const ids = this.state.data.map((entity) => {
			return { idval: entity.id, prod: 0 };
		});

		return (
			<div>
				<div className="shopping-cart">
					<div className="title">Shopping Cart</div>
					<ProductDetails data={this.state.data} lstval={ids} retFunc={this.addCartFunc} />
				</div>
				<div className="bottom-bar">
					<div className="textLeft">
						<p>Quantity: </p>
						<p>Total: </p>
					</div>
					<div className="textRight" />
				</div>
			</div>
		);
	}
}

export default App;

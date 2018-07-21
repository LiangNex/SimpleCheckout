/**
 *
 * @author suliang
 * @date 2018/7/21
 */

import React from 'react';
import fetch from 'isomorphic-fetch';
import Helmet from 'react-helmet';

const CallAdyenWebSDK = (props) => {
	const paymentSession = props.paymentSession;
	const sdkConfigObj = {
		context : 'test' // change it to 'live' when going live.
	};
	const chckt = window.chckt;
	const checkout = chckt.checkout(paymentSession, '#transaction-panel', sdkConfigObj);
	return null;
};

class Payment extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: null,
			transaction_id: null,
			error: false,
		}
	}
	
	componentDidMount() {
		const { match } = this.props;
		const price = match.params.price;
		fetch(`/api/transaction?price=${price}`)
			.then(res => res.json())
			.then(info => this.setState({
				data: info.data,
				transaction_id: info.transaction_id,
				error: info.error
			}));
		
	}
	
	render(){
		const data = this.state.data;
		const transaction_id = this.state.transaction_id;
		if (data === null){
			return (
				<div>
					Loading......
				</div>
			)
		} else {
			
			const paymentSession = JSON.parse(data).paymentSession;
			
			return(
				<div>
						<CallAdyenWebSDK paymentSession={paymentSession}/>
				</div>
			)
		}
	}
}

export default Payment;
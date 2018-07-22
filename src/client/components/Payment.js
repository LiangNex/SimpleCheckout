/**
 *
 * @author suliang
 * @date 2018/7/21
 */

import React from 'react';
import fetch from 'isomorphic-fetch';
import styled from 'styled-components';

const PaymentPanel = styled.div`
	padding: 1em 5%;
	min-width: 30rem;
	box-shadow: 2px 2px 2px 2px #ded5d5;
	display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const TextArea = styled.textarea`
	padding: 1em;
	width: 100%;
	min-height: 10em;
	border: 1px solid #ded5d5;
  border-radius: 5px;
`;

class CallAdyenWebSDK extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		const paymentSession = this.props.paymentSession;
		const sdkConfigObj = {
			context : 'test' // change it to 'live' when going live.
		};
		
		const chckt = window.chckt;
		if (paymentSession.length === 0 || paymentSession === undefined){
			console.log('No payment session is created');
			return null;
		}
		const checkout = chckt.checkout(paymentSession, '#transaction-panel', sdkConfigObj);
		
		// const csf = window.csf;
		// const secureFields = csf(
		// 	{
		// 		configObject : {
		// 			originKey : "pub.v2.8115211697540382.aHR0cHM6Ly9zaW1wbGVjaGVja291dC5ub3cuc2gv.rjPhMVnh2pL2Ql5Cfb5VHD8LTXbDBMGtUHWUS5CzbQ8",
		// 			cardGroupTypes : ['visa', 'mc']
		// 		},
		// 		rootNode: '#cards-div'
		// 	}
		// )
		chckt.hooks.beforeComplete = function(node, paymentData) {
			// 'node' is a reference to the Checkout container HTML node.
			// 'paymentData' is the result of the payment. Includes 'payload' variable,
			// which you should submit to the server for the Checkout API /payments/result call.
			console.log(`paymentData: ${JSON.stringify(paymentData)}`);
			const text = document.createTextNode(`Payment successful!\n Your transaction id is ${this.props.transaction_id}\n the payload for transaction result query is ${paymentData.payload}`);

			node.appendChild(text);
			return false; // Indicates that you want to replace the default handling.
		};
		
		return null;
	}
}

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
		const error = this.state.error;
		if (data === null){
			return (
				<div>
					Loading......
				</div>
			)
		} else {
			const paymentSession = JSON.parse(data).paymentSession;
			
			if (error || paymentSession === undefined){
				return(
					<PaymentPanel>
						<TextArea>
							{data}
						</TextArea>
					</PaymentPanel>
				)
			} else {
				return(
					<div>
						<CallAdyenWebSDK paymentSession={paymentSession} transaction_id={transaction_id}/>
					</div>
				)
			}
			
		}
	}
}

export default Payment;
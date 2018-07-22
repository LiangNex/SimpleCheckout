/**
 *
 * @author suliang
 * @date 2018/7/22
 */

import React from 'react';
import {
	withRouter
} from 'react-router-dom';

class PaymentForm extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		const { pathname } = this.props.location;
		console.log(`pathname: ${pathname}`)
		if (pathname.indexOf('payment') > -1){
			return (
				<div>
					<div id={'transaction-panel'}/>
				</div>
			)
		} else {
			return null;
		}
	}
}

export default withRouter(PaymentForm);

/**
 *
 * @author suliang
 * @date 2018/7/19
 */

import React from 'react';
import {
	Route,
	Link
} from 'react-router-dom';
import Purchase from './Purchase';

export default function Home () {
	return (
		<div>
			<p>
				Welcome to Liang's sample checkout page.
			</p>
			<p>
				Please wait until you see the 'CheckoutSDK version:1.3.2 using CSF version:1.2.0' comes out in your browser console (As I haven't handled the js injection feature of React-Helmet), and then click below link to start.
			</p>
			<Link to={'/purchase'}>Purchase</Link>
			<Route path={'/purchase'} component={Purchase}/>
		</div>
	)
}
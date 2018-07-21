/**
 *
 * @author suliang
 * @date 2018/7/21
 */

import React from 'react';
import fetch from 'isomorphic-fetch';

function FetchPaymentSession(price = '1.5') {
	const endpoint = `/api/transaction?price=${price}`;
	
	return fetch(endpoint)
		.then((data)=> data.json())
		.then((repos) => repos.items)
		.catch((error) => {
			console.warn(error);
			return null
		});
	
}

export default FetchPaymentSession;
/**
 *
 * @author suliang
 * @date 2018/7/19
 */

import Home from './Home';
import Purchase from './Purchase';
import Payment from './Payment';
import FetchPaymentSession from '../api/FetchPaymentSession';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
	},
	{
		path: '/purchase',
		component: Purchase,
	},
	{
		path: '/payment/:price',
		component: Payment,
	}
];

export default routes;
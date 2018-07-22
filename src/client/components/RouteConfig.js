/**
 *
 * @author suliang
 * @date 2018/7/19
 */

import Home from './Home';
import Purchase from './Purchase';
import Payment from './Payment';
import Transaction from './Transaction';
import Result from './Result';

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
	},
	{
		path: '/transaction',
		component: Transaction,
	},
	{
		path: '/result',
		component: Result,
	}
];

export default routes;
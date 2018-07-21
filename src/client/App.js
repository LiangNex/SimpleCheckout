import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
	faCheckSquare,
	faCoffee,
	faCreditCard,
	faSpinner,
	faArrowLeft,
	faTimes,
	faCalculator,
	faPlus,
	faMinus,
} from '@fortawesome/free-solid-svg-icons';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from "react-router-dom";
import styled from 'styled-components';
import routes from './components/RouteConfig';
import SideBar from './components/SideBar';
import MainLayout from './layouts/MainLayout';
import NoMatch from './components/NoMatch';
import Helmet from 'react-helmet';


const AppContainer = styled.div`
	display: flex;
`;

const ContentContainer = styled.div`
	width: 80%;
	min-height: 100vh;
	margin: 4rem 0 4rem 20%;
	display: flex;
`;

const Content = styled.div`
	width: 100%;
	max-width: 30rem;
	display: flex;
	margin: 3rem auto;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
	  library.add(
		  fab,
		  faCheckSquare,
		  faCoffee,
		  faCreditCard,
		  faSpinner,
		  faArrowLeft,
		  faTimes,
		  faCalculator,
		  faPlus,
		  faMinus,
	  );
	  
	  return(
	  	<MainLayout>
			  <Helmet>
				  <script type="text/javascript" src="https://checkoutshopper-test.adyen.com/checkoutshopper/assets/js/sdk/checkoutSDK.1.3.2.min.js"/>
				  <script type="text/javascript" src="https://checkoutshopper-test.adyen.com/checkoutshopper/assets/js/sdk/checkoutSecuredFields.1.1.1.min.js"/>
			  </Helmet>
			  <AppContainer>
					  <ContentContainer>
						  <SideBar/>
							  <Switch>
								  <Content id={'transaction-panel'}>
									  {
										  routes.map((route, index)=> (
											  <Route
												  key={index}
												  path={route.path}
												  exact={route.exact}
												  component={route.component}
											  />
										  ))
									  }
								  </Content>
								  <Route render={(props) => <NoMatch {...props} /> } />
							  </Switch>
							  <div id="cards-div">
								  <div className="js-chckt-pm__pm-holder">
									  <input type="hidden" name="txvariant" value="card"/>
									  <br/>
									  <label>
										  <span className="input-field" data-hosted-id="hostedCardNumberField" data-cse="encryptedCardNumber"/>
									  </label>
									  <br/>
									  <label>
										  <span className="input-field" data-hosted-id="hostedExpiryDateField" data-cse="encryptedExpiryDate"/>
									  </label>
									  <br/>
									  <label>
										  <span className="input-field" data-hosted-id="hostedSecurityCodeField" data-cse="encryptedSecurityCode"/>
									  </label>
								  </div>
							  </div>
					  </ContentContainer>
			  </AppContainer>
		  </MainLayout>
	  )
  }
}

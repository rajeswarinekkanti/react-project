import React, { Suspense, Fragment } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
const TicketForm = React.lazy(() => import('./_components/TicketForm'));
function App(props) {
   
	return (
   <Suspense fallback={<div>Loading... </div>}>
        <Router>
          <Switch> 
            <Fragment>
                  <Route exact path = "/" render={props => <TicketForm {...props} />} />
            </Fragment>
          </Switch>
        </Router>
        <ToastContainer />

    </Suspense>
  );
  }
  export default App;

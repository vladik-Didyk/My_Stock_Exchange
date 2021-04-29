import {BrowserRouter, Route, Switch} from 'react-router-dom'
import StockExchange from './container/StockExchange'
import StockPageContainer from './container/StockPageContainer/StockPageContainer'

export function App() {
  return (
    <BrowserRouter>
        {/* <StockExchange/> */}
        <Switch>
          <Route  path='/StockPage/:id?' component={StockPageContainer}/> 
          <Route path='/' exact  component={StockExchange}/>
        </Switch>
     </BrowserRouter>
  );
}

export default App;

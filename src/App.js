import React from 'react' 
import{ BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/Main"
import Sign_In from "./pages/sign_in/Sign_In"
import Login from "./pages/login/Login"
import NewBadge from "./pages/NewBadge/NewBadge"


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/Sign_in" component={Sign_In}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Error" component={Not_Found}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

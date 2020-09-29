import React from 'react'
import Home from './Home'
import { Route, Switch } from 'react-router-dom';
import Notesheet from './Notesheet';
import Pokemon from './Pokemon';
import Params from './Params'
import Backbtn from './Backbtn'
import FirstPage from './FirstPage'
import Search from './Search';
import Error404 from './Error404'


function App() {
    return (
        <div>
        <Home></Home>

        <Switch>
        <Route exact path="/" component={FirstPage}></Route>
        <Route exact path='/note' component={Notesheet}></Route>
        <Route exact path='/pokemon' component={Pokemon}></Route>
        <Route exact path='/params/:fname/:lname' component={Params}></Route>
        <Route exact path='/backbtn' component={Backbtn}></Route>
        <Route exact path='/search' component={Search}></Route>
        <Route component={Error404}/>
        
        
        </Switch>
            
        </div>
    )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import Home from './pages/Home.react'
import AppHeader from './components/AppHeader.react'
import NewRecord from './pages/NewRecord.react'

import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/add-record' component={NewRecord}/>
        </Switch>
    </main>
)

const App = () => (
    <div>
        <AppHeader />
        <Main />
    </div>
)

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { initDexieDB } from './data'
import Home from './pages/Home.react'
import NewRecord from './pages/NewRecord.react'
import Setting from './pages/Setting.react'

import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/add-record' component={NewRecord}/>
            <Route path='/setting' component={Setting}/>
        </Switch>
    </main>
)

const App = () => {
    return (
        <div>
            <Main />
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
registerServiceWorker()
initDexieDB()

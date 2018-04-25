import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'
import ShowDatepicker from './showDatepicker'
import InputShow from './inputShow'

const routes = [
  { path: '/',
    exact: true,
    main: ShowDatepicker
  },
  { path: '/InputShow',
    main: InputShow
  }
]

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ display: 'flex', height: '100%' }}>
          <div style={{
            padding: '10px',
            width: '20%',
            height: '100%',
            background: '#f0f0f0'
          }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><NavLink exact to='/' activeStyle={{ color: 'rgb(233, 73, 73)', fontWeight: 'bolder' }}>显示日历</NavLink></li>
              <li><NavLink to='/InputShow' activeStyle={{ color: 'rgb(233, 73, 73)', fontWeight: 'bolder' }}>文本框操作日历</NavLink></li>
            </ul>
          </div>

          <div style={{ flex: 10, padding: '10px' }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App

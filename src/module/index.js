import React from 'react'
import ReactDOM from 'react-dom'

import hashHistory from 'react-router/lib/hashHistory'

import createLogger from 'redux-logger';

import 'antd/dist/antd.css'

import dva from 'dva'

// 1. Initialize
const app = dva();

app.use({
    onAction: createLogger()
})

// 2. Model
app.model(require('./models/users'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start('#root');

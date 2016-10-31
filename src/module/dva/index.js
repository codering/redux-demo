import hashHistory from 'react-router/lib/hashHistory';
import syncHistoryWithStore  from 'react-router-redux/lib/sync'
import {routerReducer as routing} from 'react-router-redux/lib/reducer'
import routerMiddleware from 'react-router-redux/lib/middleware'
import createDva from './createDva';

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: hashHistory,
  routerMiddleware: routerMiddleware,

  setupHistory(history) {
    this._history = syncHistoryWithStore(history, this._store);
  },
});

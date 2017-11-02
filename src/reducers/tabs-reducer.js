import * as R from 'ramda';
import {List, Map, fromJS} from 'immutable';
import {FETCH_CONFIG, FETCH_CONFIG_SUCCESS} from '../actions/tabsActions';

const initialState = Map({
  tabs: List(),
  tabsById: Map(),
  fetching: false,
  fetched: false,
});

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {

    case FETCH_CONFIG:
      return state.set('fetching', true);

    case FETCH_CONFIG_SUCCESS:
      const tabsById = R.reduce((memo, tab) => {
        return R.assoc(tab.id, tab, memo);
      }, {}, payload.config);
      const setWithOrder = R.pipe(R.sort(R.prop('order')), R.pluck('id'));
      return state
        .set('fetching', false)
        .set('fetched', true)
        .set('tabs', List(setWithOrder(payload.config)))
        .set('tabsById', fromJS(tabsById));

  }
  return state;
}

import * as TabsAPIService from '../services/api/TabsAPIService';

export const FETCH_CONFIG = 'TABS/FETCH_CONFIG';
export const FETCH_CONFIG_SUCCESS = 'TABS/FETCH_CONFIG_SUCCESS';
export const FETCH_CONFIG_FAILED = 'TABS/FETCH_CONFIG_FAILED';

export function fetchConfig() {
  return async dispatch => {
    dispatch({
      type: FETCH_CONFIG,
      payload: {},
    });

    try {
      const config = await TabsAPIService.fetchConfig();
      dispatch({
        type: FETCH_CONFIG_SUCCESS,
        payload: {config},
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: FETCH_CONFIG_FAILED,
        payload: {err},
      });
    }
  };
}

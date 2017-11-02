export const getTabsList = store => {
  return store.tabs.get('tabs').map(id => {
    return store.tabs.getIn(['tabsById', id]);
  });
};

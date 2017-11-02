import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import {asyncComponent} from 'react-async-component';
import {getTabsList} from '../services/join-state';
import {fetchConfig} from '../actions/tabsActions';
import {Tabs, TabsHeader, Tab, TabBody, Spinner} from '../components/elements';

@connect((store, props) => {
  return {
    activeTab: props.match.params.id,
    tabs: getTabsList(store),
    fetching: store.tabs.get('fetching'),
    fetched: store.tabs.get('fetched'),
  };
})
class TabsContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchConfig());
  }

  render() {
    const {activeTab, tabs, fetched, fetching} = this.props;

    if (fetching || (!fetching && !fetched)) {
      return (
        <Spinner />
      );
    }

    return (
      <Tabs>
        <TabsHeader>
          {tabs.map(tab => {
            return (
              <Tab
                id={tab.get('id')}
                title={tab.get('title')}
                link={`/${tab.get('id')}`}
                active={tab.get('id') === activeTab}
                key={tab.get('id')}
              />
            );
          })}
        </TabsHeader>
        <TabBody>
          <Switch>
            {tabs.map(tab => {
              return (
                <Route
                  path={`/${tab.get('id')}`}
                  render={() => {
                    const Widget = asyncComponent({
                      resolve: () => System.import(`../components/${tab.get('path')}`),
                    });
                    return <Widget />;
                  }}
                  exact={true}
                  key={tab.get('id')}
                />
              );
            })}
            <Redirect exact={true} from="/" to={`${tabs.first().get('id')}`} />
          </Switch>
        </TabBody>
      </Tabs>
    );
  }

}

export default TabsContainer;

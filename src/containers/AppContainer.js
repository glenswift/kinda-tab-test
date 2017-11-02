import React, {PureComponent} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import TabsContainer from './TabsContainer';

@connect(() => {
  // INFO: @glenswift Component is stateless but it designed to have state and most likely will have with
  // INFO: @glenswift app growth so it's container
  return {

  };
})
class AppContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route path="/:id?" component={TabsContainer} />
      </div>
    );
  }

}

export default AppContainer;

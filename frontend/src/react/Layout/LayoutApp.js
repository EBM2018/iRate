import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './LayoutApp.css';
import Navbar from './Navbar';

export default class LayoutApp extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    route: PropTypes.object,
  };

  render() {
    const Component = this.props.component;
    const {title, route} = this.props;
    const {path} = this.props.route.match;
    return (
      <>
        {path !== '/' ?
          <div>
            {/** This navbar can be extended and use as a menu, we can also add sidebar */}
            <Navbar title={title}/>
              <main>
                <div className="container py-1">
                  <Component route={route}/>
                  {this.props.loading && `loading`}
                </div>
              </main>
          </div> :
          <>
            <Component route={route}/>
            {this.props.loading && `loading`}
          </>
        }
        {/** We can add footer here */}
      </>
    );
  }
}

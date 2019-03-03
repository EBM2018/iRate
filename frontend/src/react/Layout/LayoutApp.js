import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './LayoutApp.css';
import Navbar from './Navbar';

export default class LayoutApp extends Component {

    static propTypes = {
        component: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    render() {
        const Component = this.props.component;
        const { title, route } = this.props;

        return (
                <div>
                    {/** This navbar can be extended and use as a menu, we can also add sidebar */}
                    <Navbar title={title}/>
                    <main>
                        <div className="container py-1">
                            <Component route={route}/>
                            {
                                this.props.loading &&
                                `loading`
                            }
                        </div>
                    </main>
                    {/** We can add footer here */}
                </div>
        );
    }
}

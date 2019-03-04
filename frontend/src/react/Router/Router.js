import React from 'react'
import {Route, Switch as RouterSwitch} from 'react-router';

import {privateRoutes} from '../../services/routes';
import LayoutApp from '../Layout/LayoutApp';
import NotFound from '../utils/NotFound';


const Router = () => (
            <>
                <RouterSwitch>
                    { Object.keys(privateRoutes).map((route, key) => {
                        const { component, path, title } = privateRoutes[route];
                        return (
                            <Route
                                exact
                                path={path}
                                key={key}
                                render={ (route) =>
                                    <LayoutApp
                                        component={component}
                                        route={route}
                                        title={title}
                                    />
                                }
                            />
                        )
                    })}
                    <Route render={(props) => <NotFound {...props} />} />
                </RouterSwitch>
            </>
        );

export default Router;

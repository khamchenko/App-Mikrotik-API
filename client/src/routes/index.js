import RootRoutes from './RootContainers';
import MainRoutes from './MainContainers';
import DevicesRoutes from './DevicesContainer';
import InterfaceContainer from './InterfaceContainer';
import TrafficContainers from './TrafficContainers';

const routes = [
    {
        component: RootRoutes,
        routes: [
            {
                path: '/',
                exact: true,
                component: MainRoutes
            },
            {
                path: '/devices',
                exact: true,
                component: DevicesRoutes
            },
            {
                path: '/interface',
                exact: true,
                component: InterfaceContainer
            },
            {
                path: '/traffic',
                exact: true,
                component: TrafficContainers
            },
        ]
    }
];

export default routes;

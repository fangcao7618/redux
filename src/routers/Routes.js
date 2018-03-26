import Loadable from 'react-loadable';
import Loading from '../components/MyLoadingComponent';

// import Test from '../views/Test'; import Home from '../views/Home'; import
// About from '../views/About'; 以路由为中心进行代码分片 AsyncComponent.js 以组件为中心进行代码分片
const Test = Loadable({
    loader: () => import ('../views/Test'),
    modules: ['../views/Test'],
    webpack: () => [require.resolveWeak('../views/Test')],
    loading: Loading,
    delay: 300
});
const Home = Loadable({
    loader: () => import ('../views/Home'),
    modules: ['../views/Home'],
    webpack: () => [require.resolveWeak('../views/Home')],
    loading: Loading
});
const About = Loadable({
    loader: () => import ('../views/About'),
    modules: ['../views/About'],
    webpack: () => [require.resolveWeak('../views/About')],
    loading: Loading
});
const Count = Loadable({
    loader: () => import ('../views/Count'),
    webpack: () => [require.resolveWeak('../views/Count')],
    loading: Loading
});
export default[
    {
        path : '/',
        exact : true, // 默认首页
        component : Test
    }, {
        path : '/home',
        component : Home
    }, {
        path : '/about',
        component : About
    }, {
        path : '/Count',
        component : Count
    }
];
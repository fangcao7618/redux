import React from 'react';
import Loadable from 'react-loadable';
import MyLoadingComponent from './MyLoadingComponent';

const LoadableOtherComponent = Loadable({
  loader: () => import ('./OtherComponent'),
  loading: MyLoadingComponent,
  // loading: () => <div>Loading...</div>,
});
// const AsyncHome = asyncComponent(() => import("./containers/Home"));
const MyComponent = () => (<LoadableOtherComponent/>);

export default MyComponent;
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import AuthNavigator from '_orig/components/navigation/AuthNavigator';
import AppNavigator from '_orig/components/navigation/AppNavigator';
import getUser from '_orig/selectors/UserSelectors';

const Navigation = () => {
  const user = useSelector(state => getUser(state), shallowEqual);
  return user ? <AppNavigator /> : <AuthNavigator />;
};

export default Navigation;

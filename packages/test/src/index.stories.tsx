import React from 'react';

import Header from './index';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = () => <Header />;

export const LoggedIn = Template;
export const LoggedOU = () => <div className="text-red mt-4">hola</div>;

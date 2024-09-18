import React from 'react';
import { Outlet } from 'react-router-dom';
import { LEASE_DOCUMENTS_TABS } from '@/constants/tabs';

import Tabs from '../Tabs';
import { Heading1 } from '../ui/headings';

function Documents() {
  
  return (
    <React.Fragment>
      <Heading1 text="Documents" />
      <Tabs links={LEASE_DOCUMENTS_TABS} />
      <Outlet />
    </React.Fragment>
  );
}

export default Documents;

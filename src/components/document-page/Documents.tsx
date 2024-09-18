import { Outlet } from 'react-router-dom';
import { LEASE_DOCUMENTS_TABS } from '@/constants/tabs';

import Tabs from '../Tabs';
import { Heading1 } from '../ui/headings';
import WrappedContent from '../WrappedContent';

function Documents() {
  
  return (
    <WrappedContent>
      <Heading1 text="Documents" />
      <Tabs links={LEASE_DOCUMENTS_TABS} />
      <div className='h-full flex flex-col justify-center'>
        <Outlet />
      </div>
    </WrappedContent>
  );
}

export default Documents;

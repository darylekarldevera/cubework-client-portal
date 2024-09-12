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
      <div className='h-[100%] flex flex-col justify-center pt-[10px] pb-[20px]'>
        <Outlet />
      </div>
    </WrappedContent>
  );
}

export default Documents;

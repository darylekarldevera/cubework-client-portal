import { Outlet } from 'react-router-dom';
import { Heading1 } from '../ui/headings';
import WrappedContent from '../WrappedContent';

function Documents() {
  
  return (
    <WrappedContent>
      <Heading1 text="Documents" />
      <Outlet/>
    </WrappedContent>
  );
}

export default Documents;

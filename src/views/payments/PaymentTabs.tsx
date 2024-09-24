import { Link, useLocation } from 'react-router-dom';
import TabsButtonWrapper from '@/components/shared/TabsButtonWrapper.tsx';
import TabsButton from '@/components/shared/TabsButton.tsx';
import { PAYMENT_TABS } from '@/constants/tabs.ts';

const PaymentTabs = () => {
  const location = useLocation();
  return (
    <TabsButtonWrapper>
      {PAYMENT_TABS.map((tab, index) => {
        console.log('paths: ', tab.path, location.pathname.slice(9));
        const active = tab.path === location.pathname.slice(9);
        return (
          <TabsButton key={index} active={active}>
            <Link to={'.' + tab.path} relative="path" className="">
              {tab.label}
            </Link>
          </TabsButton>
        );
      })}
    </TabsButtonWrapper>
  );
};

export default PaymentTabs;

import manageAutoPayIcon from '@/assets/icons/manage-auto-pay.svg';

function PaymentBalanceCard() {
  return (
    <div
      className="xxs:h-[20%] md:h-[20%] bg-gradient-to-r from-[#4EB951] to-[#FFFFFF] m-auto flex flex-col w-full justify-center items-start rounded-t-[2vh] rounded-b-[4vh] overflow-hidden"
      style={{ boxShadow: '0px 0px 32px 0px rgba(0, 0, 0, 0.25)' }}
    >
      <div className="h-2/3 flex flex-grow text-gray-50 w-full px-7 py-2 flex-row items-center">
        <div className="w-[100%] font-bold flex flex-col">
          <p className="text-[11px] leading-relaxed  font-medium ">Balance</p>
          <p className="text-xl font-semibold">$ 8000.88</p>
        </div>
        <button className="w-[100px] h-[35px] bg-cw-green font-bold rounded-3xl text-xs">Pay Now</button>
      </div>
      <div className="h-1/3 bg-white text-cw-green font-bold flex text-xs flex-grow w-full items-center py-4 px-7">
        <div className="flex cursor-pointer">
          <img alt="manage_auto_pay" src={manageAutoPayIcon} width="18px" className="mr-1" />
          <p>
            <u>Manage Auto Pay</u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentBalanceCard;

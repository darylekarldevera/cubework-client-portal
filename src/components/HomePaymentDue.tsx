function HomePaymentDue() {
  return (
    <div className="bg-[#59BA56] text-gray-50 w-full h-[20%] px-10 flex flex-col justify-center items-start">
      <p>Due</p>
      <div className="w-[100%] text-lg font-bold flex justify-between flex-grow-1 border-solid">
        <p>$ 8000.88</p>
        <button className="px-7 py-1.5 text-[#59BA56] font-bold bg-white rounded text-sm">Pay Now</button>
      </div>
    </div>
  );
}

export default HomePaymentDue;

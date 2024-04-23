

const Payment = () => {
    return (
      <div className="max-w-7xl mx-auto bg-gradient-to-t from-violet-100 to-white rounded-3xl">
        <div className=" text-center space-y-4 pt-10 ">
          <h1 className="text-5xl font-bold text-Black">SIMPLIFY TICKETING</h1>
          <p className="text-xl text-violet-500">
            First Ever Unique  QR Ticketing <br />  Platform For Event
            Registration & Booking
          </p>
          <div className="flex flex-col items-center justify-center pt-5">
            <button className=" text-white flex gap-2 justify-center items-center  bg-violet-500 px-6 py-2 rounded-lg">
              <div>
                <img className="w-5" src="./icon/varify.png" alt="" />
              </div>
              <p className="text-xl">Secure Payment with</p>
            </button>
            <img className="pt-10" src="./img/payments.png" alt="" />
          </div>
        </div>

        <div></div>
      </div>
    );
};

export default Payment;
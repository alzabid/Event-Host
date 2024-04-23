

const Calender = () => {
    return (
      <div className=" relative  max-w-7xl mx-auto">
        <div className="  card lg:card-side bg-violet-500 shadow-xl px-20  py-28">
          <figure>
            <img className="mx-20" src="./img/happy.png" alt="" />
          </figure>
          <div className="card-body text-white">
            <h2 className="text-4xl font-bold">
              Host Your Event Easily & Automatedly With Us
            </h2>
            <p className="text-2xl">
              We Providing The Best Event Ticketing and Management Solutions
            </p>
            <div>
              <p>host your event with easy steps!</p>
              <p>automatic payment system and ticket will be send to mail</p>
              <p>access to registration and transaction reports</p>
              <p>send bulk personalized mail with attachments</p>
            </div>
          </div>
        </div>
        <img className="absolute bottom-0 right-0" src="./img/watch.png" alt="" />
      </div>
    );
};

export default Calender;
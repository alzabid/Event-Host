import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Calender = () => {
  return (
    <div className=" relative  max-w-7xl mx-auto px-6 lg:px-0 pt-10 md:pt-20">
      <div className="  card lg:card-side bg-violet-400 shadow-xl lg:px-20  lg:py-28">
        <figure>
          <img className="mx-20" src="./img/happy.png" alt="" />
        </figure>
        <div className="card-body text-white">
          <h2 className="text-xl md:text-4xl font-bold">
            Host Your Event Easily & Automatedly With Us
          </h2>
          <p className="md:text-2xl">
            We Providing The Best Event Ticketing and Management Solutions
          </p>
          <ul className="space-y-1 text-xs md:text-base">
            <li className="flex items-center gap-2">
              <IoCheckmarkCircleOutline />
              <span className="text-content-dark !font-medium">
                Host your event with easy steps!
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkCircleOutline />
              <span className="text-content-dark !font-medium">
                Automatic payment system and ticket will be send to mail{" "}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkCircleOutline />
              <span className="text-content-dark !font-medium">
                Access to registration and transaction reports{" "}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <IoCheckmarkCircleOutline />
              <span className="text-content-dark !font-medium">
                Send bulk personalized mail with attachments{" "}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <img
        className=" w-32 md:w-48 lg:w-72 absolute bottom-0 right-6 lg:right-0 "
        src="./img/watch.png"
        alt=""
      />
    </div>
  );
};

export default Calender;

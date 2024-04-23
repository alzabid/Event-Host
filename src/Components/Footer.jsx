const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-violet-300">
      <div className="max-w-7xl mx-auto">
        <footer className="footer py-10 text-white">
          <aside>
            <button>
              <img
                className="w-40 mb-5"
                src="./icon/EventHost.png"
                alt="EventHost"
              />
            </button>

            <p>
              IDEA Project, ICT Tower (0th Floor), <br /> Plot: E-14X, Agargaon,
              Dhaka - 1207 <br /> Phone: 02-222222, 01111111111
            </p>
          </aside>

          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Events</a>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">Event Dashboard</a>
            <a className="link link-hover">Terms & Condition</a>
            <a className="link link-hover">Privacy & Refund Policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Follow Us</h6>
            <img className="w-16" src="" alt="" />
            
          </nav>
        </footer>

        <hr />

        <footer className="footer items-center p-4 text-white">
          <aside className="items-center grid-flow-col">
            <p>Pay With</p>
            <img className="w-16" src="./img/bkash.png" alt="" />
            <img className="w-6" src="./img/nagat.png" alt="" />
            <img className="w-12" src="./img/rocket2.png" alt="" />
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <p>©2023 TickHost & UVTR. All right reserved</p>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

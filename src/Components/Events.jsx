const Events = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-0 pt-10 md:pt-20">
      <div className=" text-center space-y-4 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-Black">
          Events
        </h1>
        <div className=" text-sm md:text-base flex flex-wrap gap-3 md:gap-5 justify-center pt-5 pb-10">
          <button className=" bg-base-300 px-4 py-2 rounded-lg"> All</button>
          <button className=" bg-base-300 px-4 py-2 rounded-lg">
            {" "}
            For you
          </button>
          <button className=" bg-base-300 px-4 py-2 rounded-lg">
            {" "}
            This Day
          </button>
          <button className=" bg-base-300 px-4 py-2 rounded-lg">
            {" "}
            This Week
          </button>
          <button className=" bg-violet-500 px-4 py-2 rounded-lg ">
            {" "}
            Music
          </button>
          <button className=" bg-base-300 px-4 py-2 rounded-lg"> Union</button>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div className=" max-w-sm overflow-hidden bg-violet-100 rounded-lg">
            <div className="relative">
              <img
                className="object-cover object-center p-5  w-full h-56"
                src="./img/card1.png"
                alt="image"
              />

              <button className=" absolute top-8 left-8 bg-violet-500 px-2 py-1 text-sm rounded-lg">
                Online
              </button>
              <button className=" absolute top-8 right-8 flex justify-center items-center gap-2 bg-violet-500 px-2 py-1 text-sm rounded-lg text-white">
                <div>
                  <img src="./icon/heart.png" alt="" />
                </div>
                <p>Favourite</p>
              </button>
            </div>
            <hr className="border border-dashed border-gray-600" />

            <div className=" relative px-6 py-4 space-y-5">
              <button className=" bg-violet-500 px-2 py-1 text-sm rounded-lg">
                Music
              </button>
              <p>Celebrity Convention Hall</p>
              <h1 className="text-xl font-semibold text-gray-800">
                ROUFIAN’S HSC-24 RAG Day
              </h1>
              <button className=" absolute right-5 top-0 bg-white rounded-lg p-1 text-sm ">
                <p>Apr</p>
                <p className="text-3xl">20</p>
                <p className="text-xs">10:00 PM</p>
              </button>

              <div className=" flex gap-2 justify-between">
                <button className=" flex justify-center items-center gap-2 bg-violet-500 px-4 py-2 text-sm rounded-lg">
                  <div>
                    <img src="./icon/Vector.png" alt="" />
                  </div>
                  <p>See Ticket</p>
                </button>
                <button className=" flex gap-2 bg-white px-4 py-1 text-sm rounded-lg">
                  <p className=" text-2xl">20</p>
                  <p className="text-xs">
                    Seat <br />
                    Left
                  </p>
                </button>
                <button className="  border border-violet-500 hover:bg-violet-500 px-2 py-1 text-sm rounded-lg">
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className=" max-w-sm overflow-hidden bg-violet-100 rounded-lg">
            <div className="relative">
              <img
                className="object-cover object-center p-5  w-full h-56"
                src="./img/card2.png"
                alt="image"
              />

              <button className=" absolute top-8 left-8 bg-violet-500 px-2 py-1 text-sm rounded-lg">
                Online
              </button>
              <button className=" absolute top-8 right-8 flex justify-center items-center gap-2 bg-violet-500 px-2 py-1 text-sm rounded-lg text-white">
                <div>
                  <img src="./icon/heart.png" alt="" />
                </div>
                <p>Favourite</p>
              </button>
            </div>
            <hr className="border border-dashed border-gray-600" />

            <div className=" relative px-6 py-4 space-y-5">
              <button className=" bg-violet-500 px-2 py-1 text-sm rounded-lg">
                Music
              </button>
              <p>Celebrity Convention Hall</p>
              <h1 className="text-xl font-semibold text-gray-800">
                ROUFIAN’S HSC-24 RAG Day
              </h1>
              <button className=" absolute right-5 top-0 bg-white rounded-lg p-1 text-sm ">
                <p>Apr</p>
                <p className="text-3xl">25</p>
                <p className="text-xs">10:00 PM</p>
              </button>

              <div className=" flex gap-2 justify-between">
                <button className=" flex justify-center items-center gap-2 bg-violet-500 px-4 py-2 text-sm rounded-lg">
                  <div>
                    <img src="./icon/Vector.png" alt="" />
                  </div>
                  <p>See Ticket</p>
                </button>
                <button className=" flex gap-2 bg-white px-4 py-1 text-sm rounded-lg">
                  <p className=" text-2xl">20</p>
                  <p className="text-xs">
                    Seat <br />
                    Left
                  </p>
                </button>
                <button className="  border border-violet-500 hover:bg-violet-500 px-2 py-1 text-sm rounded-lg">
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className=" max-w-sm overflow-hidden bg-violet-100 rounded-lg">
            <div className="relative">
              <img
                className="object-cover object-center p-5  w-full h-56"
                src="./img/card3.png"
                alt="image"
              />

              <button className=" absolute top-8 left-8 bg-violet-500 px-2 py-1 text-sm rounded-lg">
                Online
              </button>
              <button className=" absolute top-8 right-8 flex justify-center items-center gap-2 bg-violet-500 px-2 py-1 text-sm rounded-lg text-white">
                <div>
                  <img src="./icon/heart.png" alt="" />
                </div>
                <p>Favourite</p>
              </button>
            </div>
            <hr className="border border-dashed border-gray-600" />

            <div className=" relative px-6 py-4 space-y-5">
              <button className=" bg-violet-500 px-2 py-1 text-sm rounded-lg">
                Music
              </button>
              <p>Celebrity Convention Hall</p>
              <h1 className="text-xl font-semibold text-gray-800">
                ROUFIAN’S HSC-24 RAG Day
              </h1>
              <button className=" absolute right-5 top-0 bg-white rounded-lg p-1 text-sm ">
                <p>Apr</p>
                <p className="text-3xl">30</p>
                <p className="text-xs">10:00 PM</p>
              </button>

              <div className=" flex gap-2 justify-between">
                <button className=" flex justify-center items-center gap-2 bg-violet-500 px-4 py-2 text-sm rounded-lg">
                  <div>
                    <img src="./icon/Vector.png" alt="" />
                  </div>
                  <p>See Ticket</p>
                </button>
                <button className=" flex gap-2 bg-white px-4 py-1 text-sm rounded-lg">
                  <p className=" text-2xl">20</p>
                  <p className="text-xs">
                    Seat <br />
                    Left
                  </p>
                </button>
                <button className="  border border-violet-500 hover:bg-violet-500 px-2 py-1 text-sm rounded-lg">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

const Scanner = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className=" text-center space-y-4 ">
        <h1 className="text-4xl font-bold text-Black">Automated QR Scanner</h1>
        <p className="text-2xl text-violet-500">
          Scan & Verify The Attendees Directly By Our QR Scanning Solution.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
          <div className="card w-72 bg-[#F1F3FF] shadow-xl">
            <div className="card-body">
              <div className="avatar">
                <div className="w-12 p-2 bg-white rounded-full">
                  <img src="./icon/1.png" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-Black">One Click</h1>
              <p className="text-gray-500">QR verification System</p>
            </div>
          </div>
          {/* 2 */}
          <div className="card w-72 bg-[#F1F3FF] shadow-xl">
            <div className="card-body">
              <div className="avatar">
                <div className="w-12 p-2 bg-white rounded-full">
                  <img src="./icon/2.png" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-Black">One time</h1>
              <p className="text-gray-500">QR Code</p>
            </div>
          </div>
          {/* 3 */}
          <div className="card w-72 bg-[#F1F3FF] shadow-xl">
            <div className="card-body">
              <div className="avatar">
                <div className="w-12 p-2 bg-white rounded-full">
                  <img src="./icon/3.png" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-Black">Easy Access</h1>
              <p className="text-gray-500"> Access our Service</p>
            </div>
          </div>
          {/* 4 */}
          <div className="card w-72 bg-[#F1F3FF] shadow-xl">
            <div className="card-body">
              <div className="avatar">
                <div className="w-12 p-3 bg-white rounded-full">
                  <img src="./icon/4.png" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-Black">mail</h1>
              <p className="text-gray-500">
                Send bulk personalized mail with attachments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;

import location from '/svgs/location.svg';
import phone from '/svgs/phone.svg';
import email from '/svgs/email.svg';

const Contact = () => {
  return (
    <div id='aloqa' className="container m-auto mt-[100px]">
      <div className="">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center p-[10px]">
          <div className="bg-white  p-3 md:p-8 rounded-lg shadow-none md:shadow-lg  h-full">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-left">Need Reliable Logistics?</h2>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              Contact us today to learn how our modern fleet and logistics expertise can drive your business forward.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-5 items-center">
                <img src={location} alt="Location Icon" />
                <span> Address 8331 Horton hwy, suite C, College Groove, TN 37046 </span>
              </li>
              <li className="flex gap-5 items-center">
                <img src={phone} alt="Phone Icon" />
                <span>800 750 0033</span>
              </li>
              <li className="flex gap-5 items-center">
                <img src={email} alt="Email Icon" />
                <span>towncargo.info@gmail.com</span>
              </li>
            </ul>
          </div>
        

          <div className="bg-white p-8 rounded-lg shadow-lg h-full  m-auto items-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Any questions?</h2>
                    <p className="text-gray-600 mb-6">
                       If you have any questions, feel free to leave a message. We will get back to you soon!
                    </p>
                    <form className="m-auto">
                        <div className="mb-4">
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="text"
                                required
                                placeholder="Phone number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                        >
                            Sent
                        </button>
                    </form>
                </div>

            {/* <div style={{ position: "relative", overflow: "hidden" }}>
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=65.795954%2C38.844514&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyNzIxNDUSKk_Ku3piZWtpc3RvbiwgUWFzaHFhZGFyeW8gdmlsb3lhdGksIFFhcnNoaSIKDXmUg0IVzV0bQg%2C%2C&z=12.41"
                className='md:w-full md:h-[300px] w-full h-full'
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: "relative" }}
              ></iframe>
            </div> */}
          </div>
        </div>

      </div>
    
  )
}

export default Contact

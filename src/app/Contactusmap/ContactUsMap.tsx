import plus from "@/../Public/Images/Plus.svg";
import Image from "next/image";
import Phoneicon from "@/../Public/Images/Call-Icon.svg";

export default function ContactUsMap() {
  return (
    <div>
      <div className=" font-plusJakarta">
        <div className="bg-white  w-screen flex items-center justify-center  ">
          <div className=" w-[1500px]  ">
            <div className="flex pt-16 pb-16">
              <div className="flex-1 text-black ml-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4327882632365!2d72.8517152122491!3d19.044700052877054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96a1ab9dd61%3A0x12cf87875a7fb76f!2sShribalaji%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1729380854365!5m2!1sen!2sin"
                  width="700"
                  height="700"
                  className="rounded-3xl"
                ></iframe>
              </div>
              <div className="flex-1 mr-4 mt-4">
                <div>
                  <div className=" text-black">
                    <p className="text-5xl font-bold flex gap-4">
                      <span className="text-[#5e5eee] ">Book Your</span>
                      <span>Dental visit</span>
                    </p>
                    <p className="text-xl font-bold  text-gray-500 mt-10">
                      Fill out the form below to request your dental
                      appointment. We&apos;ll confirm your time and send you a
                      reminder.
                    </p>
                  </div>
                  <div className="flex flex-col gap-10 mt-12">
                    <div className="flex justify-start items-start gap-8">
                      {" "}
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="border-2 border-gray-400 text-xl rounded-[50px] p-4 flex-1"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="border-2 border-gray-400 text-xl rounded-[50px] p-4 flex-1"
                      />
                    </div>
                    <div className="flex justify-start items-start gap-8">
                      {" "}
                      <input
                        type="text"
                        placeholder="Enter Your Location"
                        className="border-2 border-gray-400 text-xl rounded-[50px] p-4 flex-1"
                      />
                      <input
                        type="text"
                        placeholder="Medical Record No."
                        className="border-2 border-gray-400 text-xl rounded-[50px] p-4 flex-1"
                      />
                    </div>
                    <div className="flex justify-start items-start gap-8">
                      {" "}
                      <input
                        type="text"
                        placeholder="11/11/2024"
                        className="border-2 border-gray-400 text-xl rounded-[50px] p-4 flex-1"
                      />
                      <input
                        type="text"
                        placeholder="11:11PM"
                        className="border-2 border-gray-400 text-xl rounded-[50px] p-4 flex-1"
                      />
                    </div>
                  </div>
                  <div className="mt-10">
                    <p className="text-black text-xl font-bold">
                      Reason For Visit
                    </p>
                    <div className="flex mt-6">
                      <label className="text-gray-600 text-lg font-bold items-center flex gap-2 flex-1">
                        <input
                          type="checkbox"
                          className="h-2 w-2 border-2 rounded-full"
                        />
                        <div>Routine CheckUp</div>
                      </label>
                      <label className="text-gray-600 text-lg font-bold items-center flex gap-2 flex-1">
                        <input type="checkbox" />
                        <div>New Patient Visit </div>
                      </label>
                      <label className="text-gray-600 text-lg font-bold items-center flex gap-2 flex-1">
                        <input type="checkbox" />
                        <div>Specific Concern </div>
                      </label>
                    </div>
                    <div className=" flex mt-8 gap-6">
                      <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px] px-8 py-5 text-white text-xl font-plusJakarta font-bold">
                        Make An Appoitment
                        <Image src={plus} alt="phoneicon" />
                      </button>
                      <button className=" flex gap-4 bg-[#5e5eee] rounded-[100px] px-8 py-5 text-white text-xl font-bold">
                        <Image src={Phoneicon} alt="phoneicon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

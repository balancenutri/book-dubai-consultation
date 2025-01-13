import React from "react";
import BnLogo from "../assets/bn_logo.png";
import KhyatiImage from "../assets/khyati_rupani.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ConsultationCard({ setModalControl }) {
  const data = {
    name: "Khyati Rupani",
    designation: "Clinical Nutritionist",
    place: "DUBAI",
    date: "29th & 30th January 2025",
    venue: "Business Bay, UAE",
    phone: "+91 9152419848",
    whatsapp_text:
      "Hi, I’d like to book an appointment with Khyati in Dubai. Please let me know the available slots. Thank you!",
  };
  return (
    <div className="w-[450px] rounded-lg border-2 bg-white border-[#3FBEC9] mx-4">
      <div className="flex justify-end mt-4 mr-4">
        <img
          src={BnLogo}
          alt=""
          srcSet=""
          className="size-10 object-contain rounded-md"
        />
      </div>
      <div className="text-center -mt-5">
        <h2 className="text-2xl  font-semibold">Meet {data.name}</h2>
        <p className="text-gray-800 text-base font-medium">
          ({data.designation})
        </p>
        <p className="text-xl font-semibold">in</p>
        <h2 className="text-4xl font-bold">{data.place}</h2>

        <div className="text-lg md:text-xl  font-bold mt-4 py-1 text-[#00B6C1] underline ">
          <p>Book Your Personal Consultation Now</p>
        </div>

        <div className="flex justify-center mt-6">
          <div className="text-left p-2 border-[2.5px] border-gray-600 rounded-xl md:mr-0 w-10/12">
            <p className="text-sm md:text-[13px] flex items-center gap-3 font-medium mb-2">
              <FaCalendarAlt className="text-[#3FBEC9]" size={18} />{" "}
              <span className="text-red-700 text-base">{data.date}</span>
            </p>
            <p className=" flex items-center gap-3 text-sm md:text-[13px]  font-medium">
              <FaLocationDot className="text-[#3FBEC9] ml-1" size={18} />{" "}
              <span className="text-base">{data.venue}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex -mt-1">
        <div className="w-7/12 text-center mt-12  -mr-2 mb-4">
          <div className="text-sm -mt-4 mb-6 font-medium  -mr-3">
            <p className="text-center">Registration Fees: </p>
            <p className="font-bold text-red-500 text-lg">100 AED</p>
          </div>
          <div className="bg-yellow-100 py-1 pr-2 -mr-4 mb-3">
            <p className="text-sm text-center ml-4 font-medium">
              <span className="font-bold">100 AED </span>fully redeemable upon
              enrolling in our online diet program.
            </p>
          </div>

          <p className="text-base font-medium mt-6 underline">
            For Details Contact:
          </p>
          <p className="text-base">
            Barkha:{" "}
            <Link
              to={`https://wa.me/+919152419848?text=${data.whatsapp_text}`}
              className="text-base text-blue-500 underline font-medium"
              target="_blank"
            >
              {data.phone}
            </Link>
          </p>
        </div>
        <div className="w-6/12 flex items-end">
          <img
            src={KhyatiImage}
            alt=""
            srcSet=""
            className="w-full rounded-lg object-contain"
          />
        </div>
      </div>
      <div className="bg-white p-2 rounded-lg">
        <button
          onClick={() => setModalControl(true)}
          className="py-3 w-full bg-[#00B6C1] text-white font-semibold shadow-xl transition duration-300 rounded-lg "
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
}

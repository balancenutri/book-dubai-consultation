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
    phone: "+91 7021985258",
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
            Ritu:{" "}
            <Link
              to={`https://wa.me/+917021985258?text=${data.whatsapp_text}`}
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

// import React from "react";
// import BnLogo from "../assets/bn_logo.png";
// import KhyatiImage from "../assets/khyati_rupani.png";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaCalendarAlt } from "react-icons/fa";
// import { Link } from "react-router-dom";

// export default function ConsultationCard({ setModalControl }) {
//   const data = {
//     name: "Khyati Rupani",
//     designation: "Clinical Nutritionist",
//     place: "DUBAI",
//     date: "29th & 30th January 2025",
//     venue: "Taj Dubai, Burj Khalifa Street, Business Bay, UAE",
//     phone: "+91 7021985258",
//   };
//   return (
//     <div className="w-[450px] rounded-lg border-2 bg-white border-blue-400 mx-4">
//       <div className="flex justify-end mt-4 mr-4">
//         <img
//           src={BnLogo}
//           alt=""
//           srcSet=""
//           className="size-12 object-contain rounded-md"
//         />
//       </div>
//       <div className="flex">
//         <div className="w-7/12 text-center -mt-6 -mr-2 mb-4">
//           <h2 className="text-xl md:text-2xl  font-semibold">
//             Meet {data.name}
//           </h2>
//           <p className="text-gray-800 text-sm md:text-base font-medium">
//             ({data.designation})
//           </p>
//           <p className="text-xl font-semibold">in</p>
//           <h2 className="text-4xl font-bold">{data.place}</h2>

//           <div className="text-lg md:text-xl  font-semibold text-gray-800 mt-6">
//             <p>Book Your Personal Consultation Now</p>
//           </div>

//           <div className="text-left mt-6 p-2 border-[2.5px] border-gray-600 ml-3 rounded-xl -mr-4 md:mr-0">
//             <p className="text-xs md:text-[13px] flex items-center gap-3 font-medium mb-2">
//               <FaCalendarAlt className="text-green-500" size={18} />{" "}
//               <span className="text-red-700 text-[13px]">{data.date}</span>
//             </p>
//             <p className=" flex items-center gap-3 text-xs md:text-[13px]  font-medium">
//               <FaLocationDot className="text-blue-600 ml-1" size={18} />{" "}
//               <span>{data.venue}</span>
//             </p>
//           </div>

//           <div className=" mt-6 text-sm font-medium">
//             <p className="text-center">
//               Registration Fees:{" "}
//               <span className="font-bold text-[15px]">AED 100</span>
//             </p>
//           </div>

//           <button
//             onClick={() => setModalControl(true)}
//             className="py-2 my-4 w-36 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
//           >
//             Register Now
//           </button>
//           <div className="bg-yellow-100 py-1 pr-2 ml-2 -mr-2 mb-3">
//             <p className="text-xs text-left ml-3 font-medium -mr-1">
//               <span className="font-semibold">Note: </span> Reimburse this
//               amount fully upon registering for our online diet program
//             </p>
//           </div>

//           <p className="text-sm font-medium ">For more details contact Ritu</p>
//           <Link
//             href="tel:+9711234567890"
//             className="text-sm text-blue-500 underline  font-medium"
//           >
//             {data.phone}
//           </Link>
//         </div>
//         <div className="w-6/12 flex items-end">
//           <img
//             src={KhyatiImage}
//             alt=""
//             srcSet=""
//             className="w-full rounded-lg object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import BnLogo from "../assets/bn_logo.png";
import KhyatiRupaniImg from "../assets/khyati_rupani.png";
import { Link } from "react-router-dom";

export default function ConsultationCard({ setModalControl }) {
  const data = {
    date: "29th & 30th Jan 2025",
    venue: "Bur Dubai",
    website: "www.balancenutrition.in",
    url: "https://balancenutrition.in",
  };
  return (
    <div className="w-[450px] rounded-xl border-2 md:h-[550px] h-[500px] pb-10 bg-white overflow-hidden mx-3">
      <div className="flex justify-end m-4">
        <img
          src={BnLogo}
          alt=""
          srcSet=""
          className="size-10 object-contain rounded-md"
        />
      </div>
        <div className="md:mt-8">
          <h2 className="text-center  text-2xl font-semibold text-[#494949]">
            Nutritionist Khyati Rupani <br /> in
          </h2>
          {/* <h3 className="text-center font-bold text-[#494949]">in</h3> */}
          <h2 className="text-center text-4xl font-extrabold text-[#494949]">
            DUBAI
          </h2>
          <h3 className="text-center text-xl font-bold text-[#00757F] mt-2">
            Book Your Personal Consultation Now
          </h3>
        </div>
        <div className="flex w-full md:my-12 my-8">
          <div className="w-7/12 pl-2 text-center space-y-5 -mr-5">
            <div className="flex flex-col items-center rounded-lg border-2 py-2 border-[#616161] bottom-0 shadow-md shadow-zinc-400/90 -mr-4">
              <div className="flex gap-2 text-sm md:text-base">
                <p className="font-bold">Dates: </p>
                <p className="text-red-600 font-bold md:text-[17px]">
                  {data.date}
                </p>
              </div>
              <div className="flex gap-2">
                <p className=" font-bold">Venue : {data.venue}</p>
              </div>
            </div>
            <div>
              <div className="bg-yellow-100 py-2 mb-6">
                <p className="font-medium md:text-base text-sm">
                  To book your Appointment, <br /> click below
                </p>
              </div>
              <div>
                <button
                  onClick={() => setModalControl(true)}
                  className="py-2 text-sm w-36 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
                >
                  Pay & Book Now
                </button>
              </div>
            </div>
            <div className="text-left text-blue-600">
              <Link className="text-xs text-left" to={data.url}>
                {data.website}
              </Link>
            </div>
          </div>
          <img
            src={KhyatiRupaniImg}
            alt=""
            srcSet=""
            className="w-6/12 object-contain -mb-5"
          />
        </div>
    </div>
  );
}
// import React from "react";
// import BnLogo from "../assets/bn_logo.png";
// import KhyatiRupaniImg from "../assets/khyati_rupani.png";
// import { Link } from "react-router-dom";

// export default function ConsultationCard({ setModalControl }) {
//   const data = {
//     date: "29th & 30th Jan 2025",
//     venue: "Bur Dubai",
//     website: "www.balancenutrition.in",
//     url: "https://balancenutrition.in",
//   };
//   return (
//     <div className="w-[450px] rounded-xl border-2 relative h-[550px] pb-10 bg-white overflow-hidden">
//       <img
//         src={BnLogo}
//         alt=""
//         srcSet=""
//         className="size-10 absolute top-4 right-4 object-contain mx-auto"
//       />
//       <img
//         src={KhyatiRupaniImg}
//         alt=""
//         srcSet=""
//         className="w-6/12 absolute bottom-0 right-0 object-contain z-20"
//       />
//       <div className="relative z-10 ">
//         <div className="relative mt-20">
//           <h2 className="text-center  text-2xl font-semibold text-[#494949]">
//             Nutritionist Khyati Rupani <br /> in
//           </h2>
//           {/* <h3 className="text-center font-bold text-[#494949]">in</h3> */}
//           <h2 className="text-center text-4xl font-extrabold text-[#494949]">
//             DUBAI
//           </h2>
//           <h3 className="text-center text-xl font-bold text-[#00757F] mt-2">
//             Book Your Personal Consultation Now
//           </h3>
//         </div>
//         <div className="flex w-full mt-10 mb-12">
//           <div className="w-7/12 pl-2 text-center space-y-8">
//             <div className="flex flex-col items-center rounded-lg border-2 py-2 border-[#616161] bottom-0 shadow-md shadow-zinc-400/90 mr-4">
//               <div className="flex gap-2">
//                 <p className="font-bold">Dates: </p>
//                 <p className="text-red-600 font-bold text-[17px]">{data.date}</p>
//               </div>
//               <div className="flex gap-2">
//                 <p className=" font-bold">Venue : {data.venue}</p>
//               </div>
//             </div>
//             <div>
//               <div className="bg-yellow-100 py-2 mb-6">
//                 <p className="font-medium text-base">
//                   To book your Appointment, <br /> click below
//                 </p>
//               </div>
//               <div>
//                 <button
//                   onClick={() => setModalControl(true)}
//                   className="py-2 text-sm w-36 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105"
//                 >
//                   Pay & Book Now
//                 </button>
//               </div>
//             </div>
//             <div className="text-left text-blue-600">
//               <Link className="text-xs text-left" to={data.url}>{data.website}</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

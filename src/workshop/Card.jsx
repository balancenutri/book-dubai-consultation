import React from "react";
import {
  FaCalendarAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WorkshopCard = ({ setModalControl }) => {
  const data = {
    name: "Khyati Rupani",
    image:
      "https://www.balancenutrition.in/images/aboutUs/Khyati_Rupani_AboutUs.jpg",
    designation: "Founder and Chief Nutritionist",
    experience: "19 Years+",
    clients: "75000+",
    socialMedia: {
      instagram: "https://www.instagram.com/nutritionist_khyatirupani",
      linkedin: "https://www.linkedin.com/in/nutritionistkhyatirupani",
      twitter: "https://x.com/khyatirupani_bn",
      youtube: "https://www.youtube.com/channel/UCRBg_eWt2yJreg8AZXPGvKA",
      website: "https://balancenutrition.in/",
    },
    amount: 50,
    currency: "AED",
    location: "India Club, Dubai",
    date: "29th Jan 2025",
    fee_name: "Workshop Fees",
    mentor_id: 104,
    card_title: "Nutrition Workshop hosted by IWD",
  };
  // }
  return (
    <div className="md:w-[420px] bg-white shadow-lg rounded-xl overflow-hidden border-[2px] border-gray-100 mx-4">
      <div className="bg-[#3FBEC9]">
        <p className="text-center py-2 font-semibold text-white text-base">{data.card_title}</p>
      </div>
      <div className="relative">
        {/* <img
          className=" shadow-lg object-cover"
          src={
            "https://media.licdn.com/dms/image/v2/D4D16AQHdUUjaV43TLA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1682316263167?e=2147483647&v=beta&t=qKE88SApBTtLxr-S4t9t3axyJxSJKTvmKyQGnHNSE8g"
          }
          alt="Profile"
        /> */}
        <img
          className="shadow-lg object-cover"
          src="https://media.licdn.com/dms/image/v2/D4D16AQHdUUjaV43TLA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1682316263167?e=2147483647&v=beta&t=qKE88SApBTtLxr-S4t9t3axyJxSJKTvmKyQGnHNSE8g"
          alt="Profile"
          loading="lazy"
        />
        <img
          className="w-32 h-32 rounded-full border-2 border-gray-50 shadow-lg absolute top-6 md:top-10 left-4"
          src={data.image}
          alt="Profile"
        />
        {/* <div className="flex justify-center mt-4">
        </div> */}

        <div className="hidden md:flex justify-end mr-6 items-center gap-6 mt-4">
          <Link
            to={data.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            to={data.socialMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            to={data.socialMedia.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaXTwitter size={27} />
          </Link>
          <Link
            to={data.socialMedia.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600"
          >
            <FaYoutube size={34} />
          </Link>
        </div>
      </div>
      {/* <div className="relative">
        <p>lorem10</p>
      </div> */}

      <div className="mt-20 md:mt-8  ml-8">
        <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
        <p className="text-sm text-gray-500 font-medium">{data.designation}</p>
      </div>
      <div className="mt-4 mx-8 flex md:gap-4 justify-between md:justify-normal">
        <div className="text-center">
          <p className="text-base">Experience: </p>
          <p className="text-sm text-gray-500 font-medium">{data.experience}</p>
        </div>
        <div className="border-l-2 border-gray-500 h-12"></div>
        <div className="text-center">
          <p className="text-base">No. of Clients: </p>
          <p className="text-sm  text-gray-500 font-medium">{data.clients}</p>
        </div>
      </div>

      <div className="flex justify-between mx-8">
        <div className=" flex items-center gap-2 mt-5">
          <FaLocationDot className="text-blue-700" size={20} />
          <p className="text-sm md:text-base">{data.location}</p>
        </div>
        <div className=" flex items-center gap-2 mt-5">
          <FaCalendarAlt className="text-green-700 " size={20} />
          <p className="text-sm md:text-base">{data.date}</p>
        </div>
      </div>

      <p className="text-center text-base md:text-lg text-gray-500 mt-3">
        {data.fee_name} :{" "}
        <span className="font-medium text-green-700">
          {data.currency} {data.amount}
        </span>
      </p>

      <div
        className="flex justify-center items-center gap-2 flex-col my-4"
        onClick={() => setModalControl(true)}
      >
        <button className="py-2 text-sm w-36 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105">
          Pay & Book Now
        </button>

        <div>
          <Link
            to={data.socialMedia.website}
            className="hidden md:block text-sm text-blue-600 "
            target="_blank"
          >
            www.balancenutrition.in
          </Link>
        </div>
      </div>

      <div className="md:hidden grid grid-cols-5 mt-4 grid-cen bg-gray-100 py-2">
        <Link
          to={data.socialMedia.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 place-items-center  border-r-2 border-gray-300"
        >
          <FaInstagram size={30} />
        </Link>
        <Link
          to={data.socialMedia.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 place-items-center border-r-2 border-gray-300"
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          to={data.socialMedia.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 place-items-center  border-r-2 border-gray-300"
        >
          <FaXTwitter size={27} />
        </Link>
        <Link
          to={data.socialMedia.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:text-red-600 place-items-center border-r-2 border-gray-300"
        >
          <FaYoutube size={30} />
        </Link>
        <Link
          to={data.socialMedia.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3FBEC9] hover:text-[#3FBEC9] place-items-center"
        >
          <IoEarthOutline size={30} />
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCard;

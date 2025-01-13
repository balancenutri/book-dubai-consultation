import axios from "axios";
import dayjs from "dayjs";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  FaAngleDown,
  FaAngleUp,
  FaSun,
  FaRegClock,
  FaMoon,
  FaSpinner,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaRegCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import BookkedSuccessfully from "./BookkedSuccessfully";

export default function BookConsultationForm({
  id = 104,
  consultation,
  transaction,
}) {
  const [date, setDate] = useState(dayjs("2025-01-29").format("YYYY-MM-DD"));
  const [isOpen, setIsOpen] = useState(0);
  const [allSlot, setAllSlot] = useState([]);
  const [slot, setSlot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [loadingBooking, setLoadingBooking] = useState(false);

  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const url = `${apiUrl}/dubai/book-consultation`;

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        setLoading(true);
        const consultationUrl = `${apiUrl}/dubai/check-slots?id=${id}&date=${date}`;
        const response = await fetch(consultationUrl);
        const responseData = await response.json();
        setAllSlot(categorizeAppointmentss(responseData?.[0]?.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  const getDays = (num) => {
    const daysList = [];
    for (let i = 0; i < num; i++) {
      const date = dayjs().add(i, "day");
      daysList.push({
        name:
          i === 0
            ? `Today, ${date.format("DD MMM")}`
            : `${date.format("ddd")}, ${date.format("DD MMM")}`,
        value: date.format("YYYY-MM-DD"),
      });
    }
    return daysList;
  };

  const getSpecificDates = () => {

    const daysList = [];
    const date1 = dayjs("2025-01-29");
    const date2 = dayjs("2025-01-30");
    // const date3 = dayjs("2025-01-31");
// Output: 30 Jan 2025

    daysList.push({
      name: `${date1.format("ddd")}, ${date1.format("DD MMM")}`,
      value: date1.format("YYYY-MM-DD"),
    });
    daysList.push({
      name: `${date2.format("ddd")}, ${date2.format("DD MMM")}`,
      value: date2.format("YYYY-MM-DD"),
    });
    // daysList.push({
    //   name: `${date3.format("ddd")}, ${date3.format("DD MMM")}`,
    //   value: date3.format("YYYY-MM-DD"),
    // });

    return daysList
  };

  const categorizeAppointmentss = (appointments) => {
    const categories = {
      Morning: [],
      Afternoon: [],
      Evening: [],
      // LateEvening: [],
    };

    const allSlots = [
      "10:00 am",
      "10:30 am",
      "11:00 am",
      "11:30 am",
      "12:00 pm",
      "12:30 pm",
      "01:00 pm",
      "01:30 pm",
      "02:00 pm",
      "02:30 pm",
      "03:00 pm",
      "03:30 pm",
      "04:00 pm",
      "04:30 pm",
      "05:00 pm",
      "05:30 pm",
      "06:00 pm",
      "06:30 pm",
      "07:00 pm",
      "07:30 pm",
      "08:00 pm",
      "08:30 pm",
      "09:00 pm",
      "09:30 pm",
      "10:00 pm",
    ];

    const slots = allSlots.map((slot, index) => {
      const available = appointments.some((app) =>
        app.appointment_slots.includes(slot)
      );
      return {
        id: index + 1,
        appointment_slots: `${slot} - ${slot.replace(
          /(\d+):(\d+)\s(\w+)/,
          (match, h, m, p) => {
            let hour = parseInt(h, 10);
            let minute = parseInt(m, 10) + 25;
            if (minute >= 60) {
              minute -= 60;
              hour += 1;
            }
            if (hour > 12) hour -= 12;
            return `${hour}:${minute.toString().padStart(2, "0")} ${p}`;
          }
        )}`,
        available,
      };
    });

    slots.forEach((appointment) => {
      const { appointment_slots } = appointment;
      const [startTime, period] = appointment_slots.split(" ");
      const [hour, minute] = startTime.split(":").map(Number);

      let timeIn24HrFormat =
        period === "am" && hour === 12
          ? 0
          : period === "pm" && hour !== 12
          ? hour + 12
          : hour;

      if (timeIn24HrFormat >= 6 && timeIn24HrFormat < 12) {
        categories.Morning.push(appointment);
      } else if (timeIn24HrFormat >= 12 && timeIn24HrFormat < 18) {
        categories.Afternoon.push(appointment);
      } else {
        categories.Evening.push(appointment);
      } 
    });

    const firstAvailableSlot = slots.find((slot) => slot.available);

    if (firstAvailableSlot.id < 5) {
      setIsOpen(0);
    } else if (firstAvailableSlot.id < 17) {
      setIsOpen(1);
    } else {
      setIsOpen(2);
    } 
    return categories;
  };

  const onDateChange = async (data) => {
    setLoading(true);
    setDate(data);
    // setIsOpen(0);
    const consultationUrl = `${apiUrl}/dubai/check-slots?id=${id}&date=${data}`;
    try {
      const response = await fetch(consultationUrl);
      const responseData = await response.json();
      //   console.log(responseData?.[0]?.data);
      setAllSlot(categorizeAppointmentss(responseData?.[0]?.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  //   console.log({ allSlot });

  const handleToggle = (index) => {
    setIsOpen((prevState) => (prevState === index ? null : index));
  };

  const dates = getSpecificDates();
  //   console.log(dates);

  const getTimeIcon = (timeOfDay) => {
    switch (timeOfDay) {
      case "Morning":
        return <FaSun className="text-yellow-500" />;
      case "Afternoon":
        return <FaRegClock className="text-orange-500" />;
      case "Evening":
        return <FaMoon className="text-blue-500" />;
      case "LateEvening":
        return <FaMoon className="text-gray-600" />;
      default:
        return null;
    }
  };

  const getTimeRange = (timeOfDay) => {
    switch (timeOfDay) {
      case "Morning":
        return "10:00 AM - 12:00 PM";
      case "Afternoon":
        return "12:00 PM - 04:00 PM";
      case "Evening":
        return "04:00 PM - 09:00 PM";
      case "LateEvening":
        return "08:00 PM - 10:00 PM";
      default:
        return "";
    }
  };

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const selectedDateElement = document.getElementById(date);
    if (selectedDateElement && scrollContainerRef.current) {
      selectedDateElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [date]);

  const handleSubmit = async () => {
    // console.log("Form submitted");
    if (!date || !slot) {
      toast.error("Please select a date and time");
      return;
    }

    setConfirmModal(true);
  };

  // const handleBooked = async () => {
  //   const data = {
  //     schedule_date: date,
  //     slot_id: slot.id,
  //     consultation_id: consultation,
  //   };
  //   const responses = await axios.post(url, data);
  //   console.log("Form submitted successfully:", responses.data);

  //   if (responses.data?.status == "success") {
  //     toast.success("Consultation Booked Successfully...");
  //     setConfirmModal(false);
  //     setIsModalOpen(true); //
  //   } else {
  //     toast.error("Failed to book consultation");
  //     setConfirmModal(false);
  //   }
  // };

  const handleBooked = async () => {
    // Set the loading state to true when starting the API call
    setLoadingBooking(true);

    const data = {
      schedule_date: date,
      slot_id: slot.id,
      consultation_id: consultation,
    };

    try {
      const responses = await axios.post(url, data);
      console.log("Form submitted successfully:", responses.data);

      if (responses.data?.status === "success") {
        toast.success("Consultation Booked Successfully...");
        setConfirmModal(false);
        setIsModalOpen(true);
      } else {
        toast.error("Failed to book consultation");
        setConfirmModal(false);
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("An error occurred while booking");
    } finally {
      setLoadingBooking(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
      <div className="bg-white w-[90vw] md:w-[400px] h-[550px] px-4 py-3 overflow-scroll scrollbar-hidden rounded-lg">
        <h2 className="text-xl text-center font-medium">Book Your Slot</h2>
        <p className="mt-4 text-gray-500 font-medium">Select Date and Time</p>

        {/* Prevent body scroll */}
        <div
          ref={scrollContainerRef}
          className="grid grid-cols-2 gap-1 pt-3 overflow-x-auto "
          style={{
            maxWidth: "100%",
            whiteSpace: "nowrap",
          }}
        >
          {dates.map((item) => (
            <div
              key={item.value}
              id={item.value}
              className={`min-w-[110px] text-center py-4 rounded-t-lg cursor-pointer ${
                date === item.value && "bg-gray-100"
              }`}
              onClick={() => onDateChange(item.value)}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center mt-10 items-center py-4">
            <FaSpinner className="animate-spin text-3xl text-gray-500" />
          </div>
        )}

        <hr />

        <div className="border-t mb-2 shadow-sm h-[325px] overflow-scroll scrollbar-hidden">
          {Object.keys(allSlot).map((timeOfDay, index) => (
            <div key={index} className="border-b-2">
              <div
                className="flex justify-between items-center p-4 cursor-pointer text-gray-500 rounded-t-lg"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center gap-2">
                  {getTimeIcon(timeOfDay)} {/* Add time icon */}
                  <h3 className="font-medium text-sm">
                    {timeOfDay} ({getTimeRange(timeOfDay)})
                  </h3>
                </div>
                <span className="text-xl">
                  {isOpen === index ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              </div>

              {isOpen === index && (
                <div className="p-4 bg-white text-gray-700">
                  <div className="flex flex-wrap gap-3">
                    {allSlot[timeOfDay].map((appointment) =>
                      appointment.available ? (
                        <div
                          key={appointment.id}
                          className={`p-2 border-2 cursor-pointer rounded-xl ${
                            appointment.id === slot?.id &&
                            "border-green-500 bg-green-100"
                          }`}
                          onClick={() =>
                            setSlot({
                              id: appointment.id,
                              time: appointment.appointment_slots,
                            })
                          }
                        >
                          <p className="text-sm font-medium">
                            {appointment.appointment_slots
                              ?.split("-")[0]
                              ?.toUpperCase()}
                          </p>
                        </div>
                      ) : (
                        <div
                          key={appointment.id}
                          className="p-2 border-2 cursor-not-allowed opacity-50 rounded-xl"
                          title="Already Booked"
                          disabled
                        >
                          <p className="text-sm font-medium">
                            {appointment.appointment_slots
                              ?.split("-")[0]
                              ?.toUpperCase()}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Book Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          id="modal"
          className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
        >
          <div className="w-84 h-68 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <div>
              <FaRegCheckCircle className="text-green-500 text-5xl mb-2" />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-sm font-medium">ID: 542135656</p>
            <p className="text-sm mt-2 font-medium text-gray-500 mb-4">
              Comfirmation email and message has been sent <br />
              to your registered details
            </p>

            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCalendarAlt className="text-blue-500" />
                <span className="text-sm font-medium text-gray-600">
                  {dayjs(date).format("dddd")},{" "}
                  {dayjs(date).format("DD MMM YYYY")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-600">
                  {slot.time?.toUpperCase()}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                // navigate("/congrats", { replace: true, state: null });
                navigate("/", { replace: true, state: null });
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Alright !
            </button>
          </div>
        </div>
      )}
      {confirmModal && (loadingBooking ? (
        <div className="flex justify-center items-center py-4 fixed inset-0 bg-black bg-opacity-20">
          <FaSpinner className="animate-spin text-blue-500" size={50} />
        </div>
      ) : (
        <div
          id="modal"
          className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center"
        >
          <div className="w-84 h-68 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center">
            <div>
              <FaRegCheckCircle className="text-green-500 text-5xl mb-2" />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Please Confirm
            </h2>
            {/* <p className="text-sm font-medium text-gray-500 mb-4">
              Are you sure you want to book consultation
            </p> */}

            <div className="flex flex-col items-center mb-4">
              <div className="flex items-center gap-2 mb-2">
                <FaCalendarAlt className="text-blue-500" />
                <span className="text-sm font-medium text-gray-600">
                  {dayjs(date).format("DD-MM-YYYY")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-yellow-500" />
                <span className="text-sm font-medium text-gray-600">
                  {slot.time}
                </span>
              </div>
            </div>

            <div className="flex gap-10">
              <button
                onClick={() => setConfirmModal(false)}
                className="bg-red-400 text-sm text-white font-medium px-4 py-2 rounded-md hover:bg-red-500 transition duration-200"
              >
                Change Slot
              </button>
              <button
                onClick={handleBooked}
                className="bg-green-500 text-sm text-white font-medium px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

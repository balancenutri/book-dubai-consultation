import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import BookConsultationForm from "./BookConsultationForm";

export default function Congrates() {
  const location = useLocation();
  const state = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.consultation_id) {
      navigate("/", { replace: true, state: null });
    }
  }, [state, navigate]);

  
  return (
    <div className="flex justify-center items-center h-screen">
      {state?.consultation_id && <BookConsultationForm consultation={state?.consultation_id} />}
    </div>
  );
}

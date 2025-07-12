import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiCalendar, FiClock, FiBookOpen, FiEdit3, FiList } from "react-icons/fi";
import { useExamContext } from "../contexts/Examcontext";
import { Navigate, useNavigate } from "react-router-dom";

type FormValues = {
  subject: string;
  classSection: string;
  date: string;
  startTime: string;
  endTime: string;
  examType: string;
  totalMarks: number;
  instructions: string;
};

const Scheduleexam: React.FC = () => {
    const { addExam } = useExamContext();
    const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

 const onSubmit: SubmitHandler<FormValues> = (data) => {
  addExam(data); // ✅ Actually use the context!
  reset();
  alert("Exam Scheduled Successfully!");
  Navigate("/exams"); // Redirect to exams page after scheduling
};


  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#FFA585]">🗓️ Schedule New Exam</h1>
        <p className="text-gray-600 mt-2 text-sm">Plan exams with all the necessary details to ensure a smooth assessment process.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#ffeea066] p-8 rounded-2xl shadow-xl border border-[#FFA585]">
        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold flex items-center gap-2"><FiBookOpen /> Subject</label>
          <select {...register("subject", { required: true })} className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white">
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Social Studies">Social Studies</option>
            <option value="Computer">Computer</option>
          </select>
          {errors.subject && <span className="text-sm text-red-500">Subject is required</span>}
        </div>

        {/* Class/Section */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold flex items-center gap-2"><FiList /> Class/Section</label>
          <select {...register("classSection", { required: true })} className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white">
            <option value="">Select Class</option>
            <option value="10A">10A</option>
            <option value="10B">10B</option>
            <option value="9A">9A</option>
            <option value="8A">8A</option>
          </select>
          {errors.classSection && <span className="text-sm text-red-500">Class is required</span>}
        </div>

        {/* Date */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold flex items-center gap-2"><FiCalendar /> Exam Date</label>
          <input type="date" {...register("date", { required: true })} className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white" />
          {errors.date && <span className="text-sm text-red-500">Date is required</span>}
        </div>

        {/* Exam Type */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold flex items-center gap-2"><FiEdit3 /> Exam Type</label>
          <select {...register("examType", { required: true })} className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white">
            <option value="">Select Type</option>
            <option value="Unit Test">Unit Test</option>
            <option value="Mid-Term">Mid-Term</option>
            <option value="Final">Final</option>
            <option value="Practical">Practical</option>
          </select>
          {errors.examType && <span className="text-sm text-red-500">Exam type is required</span>}
        </div>

        {/* Start Time */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold flex items-center gap-2"><FiClock /> Start Time</label>
          <input type="time" {...register("startTime", { required: true })} className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white" />
          {errors.startTime && <span className="text-sm text-red-500">Start time is required</span>}
        </div>

        {/* End Time */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold flex items-center gap-2"><FiClock /> End Time</label>
          <input type="time" {...register("endTime", { required: true })} className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white" />
          {errors.endTime && <span className="text-sm text-red-500">End time is required</span>}
        </div>

        {/* Total Marks */}
        <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
          <label className="font-semibold">Total Marks</label>
          <input type="number" {...register("totalMarks", { required: true, min: 1 })} className="p-3 rounded-lg border bg-white focus:outline-[#FFA585]" />
          {errors.totalMarks && <span className="text-sm text-red-500">Total marks must be at least 1</span>}
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
          <label className="font-semibold">Instructions</label>
          <textarea {...register("instructions")} rows={4} placeholder="Any special instructions for students..." className="p-3 rounded-lg border resize-none focus:outline-[#FFA585] bg-white" />
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2 text-right ">
          <button type="submit" className="bg-[#FFA585] hover:bg-[#ff9468] text-white px-6 py-2 rounded-lg transition shadow">
            Schedule Exam
          </button>
        </div>
      </form>
    </div>
  );
};

export default Scheduleexam;

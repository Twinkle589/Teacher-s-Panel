import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type StudentFormValues = {
  name: string;
  class: string;
  rollNo: string;
  gender: string;
};

const Addstudent: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<StudentFormValues>();

  const onSubmit: SubmitHandler<StudentFormValues> = (data) => {
    console.log("📘 Student Added:", data);
    alert("Student added successfully!");
    reset();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-[#FFA585]">➕ Add New Student</h1>
        <p className="text-gray-600 mt-2 text-sm">
          Enter the details to register a new student.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#ffeea066] p-8 rounded-2xl shadow-xl border border-[#FFA585]"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Full Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white"
            placeholder="e.g. Aarav Sharma"
          />
          {errors.name && <span className="text-sm text-red-500">Name is required</span>}
        </div>

        {/* Roll Number */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Roll No.</label>
          <input
            type="text"
            {...register("rollNo", { required: true })}
            className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white"
            placeholder="e.g. 101"
          />
          {errors.rollNo && <span className="text-sm text-red-500">Roll No. is required</span>}
        </div>

        {/* Class */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Class</label>
          <select
            {...register("class", { required: true })}
            className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white"
          >
            <option value="">Select Class</option>
            <option value="8A">8A</option>
            <option value="9A">9A</option>
            <option value="10A">10A</option>
            <option value="10B">10B</option>
          </select>
          {errors.class && <span className="text-sm text-red-500">Class is required</span>}
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Gender</label>
          <select
            {...register("gender", { required: true })}
            className="p-3 rounded-lg border focus:outline-[#FFA585] bg-white"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <span className="text-sm text-red-500">Gender is required</span>}
        </div>

        {/* Submit */}
        <div className="col-span-1 md:col-span-2 text-right">
          <button
            type="submit"
            className="bg-[#FFA585] hover:bg-[#ff9468] text-white px-6 py-2 rounded-lg transition shadow"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addstudent;

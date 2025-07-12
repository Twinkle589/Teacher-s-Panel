import React, { createContext, useContext, useState, useEffect } from "react";

export type Exam = {
  id: number;
  subject: string;
  classSection: string;
  date: string;
  startTime: string;
  endTime: string;
  examType: string;
  totalMarks: number;
  instructions: string;
};

type ExamContextType = {
  exams: Exam[];
  addExam: (exam: Omit<Exam, "id">) => void;
};

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [exams, setExams] = useState<Exam[]>([]);

  // 🔁 Load from localStorage when component mounts
 useEffect(() => {
  const storedExams = localStorage.getItem("exams");
  console.log("📦 Loading from localStorage:", storedExams);
  if (storedExams) {
    try {
      const parsed = JSON.parse(storedExams);
      if (Array.isArray(parsed)) {
        setExams(parsed);
      } else {
        console.warn("⚠️ Invalid data in localStorage");
      }
    } catch (error) {
      console.error("❌ Failed to parse exams:", error);
    }
  }
}, []);

useEffect(() => {
  console.log("💾 Saving to localStorage:", exams);
  localStorage.setItem("exams", JSON.stringify(exams));
}, [exams]);


  const addExam = (exam: Omit<Exam, "id">) => {
    const newExam = { ...exam, id: Date.now() };
    setExams((prev) => [...prev, newExam]);
  };

  return (
    <ExamContext.Provider value={{ exams, addExam }}>
      {children}
    </ExamContext.Provider>
  );
};

export const useExamContext = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error("useExamContext must be used inside ExamProvider");
  }
  return context;
};

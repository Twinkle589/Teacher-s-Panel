export type AttendanceStatus = "Present" | "Absent";

export type Student = {
  id: number;
  name: string;
  roll: string;
};

export type AttendanceRecord = {
  date: string;
  records: {
    id: number;
    name: string;
    roll: string;
    status: AttendanceStatus;
  }[];
};

export const fakeAttendanceData: AttendanceRecord[] = [
  {
    date: "2025-07-01",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Absent" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Absent" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-02",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Absent" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Absent" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Absent" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Absent" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-03",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Absent" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Absent" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Absent" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Absent" },
    ],
  },
  {
    date: "2025-07-04",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-05",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Absent" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Absent" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Absent" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Absent" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Absent" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Absent" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Absent" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Absent" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Absent" },
    ],
  },
  {
    date: "2025-07-06",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Absent" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Absent" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Absent" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-07",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Absent" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Absent" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Absent" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Absent" },
    ],
  },
  {
    date: "2025-07-08",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Absent" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Absent" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-09",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Absent" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Absent" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Absent" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-10",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Absent" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Absent" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Absent" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Absent" },
    ],
  },
  {
    date: "2025-07-11",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Absent" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Absent" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-12",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Absent" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Absent" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Absent" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-13",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Absent" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Absent" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Absent" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Absent" },
    ],
  },
  {
    date: "2025-07-14",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Present" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Absent" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Present" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Absent" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Present" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
  {
    date: "2025-07-15",
    records: [
      { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
      { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
      { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
      { id: 4, name: "Ananya Patel", roll: "104", status: "Present" },
      { id: 5, name: "Vihaan Gupta", roll: "105", status: "Absent" },
      { id: 6, name: "Ishaan Joshi", roll: "106", status: "Present" },
      { id: 7, name: "Myra Kumar", roll: "107", status: "Present" },
      { id: 8, name: "Aditya Rao", roll: "108", status: "Present" },
      { id: 9, name: "Saanvi Reddy", roll: "109", status: "Absent" },
      { id: 10, name: "Arjun Malhotra", roll: "110", status: "Present" },
    ],
  },
];
export interface Student {
  id: number;
  studentName: string;
  averageGrade: number;
  englishGrade: number | null;
  portugueseGrade: number | null;
  japaneseGrade: number | null;
}

export interface IPostStudent {
  registration: number;
  student: Student;
}

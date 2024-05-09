import { IPostStudent, Student } from "@/interfaces";

export async function fetchStudents(): Promise<Student[]> {
  try {
    const url = "http://localhost:8080/students";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(url, { cache: "no-cache" });

    const object = await response.json();

    if (!object) {
      throw new Error(object.message);
    }

    return object.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function postStudent(
  registration: number,
  student: IPostStudent
): Promise<number> {
  try {
    const { studentName, englishGrade, portugueseGrade, japaneseGrade } =
      student;

    const url = "http://localhost:8080/students";

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        registration,
        studentName,
        englishGrade,
        portugueseGrade,
        japaneseGrade,
      }),
    });

    const object = await response.json();

    const status = object.status;

    if (!object) {
      throw new Error(object.message);
    }

    return status;
  } catch (err) {
    console.error(err);
    return 505;
  }
}

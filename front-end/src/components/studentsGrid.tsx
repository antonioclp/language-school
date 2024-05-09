import { fetchStudents } from "@/utils/api";
import { Student } from "@/interfaces";

export default async function StudentsGrid() {
  const students = await fetchStudents();

  return (
    <main className="m-app">
      <table className="m-app-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Average</th>
            <th>English</th>
            <th>Portuguese</th>
            <th>Japanese</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s: Student) => {
            return (
              <tr key={s.id}>
                <td>{s.studentName}</td>
                <td>{s.averageGrade.toFixed(1)}</td>
                <td>{s.englishGrade}</td>
                <td>{s.portugueseGrade}</td>
                <td>{s.japaneseGrade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {students.length === 0 ? <p>No students found.</p> : null}
    </main>
  );
}

import { updateStudent } from "@/utils/api";

export default function UpdateStudent() {
  async function formAction(form: FormData) {
    "use server";

    const registration = form.get("registration");

    const updatedStudent = {
      englishGrade: Number(form.get("english-grade") as string),
      portugueseGrade: Number(form.get("portuguese-grade") as string),
      japaneseGrade: Number(form.get("japanese-grade") as string),
    };

    updateStudent(Number(registration), updatedStudent);
  }

  return (
    <main className="m-sp">
      <form className="m-sp--form" action={formAction}>
        <label className="form_sp__label" htmlFor="registration">
          <span>Student Registration</span>
          <input
            type="text"
            id="registration"
            name="registration"
            min={0}
            max={10}
          />
        </label>
        <label htmlFor="english-grade">
          <span>English Grade</span>
          <input
            type="number"
            id="english-grade"
            name="english-grade"
            min={0}
            max={10}
          />
        </label>
        <label htmlFor="portuguese-grade">
          <span>Portuguese Grade</span>
          <input
            type="number"
            id="portuguese-grade"
            name="portuguese-grade"
            min={0}
            max={10}
          />
        </label>
        <label htmlFor="japanese-grade">
          <span>Japanese Grade</span>
          <input
            type="number"
            id="japanese-grade"
            name="japanese-grade"
            min={0}
            max={10}
          />
        </label>
        <button type="submit">Confirm</button>
      </form>
    </main>
  );
}

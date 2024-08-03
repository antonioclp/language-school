import { postStudent } from "@/utils/api";

// Styles
import "@/styles/pages/register.css";

export default async function RegisterStudent() {
  async function formAction(form: FormData) {
    "use server";

    const registration = form.get("registration") as string;

    const student = {
      studentName: form.get("student") as string,
      englishGrade: Number(form.get("english-grade") as string),
      portugueseGrade: Number(form.get("portuguese-grade") as string),
      japaneseGrade: Number(form.get("japanese-grade") as string),
    };

    postStudent(Number(registration), student);
  }

  return (
    <main className="m-sr">
      <form className="m-sr--form" action={formAction}>
        <label className="form__label" htmlFor="registration">
          <span>Registration</span>
          <input type="number" id="registration" name="registration" min={0} />
        </label>
        <label className="form__label" htmlFor="student">
          <span>Name</span>
          <input type="text" id="student" name="student" />
        </label>
        <label className="form__label" htmlFor="english-grade">
          <span>English Grade</span>
          <input
            type="number"
            id="english-grade"
            name="english-grade"
            min={0}
            max={10}
          />
        </label>
        <label className="form__label" htmlFor="portuguese-grade">
          <span>Portuguese Grade</span>
          <input
            type="number"
            id="portuguese-grade"
            name="portuguese-grade"
            min={0}
            max={10}
          />
        </label>
        <label className="form__label" htmlFor="japanese-grade">
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

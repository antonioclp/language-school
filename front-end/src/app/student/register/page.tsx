import { postStudent } from "@/utils/api";

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
    <main>
      <form action={formAction}>
        <label htmlFor="registration">
          Registration
          <input type="number" id="registration" name="registration" />
        </label>
        <label htmlFor="student">
          Name
          <input type="text" id="student" name="student" />
        </label>
        <label htmlFor="english-grade">
          English Grade
          <input type="number" id="english-grade" name="english-grade" />
        </label>
        <label htmlFor="portuguese-grade">
          Portuguese Grade
          <input type="number" id="portuguese-grade" name="portuguese-grade" />
        </label>
        <label htmlFor="japanese-grade">
          Japanese Grade
          <input type="number" id="japanese-grade" name="japanese-grade" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

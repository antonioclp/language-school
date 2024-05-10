export default function UpdateStudent() {
  async function formAction(form: FormData) {
    "use server";

    const registration = form.get("registration");
    const englishGrade = form.get("english-grade");
    const portugueseGrade = form.get("portuguese-grade");
    const japaneseGrarde = form.get("japanese-grade");
  }

  return (
    <main>
      <form action={formAction}>
        <label htmlFor="registration">
          <span>Student Registration</span>
          <input type="text" id="registration" name="registration" />
        </label>
        <label htmlFor="english-grade">
          <span>English Grade</span>
          <input type="number" id="english-grade" name="english-grade" />
        </label>
        <label htmlFor="portuguese-grade">
          <span>Portuguese Grade</span>
          <input type="number" id="portuguese-grade" name="portuguese-grade" />
        </label>
        <label htmlFor="japanese-grade">
          <span>Japanese Grade</span>
          <input type="number" id="japanese-grade" name="japanese-grade" />
        </label>
      </form>
    </main>
  );
}

import { professionalRecognition } from "@/lib/site-content";

export function ProfessionalRecognition() {
  return (
    <section className="shell section" aria-labelledby="professional-recognition">
      <p className="eyebrow">Selected honours</p>
      <h2 id="professional-recognition">Professional recognition</h2>
      <ul className="recognition-grid">
        {professionalRecognition.map((recognition) => (
          <li key={recognition.title}>
            <h3>{recognition.title}</h3>
            <p>{recognition.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

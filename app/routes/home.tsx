import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import type { Route } from "./+types/home";
import { resumes } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart Feedback for Your Resume" },
  ];
}

export default function Home() {
  return (
    <>
      <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />
        <section className="main-section">
          <div className="page-heading">
            <h1>Track your Application and Resume Ratings</h1>
            <h2>Review your submissions and check ai powered Feedback</h2>
          </div>

          {resumes.length > 0 && (
            <div className="resumes-section">
              {resumes.map((resume) => (
                <ResumeCard key={resume.id} resume={resume} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

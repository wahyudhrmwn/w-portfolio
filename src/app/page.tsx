import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactLinks from "@/components/ContactLinks";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 space-y-12">
        <Hero />
        <ContactLinks />
        <Skills />
        <WorkExperience />
        <Education />
        <Projects />
        <Testimonials />
        <Articles />
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
}

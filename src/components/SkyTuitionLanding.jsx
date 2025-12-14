import React, { useEffect } from "react";

export default function SkyTuitionLanding() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", e => {
        e.preventDefault();
        document
          .querySelector(anchor.getAttribute("href"))
          ?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.enc" alt="logo" className="w-10 h-10 rounded-full" />
            <span className="text-lg md:text-2xl font-bold text-[#5C87AE]">
              The Sky Tuition Classes
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            {["home", "about", "courses", "testimonials", "contact"].map(link => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize text-gray-700 hover:text-purple-600 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white pt-16"
      >
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Academic Journey
          </h1>
          <p className="text-lg md:text-2xl font-bold mb-8 text-purple-100">
            Expert tuition classes for students from Grade 1st to 12th
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold"
            >
              Enroll Now
            </a>
            <a
              href="#courses"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-600 mt-2">
              Excellence in education, personalized attention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "👨‍🏫", title: "Expert Teachers", desc: "Highly qualified educators with proven track records." },
              { icon: "📚", title: "Comprehensive Curriculum", desc: "Structured syllabus with regular assessments." },
              { icon: "🎯", title: "Individual Attention", desc: "Small batches for personalized learning." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Courses</h2>
            <p className="text-gray-600 mt-2">
              Specialized coaching for all major subjects
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {["Mathematics", "Science", "English", "Social Studies", "French"].map((c, i) => (
              <div
                key={i}
                className="bg-purple-600 text-white p-6 rounded-xl text-center hover:scale-105 transition"
              >
                <h3 className="text-xl font-bold">{c}</h3>
                <p className="text-sm mt-1">Grades 1–12</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p>📞 +91 7011754911</p>
        <p>📧 gaurav140009@gmail.com</p>
        <p>📍 Sector 128, Noida</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="font-semibold">The SKY Tuition Classes</p>
        <p className="text-gray-400 text-sm">© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
}

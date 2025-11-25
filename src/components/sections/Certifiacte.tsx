"use client";
import { motion } from "motion/react";

export default function Certificate() {
  const certifications = [
    {
      img: "/comptia.png",
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Completed June 2025",
      color: "teal",
      link: "https://www.credly.com/badges/a821bc56-4072-4ee0-8ae7-c56d86a9ac0e/public_url",
    },
    {
      img: "/it-specialist.png",
      title: "IT Specialist – Cybersecurity",
      issuer: "IT Specialist",
      date: "Completed June 2024",
      color: "teal",
      link: "https://www.credly.com/badges/6ed570d4-ee43-4f00-bbe7-a3d13ab24c5a/public_url",
    },
    {
      img: "/cisco-cert.png",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Completed June 2024",
      color: "teal",
      link: "https://www.credly.com/badges/6ed570d4-ee43-4f00-bbe7-a3d13ab24c5a/public_url",
    },
    {
      img: "/IOA.jpg",
      title: "Data Analytics Professional",
      issuer: "IOA",
      date: "Completed April 2023",
      color: "indigo",
      link: "https://drive.google.com/file/d/1dKWAX7AbTK6nCOuWIRjdP4NUrP5J7EhA/view?usp=sharing",
    },
  ];

  return (
    <section className="mt-16 px-4 md:px-8">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl text-center font-bold mb-16 tracking-tight text-white"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certifications.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-linear-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl shadow-xl p-6 border border-white/5
            hover:shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={item.img} alt={item.title} className="h-20 w-20 object-contain rounded-md" />
              <div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-teal-300">Issued by: {item.issuer}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-5">{item.date}</p>

            <a
              href={item.link}
              target="_blank"
              className={`inline-block bg-${item.color}-600 hover:bg-${item.color}-700 text-white font-medium px-4 py-2 rounded-lg transition`}
            >
              View Credential
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { color } from "motion";
import React from "react";

export default function Contact() {
  const [messageSent, setMessageSent] = React.useState({ message: "", color: "" });
  const [loading, setLoading] = React.useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) setMessageSent({ message: "Message sent successfully!", color: "green" });
    else setMessageSent({ message: "Failed to send message.", color: "red" });
    setLoading(false);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="w-full px-10">
      <div className="relative z-10 grid grid-cols-1 lg:gap-20 lg:grid-cols-2 items-center justify-center w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <img src="Astra.png" alt="Description" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col">
          <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-linear-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">

                <div className="text-center pb-6">
                  <h1 className="text-3xl">Lets Work Together</h1>

                  <p className="text-gray-300">
                    Fill up the form below to send us a message.
                  </p>
                </div>

                 <form className="space-y-4" onSubmit={handleSubmit}>

                <input
                className="w-full bg-[#312e81] text-white placeholder-gray-300 border border-[#6366f1]/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                type="email"
                placeholder="Email"
                name="email"
                  />
                <input
                    className="w-full bg-[#312e81] text-white placeholder-gray-300 border border-[#6366f1]/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <input
                    className="w-full bg-[#312e81] text-white placeholder-gray-300 border border-[#6366f1]/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    type="text"
                    placeholder="Subject"
                    name="_subject"
                  />
                  <textarea
                    className="w-full bg-[#312e81] text-white placeholder-gray-300 border border-[#6366f1]/50 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    placeholder="Type your message here..."
                    name="message"
                  ></textarea>

                  <div className="flex justify-between items-center pt-2">
                    <button
                      type="submit"
                      className="bg-linear-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#8b5cf6] hover:to-[#6366f1] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
                    >
                      {loading ? "Sending..." : "Send ➤"}
                    </button>
                    <button
                      type="reset"
                      className="bg-[#a78bfa] hover:bg-[#c084fc] font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
                    >
                      Reset
                    </button>
                  </div>
                  {messageSent && (
                    <p className={`mt-4 text-center `} style={{color:messageSent.color}}>{messageSent.message}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
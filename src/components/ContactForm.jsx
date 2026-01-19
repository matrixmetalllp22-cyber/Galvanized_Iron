import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!formData.name.trim()) return toast.error("Name is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Valid email required");
    if (formData.phone.replace(/\D/g, "").length < 10)
      return toast.error("Valid phone number required");
    if (formData.message.trim().length < 10)
      return toast.error("Message must be at least 10 characters");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx4igNIL8RPzwel3naVQpqak7zjn_FvmMMVTWiWDRjmK-Imn3nUJblk02q8hCpm_dTM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Message sent successfully!");
      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: "#0f172a", color: "#fff" },
        }}
      />

      <div className="relative w-full max-w-5xl">
        {/* Glass Card (FIX: pointer-events-none) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl backdrop-blur-xl border border-white/10 pointer-events-none" />

        <form
          onSubmit={handleSubmit}
          className="relative z-10 grid md:grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-8 p-6 sm:p-8 md:p-12 rounded-2xl"
        >
          <FloatingInput
            id="name"
            label="Full Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <FloatingInput
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <FloatingInput
            id="phone"
            label="Contact Number"
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="hidden md:block" />

          {/* Message */}
          <div className="md:col-span-2 relative">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              required
              className="
                peer w-full bg-transparent
                border border-white/20 rounded-lg
                px-4 pt-6 pb-3
                text-white placeholder-transparent
                focus:outline-none focus:border-orange-400
                focus:shadow-[0_0_0_2px_rgba(249,115,22,0.15)]
                transition
              "
            />
            <label
              htmlFor="message"
              className="
                absolute left-4 top-3 text-sm text-gray-400 cursor-text
                peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-500
                peer-focus:top-3 peer-focus:text-sm peer-focus:text-orange-400
                peer-valid:top-3 peer-valid:text-sm
                transition-all
              "
            >
              Your Message
            </label>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex justify-end mt-6 sm:mt-10">
            <button
              type="submit"
              disabled={loading || sent}
              className="
                group relative overflow-hidden
                px-8 sm:px-10 py-3.5 sm:py-4 rounded-full
                bg-gradient-to-r from-orange-500 to-blue-500
                text-black font-semibold tracking-wide
                disabled:opacity-50
                hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)]
                transition-all duration-300
                flex items-center gap-3
              "
            >
              {/* Button shine */}
              <span
                className="
                  absolute inset-0 translate-x-[-100%]
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  group-hover:translate-x-[100%]
                  transition-transform duration-700
                "
              />

              {loading && (
                <span className="h-4 w-4 border-2 border-black/40 border-t-black rounded-full animate-spin" />
              )}

              {!loading && !sent && "Send Message"}
              {loading && "Sending..."}
              {sent && "Sent ✓"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

/* Floating Label Input — FIXED */
const FloatingInput = ({ id, label, ...props }) => (
  <div className="relative">
    <input
      id={id}
      {...props}
      placeholder=" "
      className="
        peer w-full bg-transparent
        border border-white/20 rounded-lg
        px-4 pt-6 pb-3
        text-white placeholder-transparent
        focus:outline-none focus:border-orange-400
        focus:shadow-[0_0_0_2px_rgba(249,115,22,0.15)]
        transition
      "
    />
    <label
      htmlFor={id}
      className="
        absolute left-4 top-3 text-sm text-gray-400 cursor-text
        peer-placeholder-shown:top-5 peer-placeholder-shown:text-base
        peer-placeholder-shown:text-gray-500
        peer-focus:top-3 peer-focus:text-sm peer-focus:text-orange-400
        peer-valid:top-3 peer-valid:text-sm
        transition-all
      "
    >
      {label}
    </label>
  </div>
);

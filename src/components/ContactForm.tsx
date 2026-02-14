"use client";

export default function ContactForm() {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          className="bg-white border border-sage/20 rounded-lg px-4 py-3 text-warm-gray placeholder:text-warm-gray/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
        />
        <input
          type="text"
          placeholder="Last name"
          className="bg-white border border-sage/20 rounded-lg px-4 py-3 text-warm-gray placeholder:text-warm-gray/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
        />
      </div>
      <input
        type="email"
        placeholder="Email address"
        className="w-full bg-white border border-sage/20 rounded-lg px-4 py-3 text-warm-gray placeholder:text-warm-gray/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
      />
      <input
        type="text"
        placeholder="Company"
        className="w-full bg-white border border-sage/20 rounded-lg px-4 py-3 text-warm-gray placeholder:text-warm-gray/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest"
      />
      <textarea
        placeholder="Tell us about your infrastructure needs..."
        rows={4}
        className="w-full bg-white border border-sage/20 rounded-lg px-4 py-3 text-warm-gray placeholder:text-warm-gray/50 focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest resize-none"
      />
      <button
        type="submit"
        className="w-full bg-forest text-white py-3.5 rounded-lg font-semibold hover:bg-forest-light transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}

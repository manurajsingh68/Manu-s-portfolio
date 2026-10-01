import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, ArrowRight, MessageSquare, AlertCircle } from 'lucide-react';

export const ContactSection = () => {
  const emailAddress = 'narukamanu77@gmail.com';
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Portfolio inquiry',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setFeedbackMsg('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setFeedbackMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    const subjectEncoded = encodeURIComponent(formData.subject || 'Portfolio inquiry');
    const bodyEncoded = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${emailAddress}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus('success');
      setFeedbackMsg(
        `Thank you, ${formData.name}! Your message was prepared in your default email client for ${emailAddress}. If your email app didn't open automatically, you can write directly to ${emailAddress}.`
      );
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Portfolio inquiry',
      message: '',
    });
    setStatus('idle');
    setFeedbackMsg('');
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto bg-[#0C0C0C] border-t border-[#1C1F24]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#646973] font-semibold font-mono">Get In Touch</span>
          <h2 id="contact-heading" className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#D7E2EA] mt-2">
            Let&apos;s Build Together
          </h2>
        </div>
        <p className="text-[#9BA8B2] max-w-md text-sm sm:text-base font-light">
          Have an upcoming 3D project, motion design requirement, or interactive web experience? Reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA]">
              Direct Inquiry
            </h3>
            <p className="text-[#9BA8B2] text-sm sm:text-base font-light leading-relaxed">
              Prefer emailing directly from your client? Click below to send an email or copy the address.
            </p>

            {/* Email Card with Mailto & Copy */}
            <div className="p-6 rounded-2xl bg-[#131417] border border-[#26292E] hover:border-[#BBCCD7]/60 transition-all">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#818E97] mb-2 font-mono">
                <Mail className="w-4 h-4 text-[#BBCCD7]" /> Direct Email
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
                <a
                  href={`mailto:${emailAddress}?subject=Portfolio%20inquiry`}
                  className="text-base sm:text-lg font-mono font-medium text-[#D7E2EA] hover:text-[#BBCCD7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1 -mx-1"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-[#1D2024] hover:bg-[#2A2E35] text-xs font-mono text-[#D7E2EA] border border-[#30353D] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#BBCCD7]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-5 rounded-2xl bg-[#131417]/60 border border-[#202328] flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#D7E2EA] font-semibold">
                  Currently Available for Selected Projects
                </p>
                <p className="text-xs text-[#818E97] mt-0.5">
                  Freelance 3D creation, CGI, motion design &amp; WebGL development.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Note regarding form submissions */}
          <div className="p-4 rounded-xl bg-[#111215] border border-[#1E2126] text-xs text-[#737F88] leading-relaxed">
            <span className="font-semibold text-[#9BA8B2]">Note:</span> Submissions initiate your email client to send directly to <span className="text-[#D7E2EA]">{emailAddress}</span>.
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121316] border border-[#22252A] shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA] mb-6 flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-[#BBCCD7]" /> Send a Message
            </h3>

            {status === 'success' ? (
              <div className="py-8 space-y-6 text-center sm:text-left">
                <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-sm leading-relaxed">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-emerald-400" />
                  <span>{feedbackMsg}</span>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 rounded-full bg-[#1F2228] text-xs font-mono uppercase tracking-wider text-[#D7E2EA] hover:bg-[#2B2F37] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7]"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`mailto:${emailAddress}?subject=Portfolio%20inquiry`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-white transition-all"
                  >
                    Direct Email <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                    <span>{feedbackMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider text-[#BBCCD7] font-medium font-mono">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#181A1E] border border-[#2B2F36] text-[#D7E2EA] placeholder-[#4F565E] text-sm focus:border-[#BBCCD7] focus:ring-1 focus:ring-[#BBCCD7] focus:outline-none transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider text-[#BBCCD7] font-medium font-mono">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#181A1E] border border-[#2B2F36] text-[#D7E2EA] placeholder-[#4F565E] text-sm focus:border-[#BBCCD7] focus:ring-1 focus:ring-[#BBCCD7] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider text-[#BBCCD7] font-medium font-mono">
                    Subject / Project Scope
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181A1E] border border-[#2B2F36] text-[#D7E2EA] text-sm focus:border-[#BBCCD7] focus:ring-1 focus:ring-[#BBCCD7] focus:outline-none transition-all"
                  >
                    <option value="Portfolio inquiry">General Portfolio Inquiry</option>
                    <option value="3D Modeling & Asset Creation">3D Modeling & Asset Creation</option>
                    <option value="Cinematic Motion Design">Cinematic Motion Design</option>
                    <option value="Interactive 3D Website / WebGL">Interactive 3D Website / WebGL</option>
                    <option value="VFX & Simulation">VFX & Simulation</option>
                    <option value="Other Project Quote">Other Project / Quote Request</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider text-[#BBCCD7] font-medium font-mono">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me about your project goals, timeline, and deliverables..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#181A1E] border border-[#2B2F36] text-[#D7E2EA] placeholder-[#4F565E] text-sm focus:border-[#BBCCD7] focus:ring-1 focus:ring-[#BBCCD7] focus:outline-none transition-all resize-y min-h-[110px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-gradient-to-r from-[#6366F1] via-[#A855F7] to-[#EC4899] hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(168,85,247,0.35)] border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === 'submitting' ? 'Preparing Email...' : 'Send Message'}</span>
                  </button>

                  <a
                    href={`mailto:${emailAddress}?subject=Quick%20Inquiry`}
                    className="text-xs text-[#818E97] hover:text-[#D7E2EA] transition-colors text-center sm:text-right font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BBCCD7] rounded px-1"
                  >
                    Or open direct email &rarr;
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

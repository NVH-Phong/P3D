import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/Container";
import SocialMedia from "@/components/SocialMedia";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#1d1145] via-[#1d1145]/95 to-[#1d1145]/90 min-h-screen">
      <Container className="max-w-7xl lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#0db4b9] via-[#f2a1a1] to-[#e76d89] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-[#f2a1a1] max-w-3xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-[#0db4b9]/30">
              <h2 className="text-3xl font-bold mb-6 text-[#0db4b9]">
                Contact Information
              </h2>
              <p className="text-white/90 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#0db4b9]/20 to-[#e76d89]/10 rounded-xl hover:shadow-md hover:shadow-[#0db4b9]/20 transition-all border border-[#0db4b9]/20">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-[#0db4b9] mb-1">Email</h3>
                    <p className="text-white/80">hphong1132@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#e76d89]/20 to-[#f2a1a1]/10 rounded-xl hover:shadow-md hover:shadow-[#e76d89]/20 transition-all border border-[#e76d89]/20">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-bold text-[#e76d89] mb-1">Phone</h3>
                    <p className="text-white/80">+61 422261459</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#f2a1a1]/20 to-[#0db4b9]/10 rounded-xl hover:shadow-md hover:shadow-[#f2a1a1]/20 transition-all border border-[#f2a1a1]/20">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold text-[#f2a1a1] mb-1">Address</h3>
                    <p className="text-white/80">
                      Melbourne, Victoria, Australia
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-[#0db4b9]/20 to-[#f2a1a1]/10 rounded-xl hover:shadow-md hover:shadow-[#0db4b9]/20 transition-all border border-[#0db4b9]/20">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h3 className="font-bold text-[#0db4b9] mb-1">
                      Business Hours
                    </h3>
                    <p className="text-white/80">
                      Monday - Saturday: 9AM - 6PM
                    </p>
                    <p className="text-white/80">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-[#e76d89]/30">
              <h3 className="text-2xl font-bold mb-2 text-[#e76d89]">
                Follow Us
              </h3>
              <p className="mb-6 text-white/90">
                Stay connected on social media
              </p>
              <SocialMedia
                className="justify-start"
                iconClassName="border-[#0db4b9] text-[#0db4b9] hover:bg-[#0db4b9]/20 hover:border-[#e76d89]"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-10 border border-[#f2a1a1]/30">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#0db4b9] to-[#e76d89] bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white font-semibold">
                  Your Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-[#0db4b9]/30 rounded-lg text-white placeholder:text-white/50 focus:border-[#0db4b9] focus:ring-2 focus:ring-[#0db4b9]/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-semibold">
                  Your Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-[#e76d89]/30 rounded-lg text-white placeholder:text-white/50 focus:border-[#e76d89] focus:ring-2 focus:ring-[#e76d89]/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-white font-semibold"
                >
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 bg-white/10 border-2 border-[#f2a1a1]/30 rounded-lg text-white placeholder:text-white/50 focus:border-[#f2a1a1] focus:ring-2 focus:ring-[#f2a1a1]/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-white font-semibold"
                >
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us more about your project or inquiry..."
                  className="w-full px-4 py-3 bg-white/10 border-2 border-[#0db4b9]/30 rounded-lg text-white placeholder:text-white/50 resize-none focus:border-[#0db4b9] focus:ring-2 focus:ring-[#0db4b9]/20 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0db4b9] via-[#e76d89] to-[#f2a1a1] hover:shadow-lg hover:shadow-[#0db4b9]/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/Container";

const ContactPage = () => {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen">
      <Container className="max-w-7xl lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-darkColor to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-darkColor flex items-center gap-3">
                <span className="w-2 h-8 bg-darkColor rounded-full"></span>
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-linear-to-br from-darkColor/5 to-blue-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-bold text-darkColor mb-1">Email</h3>
                    <p className="text-gray-600">hphongt1123@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-linear-to-br from-darkColor/5 to-blue-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-bold text-darkColor mb-1">Phone</h3>
                    <p className="text-gray-600">+61 42206169</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-linear-to-br from-darkColor/5 to-blue-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-bold text-darkColor mb-1">Address</h3>
                    <p className="text-gray-600">
                      Melbourne, Victoria, Australia
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-linear-to-br from-darkColor/5 to-blue-50 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-3xl">🕒</div>
                  <div>
                    <h3 className="font-bold text-darkColor mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-linear-to-r from-darkColor to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <p className="mb-6 opacity-90">Stay connected on social media</p>
              <div className="flex gap-4">
                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors">
                  📘
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors">
                  🐦
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors">
                  📷
                </button>
                <button className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors">
                  💼
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <h2 className="text-3xl font-bold mb-6 text-darkColor flex items-center gap-3">
              <span className="w-2 h-8 bg-darkColor rounded-full"></span>
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-semibold">
                  Your Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-darkColor focus:ring-2 focus:ring-darkColor/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-semibold">
                  Your Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-darkColor focus:ring-2 focus:ring-darkColor/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className="text-gray-700 font-semibold"
                >
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-darkColor focus:ring-2 focus:ring-darkColor/20 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-gray-700 font-semibold"
                >
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us more about your project or inquiry..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg resize-none focus:border-darkColor focus:ring-2 focus:ring-darkColor/20 transition-all"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-darkColor to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                Send Message ✉️
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;

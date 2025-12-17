import Container from "@/components/Container";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#f2a1a1]/10 to-white">
      <Container className="max-w-6xl lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#1d1145]">
            About P3D
          </h1>
          <p className="text-xl text-[#1d1145]/70 max-w-3xl mx-auto">
            Transforming imagination into reality through cutting-edge 3D
            technology
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl shadow-[#1d1145]/10 p-8 md:p-12 border border-[#f2a1a1]/30">
          <h2 className="text-3xl font-bold mb-6 text-[#1d1145] flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-[#0db4b9] to-[#e76d89] rounded-full"></span>
            Our Story
          </h2>
          <p className="text-lg text-[#1d1145]/80 leading-relaxed mb-4">
            P3D is your premier destination for high-quality 3D products and
            innovative design solutions.{" "}
            <span className="font-semibold text-[#0db4b9]">
              Founded in 2025
            </span>
            , we specialize in bringing creativity to life through cutting-edge
            3D technology and exceptional craftsmanship.
          </p>
          <p className="text-lg text-[#1d1145]/80 leading-relaxed">
            Our passion lies in transforming ideas into tangible reality.
            Whether you&apos;re looking for custom 3D-printed items, unique
            design pieces, or innovative products, we deliver excellence with
            every creation.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="mb-12 bg-[#0db4b9]/5 rounded-3xl p-8 md:p-12 border border-[#0db4b9]/20">
          <h2 className="text-3xl font-bold mb-6 text-[#1d1145] flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-[#0db4b9] to-[#e76d89] rounded-full"></span>
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:shadow-[#0db4b9]/20 transition-all border border-[#f2a1a1]/20">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold mb-2 text-[#1d1145]">
                Creative Design
              </h3>
              <p className="text-[#1d1145]/70">
                State-of-the-art technology combined with artistic vision to
                create exceptional products
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:shadow-[#e76d89]/20 transition-all border border-[#f2a1a1]/20">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold mb-2 text-[#1d1145]">
                Custom Solutions
              </h3>
              <p className="text-[#1d1145]/70">
                Tailored 3D-printed items designed to meet your unique
                specifications
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:shadow-[#0db4b9]/20 transition-all border border-[#f2a1a1]/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-[#1d1145]">
                Quality Excellence
              </h3>
              <p className="text-[#1d1145]/70">
                Every product meets the highest standards of quality and
                precision
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mb-12 bg-white rounded-3xl shadow-xl shadow-[#1d1145]/10 p-8 md:p-12 border border-[#f2a1a1]/30">
          <h2 className="text-3xl font-bold mb-6 text-[#1d1145] flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-[#0db4b9] to-[#e76d89] rounded-full"></span>
            Our Mission
          </h2>
          <p className="text-lg text-[#1d1145]/80 leading-relaxed mb-4">
            At P3D, we believe that 3D technology opens endless possibilities
            for creativity and innovation. Our team is dedicated to pushing the
            boundaries of what&apos;s possible, ensuring every product we offer
            meets the highest standards of quality and design.
          </p>
          <div className="bg-[#0db4b9]/5 border-l-4 border-[#0db4b9] p-6 rounded-r-xl">
            <p className="text-xl font-semibold text-[#1d1145] italic">
              &quot;We&apos;re committed to making your vision a reality, one
              layer at a time.&quot;
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-3xl shadow-xl shadow-[#1d1145]/10 p-10 border border-[#f2a1a1]/30">
          <h2 className="text-3xl font-bold mb-4 text-[#1d1145]">Join Our Journey</h2>
          <p className="text-lg mb-6 text-[#1d1145]/70">
            Experience the future of 3D design and manufacturing with P3D
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#e76d89] to-[#0db4b9] hover:from-[#e76d89]/90 hover:to-[#0db4b9]/90 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#e76d89]/30 hover:shadow-xl hover:shadow-[#e76d89]/40"
          >
            Explore Our Products
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;

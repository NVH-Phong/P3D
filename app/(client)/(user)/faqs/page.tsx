import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/Container";
import { faqsData } from "@/constants";

const FAQPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#1d1145] to-[#1d1145]/95 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/60">
              Find answers to common questions about our services
            </p>
          </div>

          {/* FAQ Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 border border-white/10">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
              defaultValue="item-0"
            >
              {faqsData.map((faq, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="border border-white/10 rounded-lg bg-white/5 px-6 py-2 hover:bg-white/10 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[#0db4b9] hover:no-underline transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/75 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQPage;

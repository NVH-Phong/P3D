import { Clock, CreditCard, Mail, Phone, Truck } from "lucide-react";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
const data: Props[] = [
  {
    title: "Secure Payment",
    subtitle: "Secure SSL Encrypted",
    icon: (
      <CreditCard className="text-deepPurple group-hover:text-trapperGreen transition-all duration-300 group-hover:scale-110" />
    ),
  },
  {
    title: "Free Shipping",
    subtitle: "When you spend $250+",
    icon: (
      <Truck className="text-deepPurple group-hover:text-trapperGreen transition-all duration-300 group-hover:scale-110" />
    ),
  },
  {
    title: "Give Us A Call",
    subtitle: "+61 422261459",
    icon: (
      <Phone className="text-deepPurple group-hover:text-trapperGreen transition-all duration-300 group-hover:scale-110" />
    ),
  },
  {
    title: "24/7 Email Assistance",
    subtitle: "hphong1132@gmail.com",
    icon: (
      <Clock className="text-deepPurple group-hover:text-trapperGreen transition-all duration-300 group-hover:scale-110" />
    ),
  },
];
const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-border/30 pb-8">
      {data.map((item, index) => (
        <ContactItem
          key={index}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
};

const ContactItem = ({ icon, title, subtitle }: Props) => {
  return (
    <div className="flex items-center gap-3 group hover:bg-gradient-to-r hover:from-trapperGreen/10 hover:to-modernPink/10 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
      {icon}
      <div>
        <h3 className="font-semibold text-foreground group-hover:text-trapperGreen transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1 group-hover:text-foreground transition-colors">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
export default FooterTop;

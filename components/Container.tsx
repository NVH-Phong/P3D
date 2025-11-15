import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  //console.log(children);
  return (
    <div
      //className="max-w-screen-x1"
      className={cn("max-w-screen-x1 mx-auto px-10 ", className)}
      //className="max-w-screen-x1 mx-auto px-4 bg-blue-500"
    >
      {children}
    </div>
  );
};

export default Container;

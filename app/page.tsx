import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Image from "next/image";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <div>
      <Container>
        <HomeBanner />
      </Container>
    </div>
  );
}

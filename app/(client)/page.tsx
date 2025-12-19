import { Button } from '@/components/ui/button';
import Container from '@/components/Container';
import Image from 'next/image';
import HomeBanner from '@/components/HomeBanner';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}

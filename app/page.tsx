import Hero from '@/components/Home/Hero/index';
import WhatToExpect from '@/components/Home/WhatToExpect';
import FeaturesSection from '@/components/Home/Features';
import Blogs from '@/components/Home/Blogs';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhatToExpect />
      <FeaturesSection />
      <Blogs/>
    </div>
  );
}

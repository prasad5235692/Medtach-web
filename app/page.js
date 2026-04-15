import HeroSection from "@/sections/HeroSection";
import CoursesSection from "@/sections/CoursesSection";
import WhyUsSection from "@/sections/WhyUsSection";
import StatsSection from "@/sections/StatsSection";
import ClientLogosSlider from "@/components/ClientLogosSlider";
import TestimonialsSection from "@/sections/TestimonialsSection";
import BlogSection from "@/sections/BlogSection";
import CTASection from "@/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <WhyUsSection />
      <StatsSection />
      <ClientLogosSlider />
      <TestimonialsSection />
       <CTASection />
      <BlogSection />
    </>
  );
}

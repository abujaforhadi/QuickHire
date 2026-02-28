import CategorySection from "@/components/CategorySection";
import CompaniesSection from "@/components/CompaniesSection";
import HeroSection from "@/components/HeroSection";
import PostingSection from "@/components/PostingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesSection/>
      <CategorySection/>
      <PostingSection/>
    </>
  );
}

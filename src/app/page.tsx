import { CommunitySection } from '@/components/community-section'
import { ContentSection } from '@/components/content-section'
import { CTASection } from '@/components/cta-section'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </main>
  )
}

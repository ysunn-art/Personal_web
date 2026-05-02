import { IndustrialHero } from '@/components/industrial/IndustrialHero'
import { IndustrialGallery } from '@/components/industrial/IndustrialGallery'

export default function IndustrialPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto">
      <IndustrialHero />
      <IndustrialGallery />
    </main>
  )
}

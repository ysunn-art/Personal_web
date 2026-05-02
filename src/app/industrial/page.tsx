import { RoboticHero } from '@/components/industrial/RoboticHero'
import { RoboticGallery } from '@/components/industrial/RoboticGallery'

export default function RoboticPage() {
  return (
    <main className="min-h-screen pt-32 pb-32 px-8 max-w-6xl mx-auto">
      <RoboticHero />
      <RoboticGallery />
    </main>
  )
}

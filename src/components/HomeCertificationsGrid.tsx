import { RevealItem, RevealStagger, RevealStaggerItem } from '@/components/SectionReveal'
import { siteImages } from '@/lib/siteImages'

export function HomeCertificationsGrid() {
  const certificates = siteImages.home.certificates

  return (
    <>
      <RevealItem>
        <div id="certifications" className="mt-[48px]">
          <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">Certifications</h3>
          <p className="mt-[12px] max-w-2xl text-base leading-relaxed text-ink-600">
            Industry-recognized credentials across security, cloud, and engineering practices—so your programs meet the
            bar from day one.
          </p>
        </div>
      </RevealItem>
      <RevealStagger className="mt-[32px] grid grid-cols-2 gap-[24px] sm:grid-cols-3 lg:grid-cols-5 lg:gap-[32px]">
        {certificates.map((src, index) => (
          <RevealStaggerItem key={src}>
            <figure className="group flex h-full min-h-[200px] items-center justify-center border-0 bg-transparent p-0 sm:min-h-[240px]">
              <img
                src={src}
                alt={`MoonSofts certification badge ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="max-h-[160px] w-full object-contain transition duration-300 group-hover:scale-[1.04] sm:max-h-[192px]"
              />
            </figure>
          </RevealStaggerItem>
        ))}
      </RevealStagger>
    </>
  )
}

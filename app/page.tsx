'use client'

import { useEffect } from 'react'

const offerings = ['Shops', 'Studios', 'Trades', 'Clinics', 'Kitchens']

function Butterfly({ className }: { className: string }) {
  return (
    <svg className={`butterfly ${className}`} viewBox="0 0 60 48" aria-hidden="true">
      <path className="butterfly-wing butterfly-wing-top" d="M29 22C20 4 4 3 7 17c2 8 11 10 22 11Z" />
      <path className="butterfly-wing butterfly-wing-bottom" d="M28 25C17 23 8 28 13 36c4 7 12 5 18-5Z" />
      <path className="butterfly-wing butterfly-wing-top" d="M31 22C40 4 56 3 53 17c-2 8-11 10-22 11Z" />
      <path className="butterfly-wing butterfly-wing-bottom" d="M32 25c11-2 20 3 15 11-4 7-12 5-18-5Z" />
      <path className="butterfly-body" d="M30 17c-2 7-2 15 0 22m0-22c-2-5-5-7-8-8m8 8c2-5 5-7 8-8" />
    </svg>
  )
}

function SunAndClouds() {
  return (
    <svg className="sky-illustration" viewBox="0 0 360 200" aria-hidden="true">
      <g className="sun" transform="translate(258 68)">
        <g className="sun-rays">
          <path d="M0-58v18M0 40v18M-58 0h18M40 0h18M-41-41l13 13m56 56 13 13m0-82L28-28m-56 56-13 13" />
          <path d="M-22-54l7 17m30 74 7 17M-54-22l17 7m74 30 17 7M-53 22l17-7m74-30 17-7M-22 54l7-17m30-74 7-17" />
        </g>
        <circle className="sun-disc" r="31" />
      </g>
      <g className="cloud cloud-one" transform="translate(36 95)">
        <path d="M0 22c0-10 8-17 18-17 5-13 24-14 31-1 13-2 22 6 22 17 0 9-7 15-17 15H18C7 36 0 31 0 22Z" />
      </g>
      <g className="cloud cloud-two" transform="translate(157 150) scale(.68)">
        <path d="M0 22c0-10 8-17 18-17 5-13 24-14 31-1 13-2 22 6 22 17 0 9-7 15-17 15H18C7 36 0 31 0 22Z" />
      </g>
    </svg>
  )
}

function Vine({ side }: { side: 'left' | 'right' }) {
  return (
    <svg className={`vine-art vine-${side}`} viewBox="0 0 150 520" preserveAspectRatio="none" aria-hidden="true">
      <path className="vine-line" d={side === 'left' ? 'M18 520C70 455 14 395 54 326S20 224 62 164 39 71 85 0' : 'M132 520C82 462 137 400 96 332s36-103-8-166 23-94-23-166'} />
      <path className="vine-line vine-branch" d={side === 'left' ? 'M42 425c-35-8-40-34-36-57m50-66c35-4 45-28 39-54m-8-81c-30-2-42-24-36-47' : 'M106 420c35-7 43-33 38-56m-50-62c-34-5-42-30-36-55m7-82c31-3 40-26 33-49'} />
      <path className="leaf leaf-one" d="M34 365c-24-1-31-15-28-29 21-1 34 9 28 29Zm67-117c24-2 32-16 27-30-22 0-35 11-27 30Zm-42-142c-23-2-31-15-27-30 21 0 35 10 27 30Z" />
      <path className="leaf leaf-two" d="M55 282c-21 5-32-5-32-20 20-7 36 0 32 20Zm34-168c22 3 31-9 29-24-21-5-36 3-29 24Zm-44 318c22 4 32-8 29-23-21-5-36 2-29 23Z" />
      <g className="blossom" transform="translate(44 390)">
        <path className="petals" d="M0-11c-8-9-18-3-12 5-11 5-5 16 4 12 1 12 14 11 14 1 10 6 17-6 7-12 6-10-5-17-12-6Z" />
        <circle className="flower-center" r="4" />
      </g>
      <g className="blossom blossom-small" transform="translate(80 180)">
        <path className="petals" d="M0-9c-7-8-15-3-10 4-9 4-4 13 4 10 1 10 12 9 12 1 8 5 14-5 6-10 5-8-4-14-10-5Z" />
        <circle className="flower-center" r="3" />
      </g>
      <g className="blossom blossom-small" transform="translate(34 72)">
        <path className="petals" d="M0-9c-7-8-15-3-10 4-9 4-4 13 4 10 1 10 12 9 12 1 8 5 14-5 6-10 5-8-4-14-10-5Z" />
        <circle className="flower-center" r="3" />
      </g>
    </svg>
  )
}

function Meadow() {
  return (
    <svg className="meadow" viewBox="0 0 1200 190" preserveAspectRatio="none" aria-hidden="true">
      <path className="meadow-hill" d="M0 105c154-35 223 19 374-1 139-19 223-62 371-32 186 38 282-9 455-35v153H0Z" />
      <g className="grass-stems" fill="none" strokeLinecap="round">
        <path d="M9 190q4-38 20-64m5 64q-1-27-14-43m34 43q8-48 27-73m0 73q1-35-11-52m76 52q-1-49 14-75m5 75q10-34 25-49m45 49q1-37 17-60m12 60q8-26 23-38m63 38q0-49 17-74m5 74q12-30 27-46m75 46q5-40 22-62m4 62q9-30 24-41m81 41q-1-49 18-77m4 77q12-33 26-47m78 47q0-40 18-65m8 65q12-25 25-36m65 36q2-52 22-77m1 77q10-33 26-46m70 46q-1-37 16-60m10 60q12-27 25-39m86 39q2-44 21-69m5 69q10-31 24-42m79 42q-2-48 17-74m5 74q10-33 25-48m71 48q1-36 15-58m10 58q9-27 21-38" />
      </g>
      <g className="meadow-flowers">
        <g transform="translate(155 127)"><path d="M0 0v39" /><circle cx="0" cy="0" r="5" /><circle cx="-7" cy="-3" r="4" /><circle cx="7" cy="-3" r="4" /><circle cx="0" cy="-8" r="4" /></g>
        <g transform="translate(374 111)"><path d="M0 0v47" /><circle cx="0" cy="0" r="5" /><circle cx="-7" cy="-3" r="4" /><circle cx="7" cy="-3" r="4" /><circle cx="0" cy="-8" r="4" /></g>
        <g transform="translate(628 126)"><path d="M0 0v40" /><circle cx="0" cy="0" r="5" /><circle cx="-7" cy="-3" r="4" /><circle cx="7" cy="-3" r="4" /><circle cx="0" cy="-8" r="4" /></g>
        <g transform="translate(864 105)"><path d="M0 0v48" /><circle cx="0" cy="0" r="5" /><circle cx="-7" cy="-3" r="4" /><circle cx="7" cy="-3" r="4" /><circle cx="0" cy="-8" r="4" /></g>
        <g transform="translate(1064 127)"><path d="M0 0v38" /><circle cx="0" cy="0" r="5" /><circle cx="-7" cy="-3" r="4" /><circle cx="7" cy="-3" r="4" /><circle cx="0" cy="-8" r="4" /></g>
      </g>
    </svg>
  )
}

export default function Page() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>('.garden-page')
    if (!page) return

    page.classList.add('motion-ready')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -4% 0px' },
    )

    page.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))

    const finePointer = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
    const followPointer = (event: PointerEvent) => {
      page.style.setProperty('--pointer-x', `${event.clientX}px`)
      page.style.setProperty('--pointer-y', `${event.clientY}px`)
    }

    if (finePointer.matches) window.addEventListener('pointermove', followPointer, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('pointermove', followPointer)
    }
  }, [])

  return (
    <main className="garden-page">
      <div className="garden-content">
        <header className="card-header scroll-reveal" data-reveal>
          <a className="wordmark" href="#top" aria-label="Yasmeen Hasan, home">
            YH<span className="wordmark-period">.</span>
          </a>
          <p className="header-note">Websites for small businesses</p>
        </header>

        <section className="hero scroll-reveal" id="top" aria-labelledby="name-heading" data-reveal>
          <SunAndClouds />
          <Vine side="left" />
          <Vine side="right" />
          <Butterfly className="butterfly-pink butterfly-drift-one" />
          <Butterfly className="butterfly-blue butterfly-drift-two" />
          <Butterfly className="butterfly-lavender butterfly-drift-three" />
          <div className="hero-copy">
            <p className="eyebrow">A personal calling card</p>
            <h1 id="name-heading">Yasmeen<br />Hasan<span className="heading-period">.</span></h1>
            <p className="intro">I design and build websites for small businesses.</p>
            <p className="github-note">Now on GitHub</p>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <span className="mark-letter">Y</span>
            <span className="mark-rule" />
            <span className="mark-caption">Websites for people who built something worth showing</span>
          </div>
          <Meadow />
        </section>

        <section className="details scroll-reveal" aria-label="How I work" data-reveal>
          <Vine side="left" />
          <Vine side="right" />
          <div className="audience-block">
            <p className="section-label">For the places we know</p>
            <ul className="offerings" aria-label="Business types">
              {offerings.map((offering) => <li key={offering}>{offering}</li>)}
            </ul>
          </div>
          <div className="approach-block">
            <p className="section-label">A practical approach</p>
            <p className="approach-copy">
              I start with what the place actually sells: menus, hours, address and how to order come first, and decoration comes after the useful part works. I build pages that load fast on a phone and hand over something the owner can run themselves.
            </p>
          </div>
        </section>

        <footer className="card-footer scroll-reveal" data-reveal>
          <div>
            <p className="section-label">Get in touch</p>
            <a className="email-link" href="mailto:yas.logo3@gmail.com">
              yas.logo3@gmail.com
            </a>
          </div>
        </footer>
      </div>
      <Butterfly className="butterfly-cursor butterfly-blue" />
    </main>
  )
}

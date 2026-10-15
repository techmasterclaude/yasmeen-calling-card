'use client'

import { useEffect, useRef } from 'react'

function Butterfly({ className, color }: { className: string; color: string }) {
  return (
    <svg className={`butterfly ${className}`} viewBox="0 0 64 52" fill="none" focusable="false">
      <g className="butterfly-wings">
        <path d="M31 25C24 5 5 4 7 20c1 9 12 12 24 10Z" fill={color} stroke="#332A46" strokeOpacity=".28" strokeWidth="1.5" />
        <path d="M33 25C40 5 59 4 57 20c-1 9-12 12-24 10Z" fill={color} stroke="#332A46" strokeOpacity=".28" strokeWidth="1.5" />
        <path d="M31 29C20 22 15 34 24 40c4 3 7-1 8-8Z" fill={color} fillOpacity=".76" stroke="#332A46" strokeOpacity=".24" strokeWidth="1.2" />
        <path d="M33 29c11-7 16 5 7 11-4 3-7-1-8-8Z" fill={color} fillOpacity=".76" stroke="#332A46" strokeOpacity=".24" strokeWidth="1.2" />
      </g>
      <path d="M32 24v14m0-13c-2-5-5-6-7-6m7 6c2-5 5-6 7-6" stroke="#332A46" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="32" cy="25" r="2.2" fill="#332A46" />
    </svg>
  )
}

function VineFlowers() {
  return (
    <g className="vine-blossoms">
      <g className="vine-flower" transform="translate(75 202)">
        <circle className="petal" cy="-8" r="5" /><circle className="petal" cx="7" cy="-3" r="5" /><circle className="petal" cx="4" cy="6" r="5" /><circle className="petal" cx="-5" cy="6" r="5" /><circle className="petal" cx="-8" cy="-3" r="5" /><circle className="flower-center" r="3" />
      </g>
      <g className="vine-flower vine-flower-lavender" transform="translate(116 495)">
        <circle className="petal" cy="-8" r="5" /><circle className="petal" cx="7" cy="-3" r="5" /><circle className="petal" cx="4" cy="6" r="5" /><circle className="petal" cx="-5" cy="6" r="5" /><circle className="petal" cx="-8" cy="-3" r="5" /><circle className="flower-center" r="3" />
      </g>
      <g className="vine-flower" transform="translate(47 764)">
        <circle className="petal" cy="-8" r="5" /><circle className="petal" cx="7" cy="-3" r="5" /><circle className="petal" cx="4" cy="6" r="5" /><circle className="petal" cx="-5" cy="6" r="5" /><circle className="petal" cx="-8" cy="-3" r="5" /><circle className="flower-center" r="3" />
      </g>
    </g>
  )
}

export function GardenIllustrations() {
  const followerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const followPointer = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !window.matchMedia('(min-width: 760px) and (hover: hover) and (pointer: fine)').matches) return
      const butterfly = followerRef.current
      if (!butterfly) return
      butterfly.style.left = `${event.clientX}px`
      butterfly.style.top = `${event.clientY}px`
    }

    window.addEventListener('pointermove', followPointer, { passive: true })
    return () => window.removeEventListener('pointermove', followPointer)
  }, [])

  return (
    <div className="garden-illustrations" aria-hidden="true">
      <svg className="garden-sun" viewBox="0 0 200 200" focusable="false">
        <g className="sun-rays" stroke="#D3A963" strokeWidth="3" strokeLinecap="round">
          <path d="M100 9v20m0 142v20M9 100h20m142 0h20M35.6 35.6l14.2 14.2m100.4 100.4 14.2 14.2m0-128.8-14.2 14.2M50 150 35.6 164.4" />
          <path d="m66 15 6 16m56 138 6 16M15 66l16 6m138 56 16 6m-52-119-6 16m-56 138-6 16m83-134-16 6m-138 56-16 6" />
        </g>
        <circle cx="100" cy="100" r="51" fill="#F5DFA4" stroke="#D3A963" strokeWidth="2" />
        <circle cx="100" cy="100" r="39" fill="#FFFBF4" fillOpacity=".24" />
      </svg>

      <svg className="garden-cloud garden-cloud-one" viewBox="0 0 170 72" focusable="false">
        <path d="M20 57h123c14 0 20-21 4-27-4-2-9-2-13 0C132 11 111 7 98 20 82 5 56 13 54 33c-4-2-8-3-12-2C23 19 8 30 10 44c1 7 5 11 10 13Z" fill="#FFFEFA" stroke="#D9D1D5" strokeWidth="2" />
      </svg>
      <svg className="garden-cloud garden-cloud-two" viewBox="0 0 170 72" focusable="false">
        <path d="M20 57h123c14 0 20-21 4-27-4-2-9-2-13 0C132 11 111 7 98 20 82 5 56 13 54 33c-4-2-8-3-12-2C23 19 8 30 10 44c1 7 5 11 10 13Z" fill="#FFFEFA" stroke="#D9D1D5" strokeWidth="2" />
      </svg>

      <svg className="garden-vine garden-vine-left" viewBox="0 0 200 1000" preserveAspectRatio="none" focusable="false">
        <path className="vine-stem" pathLength="1" d="M25-20C111 79 76 142 126 236S44 360 76 470s83 143 33 242 20 187 47 308" />
        <path className="vine-leaf" d="M75 100C38 88 25 62 29 43c28 3 48 22 46 57Zm39 117c30-33 61-34 80-23-12 27-38 39-74 31Zm-38 139c-32-28-64-27-81-13 14 25 41 34 75 21Zm37 127c26-35 57-41 78-32-9 29-33 44-70 43Zm-13 145c-35-24-66-19-82-3 17 23 45 28 77 12Zm18 150c28-34 58-37 79-25-11 28-37 40-73 36Z" />
        <VineFlowers />
      </svg>
      <svg className="garden-vine garden-vine-right" viewBox="0 0 200 1000" preserveAspectRatio="none" focusable="false">
        <path className="vine-stem" pathLength="1" d="M174-20C82 65 128 154 70 238s58 139 18 252-72 151-19 244-21 183-52 312" />
        <path className="vine-leaf" d="M126 94c33-27 64-24 81-9-16 24-43 32-77 17Zm-46 140c-28-35-58-38-79-26 12 28 37 40 73 36Zm45 127c34-27 65-22 81-6-16 23-44 31-76 14Zm-30 142c-25-36-55-42-77-33 9 29 34 44 70 43Zm15 145c35-23 66-16 81 1-18 21-46 26-78 9Zm-39 154c-28-34-59-36-79-24 12 27 37 39 73 34Z" />
        <g className="vine-blossoms">
          <g className="vine-flower vine-flower-lavender" transform="translate(105 195)"><circle className="petal" cy="-8" r="5" /><circle className="petal" cx="7" cy="-3" r="5" /><circle className="petal" cx="4" cy="6" r="5" /><circle className="petal" cx="-5" cy="6" r="5" /><circle className="petal" cx="-8" cy="-3" r="5" /><circle className="flower-center" r="3" /></g>
          <g className="vine-flower" transform="translate(43 490)"><circle className="petal" cy="-8" r="5" /><circle className="petal" cx="7" cy="-3" r="5" /><circle className="petal" cx="4" cy="6" r="5" /><circle className="petal" cx="-5" cy="6" r="5" /><circle className="petal" cx="-8" cy="-3" r="5" /><circle className="flower-center" r="3" /></g>
          <g className="vine-flower vine-flower-lavender" transform="translate(137 776)"><circle className="petal" cy="-8" r="5" /><circle className="petal" cx="7" cy="-3" r="5" /><circle className="petal" cx="4" cy="6" r="5" /><circle className="petal" cx="-5" cy="6" r="5" /><circle className="petal" cx="-8" cy="-3" r="5" /><circle className="flower-center" r="3" /></g>
        </g>
      </svg>

      <Butterfly className="butterfly-one" color="#F9C0D0" />
      <Butterfly className="butterfly-two" color="#AEDAEE" />
      <Butterfly className="butterfly-three" color="#C8B9E8" />
      <Butterfly className="butterfly-follow" color="#F9C0D0" />
      <svg ref={followerRef} className="butterfly butterfly-cursor" viewBox="0 0 64 52" fill="none" focusable="false">
        <g className="butterfly-wings">
          <path d="M31 25C24 5 5 4 7 20c1 9 12 12 24 10Z" fill="#F9C0D0" stroke="#332A46" strokeOpacity=".28" strokeWidth="1.5" />
          <path d="M33 25C40 5 59 4 57 20c-1 9-12 12-24 10Z" fill="#F9C0D0" stroke="#332A46" strokeOpacity=".28" strokeWidth="1.5" />
          <path d="M31 29C20 22 15 34 24 40c4 3 7-1 8-8Z" fill="#F9C0D0" fillOpacity=".76" stroke="#332A46" strokeOpacity=".24" strokeWidth="1.2" />
          <path d="M33 29c11-7 16 5 7 11-4 3-7-1-8-8Z" fill="#F9C0D0" fillOpacity=".76" stroke="#332A46" strokeOpacity=".24" strokeWidth="1.2" />
        </g>
        <path d="M32 24v14m0-13c-2-5-5-6-7-6m7 6c2-5 5-6 7-6" stroke="#332A46" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="32" cy="25" r="2.2" fill="#332A46" />
      </svg>
    </div>
  )
}

export function MeadowIllustration() {
  return (
    <svg className="meadow-illustration" viewBox="0 0 1200 180" preserveAspectRatio="none" focusable="false" aria-hidden="true">
      <path className="meadow-horizon" d="M0 136c145-44 245 4 375-8s222-51 359-23 285 12 466-19v94H0Z" />
      <g className="meadow-grass meadow-grass-one">
        <path d="M0 180c35-39 20-62 53-94-5 38 1 65-19 94Zm83 0c9-48 37-60 42-103 13 40 3 69-15 103Zm112 0c22-39 16-66 46-102-3 44 5 65-13 102Zm130 0c2-46 31-67 26-108 22 38 20 68 2 108Zm129 0c28-43 15-68 45-98-4 41 3 67-16 98Zm153 0c6-49 39-60 38-104 19 39 11 71-8 104Zm132 0c30-42 18-67 49-96-6 42-1 66-20 96Zm145 0c3-45 35-64 30-105 21 38 18 69 0 105Zm132 0c24-40 15-64 44-92-4 39 0 62-17 92Z" />
      </g>
      <g className="meadow-flower meadow-flower-one" transform="translate(165 98)"><path className="flower-stem" d="M0 12v43" /><circle className="meadow-petal" cy="7" r="5" /><circle className="meadow-petal" cx="7" cy="12" r="5" /><circle className="meadow-petal" cy="17" r="5" /><circle className="meadow-petal" cx="-7" cy="12" r="5" /><circle className="meadow-center" r="3" /></g>
      <g className="meadow-flower meadow-flower-two" transform="translate(534 111)"><path className="flower-stem" d="M0 12v35" /><circle className="meadow-petal meadow-petal-blue" cy="7" r="4.5" /><circle className="meadow-petal meadow-petal-blue" cx="7" cy="12" r="4.5" /><circle className="meadow-petal meadow-petal-blue" cy="17" r="4.5" /><circle className="meadow-petal meadow-petal-blue" cx="-7" cy="12" r="4.5" /><circle className="meadow-center" r="2.7" /></g>
      <g className="meadow-flower meadow-flower-three" transform="translate(968 83)"><path className="flower-stem" d="M0 12v52" /><circle className="meadow-petal" cy="7" r="5" /><circle className="meadow-petal" cx="7" cy="12" r="5" /><circle className="meadow-petal" cy="17" r="5" /><circle className="meadow-petal" cx="-7" cy="12" r="5" /><circle className="meadow-center" r="3" /></g>
    </svg>
  )
}

export function ButterflyMark() {
  return <Butterfly className="butterfly-mark" color="#F9C0D0" />
}

export function GardenDivider() {
  return (
    <svg className="garden-divider" viewBox="0 0 220 36" focusable="false" aria-hidden="true">
      <path d="M5 18c48 0 57-13 85-13 15 0 24 7 20 14-5 8-16 3-14-3 4-13 36-11 52-3 19 9 36 8 67 5" fill="none" stroke="#82936D" strokeWidth="2" strokeLinecap="round" />
      <path d="M53 12c-11-10-22-6-24 1 11 7 19 6 24-1Zm77 10c10-12 20-12 26-7-7 11-16 13-26 7Z" fill="#A6B788" />
      <circle cx="112" cy="14" r="3.5" fill="#F9C0D0" />
    </svg>
  )
}

export function ContactFlower() {
  return (
    <svg className="contact-flower" viewBox="0 0 54 54" focusable="false" aria-hidden="true">
      <path d="M27 27c-8-17-20-11-14-2-14 4-8 16 1 12-2 14 12 13 13 2 9 11 19 2 11-5 12-9 3-18-6-12 2-14-10-16-5 5Z" fill="#F9C0D0" />
      <circle cx="27" cy="27" r="5" fill="#D3A963" />
    </svg>
  )
}

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedTitleProps {
  /** The full title string, e.g. "活動緣起" */
  text: string
  /**
   * Characters that should render in the accent color.
   * Pass the highlight substring, e.g. "緣起"
   */
  highlight?: string
  /** Extra Tailwind classes on the wrapping element */
  className?: string
  /** Tag to render — defaults to h2 */
  as?: 'h1' | 'h2' | 'h3'
  /** Color for highlighted chars — defaults to text-primary */
  highlightClass?: string
}

/**
 * AnimatedTitle
 *
 * Apple-style character-by-character reveal animation.
 * Each character slides up from below + fades + unblurs
 * when the element enters the viewport, triggered via GSAP ScrollTrigger.
 */
export default function AnimatedTitle({
  text,
  highlight,
  className = '',
  as: Tag = 'h2',
  highlightClass = 'text-primary',
}: AnimatedTitleProps) {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const chars = el.querySelectorAll<HTMLSpanElement>('.char')
    if (!chars.length) return

    // Kill any previous instances on this element
    ScrollTrigger.getAll()
      .filter((st) => st.vars.id === `animated-title-${el.id}`)
      .forEach((st) => st.kill())

    const tl = gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: '70%',
        filter: 'blur(8px)',
      },
      {
        opacity: 1,
        y: '0%',
        filter: 'blur(0px)',
        duration: 0.55,
        ease: 'power3.out',
        stagger: 0.045,
        scrollTrigger: {
          id: `animated-title-${el.id}`,
          trigger: el,
          start: 'top 82%',
          once: true,
        },
      }
    )

    return () => {
      tl.kill()
    }
  }, [text, highlight])

  // Give each element a stable id for ScrollTrigger
  const elId = `at-${text.replace(/\s/g, '-')}`

  // Split into per-character spans
  const chars = text.split('')

  // Find highlight start index
  const hlStart = highlight ? text.indexOf(highlight) : -1
  const hlEnd   = hlStart >= 0 ? hlStart + highlight!.length : -1

  return (
    <Tag
      id={elId}
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`inline-block ${className}`}
    >
      {chars.map((ch, i) => {
        const isHighlight = hlStart >= 0 && i >= hlStart && i < hlEnd
        const isSpace = ch === ' '
        return (
          <span
            key={i}
            className="char-wrap"
            aria-hidden={isSpace ? 'true' : undefined}
          >
            <span
              className={`char ${isHighlight ? highlightClass : ''} ${isSpace ? 'mx-1' : ''}`}
            >
              {isSpace ? '\u00A0' : ch}
            </span>
          </span>
        )
      })}
    </Tag>
  )
}

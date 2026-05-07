import { useEffect, useRef } from 'react'

/**
 * Apple-style scroll animation hook using IntersectionObserver.
 * Adds/removes 'is-visible' class on elements with scroll-anim, scroll-scale, etc.
 */
export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // For score bars, also trigger children
            entry.target.querySelectorAll('.score-bar-fill').forEach((bar) => {
              bar.classList.add('is-visible')
            })
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    // Observe all animated elements
    const targets = document.querySelectorAll(
      '.scroll-anim, .scroll-scale, .scroll-anim-left, .scroll-anim-right'
    )
    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/**
 * Returns a ref to attach to a container — triggers scroll-anim
 * on direct children with stagger delays.
 */
export function useStaggerAnimation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.scroll-anim')
            children.forEach((child, i) => {
              setTimeout(() => {
                child.classList.add('is-visible')
              }, i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return ref
}

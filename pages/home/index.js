import { useEffect } from 'react'
import SearchBar from '@components/SearchBar'
import { FindArtist } from '@hoc/FindArtist'
import { Container } from '@nextui-org/react'
import confetti from 'canvas-confetti'

export default function Home () {
  function randomInRange (min, max) {
    return Math.random() * (max - min) + min
  }

  function handleConfetti () {
    const duration = 15 * 10000
    const animationEnd = Date.now() + duration
    let skew = 1
    const timeLeft = animationEnd - Date.now()
    const ticks = Math.max(200, 500 * (timeLeft / duration))
    skew = Math.max(0.8, skew - 0.001)
    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: (Math.random() * skew) - 0.2
      },
      colors: ['#9750DD'],
      shapes: ['circle'],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4)
    })
    if (timeLeft > 0) {
      requestAnimationFrame(handleConfetti)
    }
  }

  useEffect(() => {
    handleConfetti()
  }, [])
  return (
    <Container display='flex' justify='center' direction='column' alignItems='center' css={{
      marginTop: '3rem'
    }}>
      <SearchBar />
      <FindArtist />
    </Container>
  )
}

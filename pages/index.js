import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Grid, Text, Button, Spacer } from '@nextui-org/react'
import Head from 'next/head'
import styles from '../styles/Index.module.css'
import confetti from 'canvas-confetti'

// const query = gql`
//   query {
//     queryArtists(byName: "drake") {
//       name
//       albums(limit: 1) {
//         name
//         image
//         tracks {
//           name
//         }
//       }
//     }
//   }
// `;

export default function Home () {
  // const result = useQuery(query);
  const [isMobile, setIsMobile] = useState(true)

  const mobile = (agent) => {
    const AGENT = agent.toLowerCase()
    const REGEXP = /android|webos|iphone|ipod|ipad|blackberry/
    return REGEXP.test(AGENT)
  }
  useEffect(() => {
    const agent = navigator.userAgent
    console.log(agent, 'agent')
    setIsMobile(mobile(agent))
  }, [isMobile])

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 180

    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify searcher</title>
        <meta name="description" content="Spotify searcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid.Container gap={2} justify="center">
          <Grid xs="4" md="8">
            <Text
              h1
              size={isMobile ? 80 : 130}
              css={{
                textAlign: 'center',
                letterSpacing: '-.06rem',
                margin: '0 0 16px'
              }}
            >
              <span
                className={`${styles.span} ${styles._spotify}`}
                defaultValue="Spotify"
              >
                Spotify
              </span>
              <span className={`${styles.span} ${styles._artist}`}>Artist</span>
              <span className={`${styles.span} ${styles._searcher}`}>
                Searcher
              </span>
              <Spacer/>
              <Link href='/home'>

              <Button
                auto
                rounded
                ripple={false}
                size="xl"
                onClick={handleConfetti}
                css={{
                  background: '#2fe6af',
                  fontWeight: '$semibold',
                  boxShadow: '$md',
                  position: 'relative',
                  overflow: 'visible',
                  color: '#2fe6af',
                  px: '$18',
                  margin: '0 auto',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: '$white',
                    opacity: 1,
                    borderRadius: '$pill',
                    transition: 'all 0.4s ease'
                  },
                  '&:hover': {
                    color: '$white',
                    transform: 'translateY(-5px)',
                    '&:after': {
                      transform: 'scaleX(1.5) scaleY(1.6)',
                      opacity: 0
                    }
                  },
                  '&:active': {
                    transform: 'translateY(-2px)'
                  }
                }}
                >
                  Click me
                </Button>
                </Link>

            </Text>

          </Grid>

        </Grid.Container>
      </main>
    </div>
  )
}

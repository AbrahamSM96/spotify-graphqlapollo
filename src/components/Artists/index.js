/* eslint-disable react/prop-types */
import Cards from '@components/Cards'
import { Grid } from '@nextui-org/react'

export default function Artists (props) {
  const { artist } = props
  const { albums = [], name } = artist
  const fiveElements = albums.slice(0, 7)

  return (
    <>
      <h2>{name}</h2>
      <Grid.Container gap={2} justify="center">
        {fiveElements.map((album, index) => (
          <Grid xs={12} sm={4} md={4} key={`${index}-${album.name}`}>
            <Cards {...album} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}

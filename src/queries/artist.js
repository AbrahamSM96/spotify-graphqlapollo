import { gql, useQuery } from '@apollo/client'

export const QUERY_GET_ARTIST = gql`
  query getArtistByName($nameToSearch: String!) {
    queryArtists(byName: $nameToSearch) {
      name
      image
      albums(limit: 1) {
        name
        image
        tracks {
          name
        }
      }
    }
  }
`

export function useQueryArtist (options) {
  return useQuery(QUERY_GET_ARTIST, options)
}

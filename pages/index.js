import { Button, Text } from "@nextui-org/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";
import SearchBar from "../src/components/SearchBar";
import { FindArtist } from "@hoc/FindArtist";

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

export default function Home() {
  // const result = useQuery(query);
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify searcher</title>
        <meta name="description" content="Spotify searcher" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SearchBar />
        <FindArtist />
      </main>
    </div>
  );
}

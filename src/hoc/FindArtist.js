import Artists from "@components/Artists";
import { Loading, Spacer } from "@nextui-org/react";
import { useQueryArtist } from "@queries/artist";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const FindArtist = () => {
  const [artist, setArtist] = useState(null);

  let valueSearch = useSelector((state) => {
    const {
      search: { payload },
    } = state;
    return payload;
  });

  const { loading, error, data } = useQueryArtist({
    variables: { nameToSearch: valueSearch },
  });

  useEffect(() => {
    if (data) {
      setArtist(data.queryArtists[0]);
    }
  }, [data]);

  if (artist === null) return null;

  if (loading)
    return (
      <>
        <Spacer />
        <Loading color="secondary" size="xl" type="gradient" />{" "}
      </>
    );

  if (artist) {
    return (
      <>
        <Artists artist={artist} />
      </>
    );
  }
};

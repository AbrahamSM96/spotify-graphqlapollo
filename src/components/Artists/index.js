import { Grid, Card, Col, Text } from "@nextui-org/react";

export default function Artists({ artist }) {
  const { albums = [] } = artist;

  return (
    <>
      <h2>{artist.name}</h2>
      <Grid.Container gap={2} justify="center">
          {albums.map((alb, index) => (
        <Grid xs={12} sm={4} md={4}  key={`${index}-${alb.name}`}>
            <Card>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                  >
                    Album
                  </Text>
                  <Text h4 color="white">
                    {alb.name}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Image
                src={alb.image}
                objectFit="cover"
                width="100%"
                height={340}
                alt={alb.name}
              />
            </Card>
        </Grid>
          ))}
      </Grid.Container>
    </>
  );
}

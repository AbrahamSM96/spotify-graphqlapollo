import { Card, Col, Text } from '@nextui-org/react'

export default function Cards (props) {
  // eslint-disable-next-line react/prop-types
  const { name = '', image = '' } = props
  return (
    <Card
      css={{
        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.1,1.1)',
          zIndex: 2,
          border: 'solid 2px #9750DD',
          boxShadow: ` 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #bc13fe,
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 1.3rem #bc13fe`
        }
      }}
    >
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            Album
          </Text>
          <Text h4 color="white">
            {name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Image
        src={image}
        objectFit="cover"
        width="100%"
        height={340}
        alt={name}
      />
    </Card>
  )
}

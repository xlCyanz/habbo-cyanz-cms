import React from "react";

import { NewsCard } from "@molecules";
import { Card, Container, Flex, Icon, Text, Grid } from "@atoms";

import { styles } from "./frontpage.styles";

const FrontPage = () => {
  const news = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.habbo.com/web_images/habbo-web-articles/lpromo_Room_wired.png",
      author: "xlCyanz",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.habbo.com/web_images/habbo-web-articles/lpromo_2020_habbo2020open.png",
      author: "xlCyanz",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.habbo.com/web_images/habbo-web-articles/lpromo_pridefestiv21.png",
      author: "xlCyanz",
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.habbo.com/web_images/habbo-web-articles/lpromo_march20_gen.png",
      author: "xlCyanz",
    },
  ];

  const renderCard = () =>
    news.map((news) => <NewsCard key={news.image} {...news} />);

  const icon = "./articles.png";

  return (
    <Container my={4}>
      <Flex sx={styles.newsTitleSection}>
        <Flex sx={styles.newsTitle}>
          <Card
            variant="newsTitle"
            sx={{
              backgroundImage: `url(${icon})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <Text variant="newsTitle" ml={3}>
            Portal de noticias
          </Text>
        </Flex>
        <Flex sx={styles.newsActions}>
          <Card variant="newsAction" mr={2}>
            <Icon name="search" size={22} />
          </Card>
          <Card variant="newsAction">
            <Icon name="arrow-right" size={22} />
          </Card>
        </Flex>
      </Flex>
      <Grid
        sx={styles.newsSectionGrid}
        gap={[3, null, null, 4]}
        columns={[1, 2, 3, 4]}
      >
        {renderCard()}
        {renderCard()}
      </Grid>
    </Container>
  );
};

export default FrontPage;

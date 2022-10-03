import React from "react";

import { Box, Card, Image, Text } from "@atoms";
import { StylesUtils } from "@utils";

import IconText from "../icon-text";

export type NewsCardProps = {
  title: string;
  author: string;
  image: string;
  link?: string;
};

const styles = StylesUtils.create({
  newsCardImageContainer: {
    position: "relative",
  },
  newsCardImage: {
    boxShadow: "0 0 8px rgba(0, 0, 0, .4)",
    borderRadius: 3,
  },
  newsCardIconText: {
    position: "absolute",
    bottom: 3,
    left: 2,
    p: 1,
    px: 2,
    borderRadius: 2,
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  newsCardText: {
    fontSize: 0,
  },
});

const NewsCard = ({ title, author, image }: NewsCardProps) => {
  return (
    <Card variant="news">
      <Box sx={styles.newsCardImageContainer}>
        <Image src={image} alt={`News: ${title}`} sx={styles.newsCardImage} />
        <Box sx={styles.newsCardIconText}>
          <IconText
            iconName="user"
            text={author}
            iconProps={{ size: 16, fill: "white" }}
            textProps={{ variant: "newsCardSubtitle" }}
          />
        </Box>
      </Box>
      <Text variant="newsCardTitle">{title}</Text>
    </Card>
  );
};

export default NewsCard;

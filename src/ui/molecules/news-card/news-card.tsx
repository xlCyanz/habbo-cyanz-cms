import React from "react";

import { Box, Card, Image, Text } from "@atoms";

import IconText from "../icon-text";
import { styles } from "./news-card.styles";

export type NewsCardProps = {
  title: string;
  author: string;
  image: string;
  link?: string;
};

const NewsCard = ({ title, author, image }: NewsCardProps) => {
  return (
    <Card variant="news">
      <Box sx={{ position: "relative" }}>
        <Image src={image} alt={`News: ${title}`} variant="newsCard" />
        <IconText
          iconName="user"
          text={author}
          sx={styles.newsCardIconTextBox}
          iconProps={{ size: 16, fill: "white" }}
          textProps={{ variant: "newsCardSubtitle" }}
        />
      </Box>
      <Text variant="newsCardTitle">{title}</Text>
    </Card>
  );
};

export default NewsCard;

import React from "react";
import { Card, Text, Tooltip } from "@atoms";

export type LastRegisterCardProps = {
  avatar: string;
  username: string;
};

const LastRegisterCard = ({ avatar, username }: LastRegisterCardProps) => {
  return (
    <Tooltip
      data-testid="lastRegisterCard_Tooltip"
      delay={100}
      content={<Text>{username}</Text>}
    >
      <Card
        data-testid="lastRegister_Card"
        variant="lastRegister"
        sx={{
          backgroundImage: `url(${avatar})`,
        }}
      />
    </Tooltip>
  );
};

export default LastRegisterCard;

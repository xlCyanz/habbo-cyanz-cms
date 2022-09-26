import { Card, Text, Tooltip } from "@atoms";

export interface ILastRegisterCardProps {
  avatar: string;
  username: string;
}

const LastRegisterCard = ({ avatar, username }: ILastRegisterCardProps) => {
  return (
    <Tooltip content={<Text>{username}</Text>}>
      <Card
        variant="secondary"
        sx={{
          backgroundImage: `url(${avatar})`,
          height: 60,
          width: 60,
          backgroundPosition: "50% 20%",
          cursor: "pointer",
        }}
      />
    </Tooltip>
  );
};

export default LastRegisterCard;

import React, { FC, MouseEvent } from "react";
interface ButtonFavoriteProps {
  playerId: number;
  handleFavorite: (e: MouseEvent, playerId: number) => void;
}
const ButtonFavorite: FC<ButtonFavoriteProps> = ({
  playerId,
  handleFavorite,
}) => {
  return (
    <button
      onClick={(event) => handleFavorite(event, playerId)}
      className="button-favorite"
    >
      X
    </button>
  );
};

export default ButtonFavorite;

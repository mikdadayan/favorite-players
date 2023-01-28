import React, { FC, MouseEvent } from "react";
import { Player } from "../../common/types/players";

interface PlayerProps {
  player: Player;
  handleFavorite: (e: MouseEvent, playerId: number) => void;
}

const PlayerItem: FC<PlayerProps> = ({ player, handleFavorite }) => {
  return (
    <div className="PlayerItem">
      <li onClick={(event) => handleFavorite(event, player.id)}>
        {player.first_name} {player.last_name}
      </li>
    </div>
  );
};

export default PlayerItem;

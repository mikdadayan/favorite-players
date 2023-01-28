import React, { FC, MouseEvent } from "react";
import { Player } from "../../common/types/players";
import ButtonFavorite from "../favorite-button/favorite-button.component";

import "./player-item.css";

interface PlayerProps {
  player: Player;
  handleFavorite: (e: MouseEvent, playerId: number) => void;
}

const PlayerItem: FC<PlayerProps> = ({ player, handleFavorite }) => {
  return (
    <div className="player-item">
      <li>
        <span>
          {player.first_name} {player.last_name}
        </span>
        <ButtonFavorite handleFavorite={handleFavorite} playerId={player.id} />
      </li>
    </div>
  );
};

export default PlayerItem;

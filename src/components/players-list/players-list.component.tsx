import React, { FC, useState } from "react";
import { Player, PlayersListProps } from "../../common/types/players";
import { searchPlayers } from "../../common/utils/utils";
import PlayerItem from "../player-item/player-item.component";
import SearchBox from "../search-box/search-box.component";

const PlayersList: FC<PlayersListProps> = ({ players, handleFavorite }) => {
  const [searchText, setSearchText] = useState("");
  let filteredPlayers = searchPlayers(players, searchText);

  return (
    <div className="players-box">
      <SearchBox setSearchText={setSearchText} />
      <div className="players-list">
        {filteredPlayers.map((player: Player) => (
          <PlayerItem
            key={player.id}
            handleFavorite={handleFavorite}
            player={player}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;

import React, { FC, MouseEvent, useCallback } from "react";
import { Player } from "../common/types/players";
import FavoriteList from "../components/favorite-players-list/favorite-players-list.component";
import Loading from "../components/loading/loading.component";
import PlayersList from "../components/players-list/players-list.component";
import { useFetchData } from "../hooks/useFetchData";

import "./home.css";

const Home: FC = () => {
  const playersAPI = "https://www.balldontlie.io/api/v1/players";
  const [players, setPlayers] = useFetchData(playersAPI);
  let handleFavorite = (e: MouseEvent, playerId: number) => {
    e.preventDefault();
    const newPlayers = players.map((player: Player) => {
      if (player.id === playerId) {
        player.favorite = !player.favorite;
        return player;
      }
      return player;
    });
    setPlayers(newPlayers);
  };
  const favoritePlayers = players.filter((player) => player.favorite);
  return (
    <div className="home">
      <div className="home-container">
        {players.length > 0 ? (
          <>
            <PlayersList players={players} handleFavorite={handleFavorite} />
            <FavoriteList
              players={favoritePlayers}
              handleFavorite={handleFavorite}
            />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;

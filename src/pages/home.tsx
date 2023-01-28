import React, { FC, useEffect, useState, MouseEvent } from "react";
import { Player } from "../common/types/players";
import FavoriteList from "../components/favorite-players-list/favorite-players-list.component";
import Loading from "../components/loading/loading.component";
import PlayersList from "../components/players-list/players-list.component";

const Home: FC = () => {
  const playersAPI = "https://www.balldontlie.io/api/v1/players";
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    fetch(playersAPI)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlayers(data.data);
      });
  }, []);

  const handleFavorite = (e: MouseEvent, playerId: number) => {
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
    <div className="Home">
      {players.length > 0 ? (
        <>
          <PlayersList
            // classList={["favorite-players"]}
            players={players}
            handleFavorite={handleFavorite}
          />
          {/* <PlayersList
            // classList={["favorite-players"]}
            players={favoritePlayers}
            handleFavorite={handleFavorite}
          /> */}

          <FavoriteList
            players={favoritePlayers}
            handleFavorite={handleFavorite}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;

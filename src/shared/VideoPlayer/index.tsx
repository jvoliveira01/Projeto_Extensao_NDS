import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import Image from "../Image";
import useWindowDimensions from "../../hooks/useWindowDimensions";

interface Props {
  src: string;
  poster?: string;
}

interface PlayerState {
  playing: boolean;
  percentage: number;
  volume: number;
}

const VideoPlayer = ({ src, poster }: Props) => {
  const { width } = useWindowDimensions();
  const $videoPlayer = useRef<HTMLVideoElement>(null);
  const [playerState, setPlayerState] = useState<PlayerState>({
    playing: true,
    percentage: 0,
    volume: 50,
  });

  const toggleVideoPlay = () => {
    setPlayerState((prevState) => ({
      ...prevState,
      playing: !prevState.playing,
    }));
  };

  const handleTimeUpdate = () => {
    const currentPercentage =
      (($videoPlayer.current?.currentTime ?? 0) /
        ($videoPlayer.current?.duration ?? 1)) *
      100;
    setPlayerState((prevState) => ({
      ...prevState,
      percentage: currentPercentage,
    }));
  };

  const handleChangeVideoPercentage = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const currentPercentageValue = parseInt(event.target.value, 10);
    if (!isNaN(currentPercentageValue) && $videoPlayer.current) {
      $videoPlayer.current.currentTime =
        ($videoPlayer.current.duration / 100) * currentPercentageValue;
      setPlayerState((prevState) => ({
        ...prevState,
        percentage: currentPercentageValue,
      }));
    }
  };

  const handleChangeVolume = (event: ChangeEvent<HTMLInputElement>) => {
    const currentVolumeValue = parseInt(event.target.value, 10);
    if (!isNaN(currentVolumeValue) && $videoPlayer.current) {
      $videoPlayer.current.volume = currentVolumeValue / 100;
      setPlayerState((prevState) => ({
        ...prevState,
        volume: currentVolumeValue,
      }));
    }
  };

  useEffect(() => {
    if ($videoPlayer.current) {
      playerState.playing
        ? $videoPlayer.current.pause()
        : $videoPlayer.current.play();
      $videoPlayer.current.volume = playerState.volume / 100;
    }
  }, [playerState.playing, playerState.volume]);

  return (
    <div className="flex flex-col w-[90%]">
      <video
        src={src}
        poster={poster}
        ref={$videoPlayer}
        onTimeUpdate={handleTimeUpdate}
        onClick={toggleVideoPlay}
        className="cursor-pointer"
      />
      <div className="flex items-center justify-between bg-secondary-250 py-2 px-3 gap-2">
        <button onClick={toggleVideoPlay} className="w-6 h-6">
          <Image
            src={playerState.playing ? "/play.svg" : "/pause.svg"}
            alt={playerState.playing ? "Pausar" : "Reproduzir"}
            width={512}
            height={512}
          />
        </button>
        <input
          type="range"
          min="0"
          max="100"
          onChange={handleChangeVideoPercentage}
          value={playerState.percentage}
          className="w-full cursor-pointer"
        />
        <button
          onClick={() =>
            setPlayerState((prevState) => ({
              ...prevState,
              volume: 0,
            }))
          }
          className="w-6 h-6"
        >
          <Image
            src={playerState.volume ? "/volume.svg" : "/withoutVolume.svg"}
            alt={playerState.volume ? "Sem som" : "Com som"}
            width={512}
            height={512}
          />
        </button>
        <input
          type="range"
          min="0"
          max="100"
          onChange={handleChangeVolume}
          value={playerState.volume}
          className={`${width > 440 ? "w-16" : "w-10"} cursor-pointer`}
        />
        <div className="flex items-center w-10 h-full">
          <Image src="/logoIcon.svg" width={50} height={50} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

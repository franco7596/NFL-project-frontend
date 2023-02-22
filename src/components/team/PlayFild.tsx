import React, { useEffect, useState } from 'react'
import { playerType } from "../../redux/types/players/playersTypeData";
import "./defenseTeam.css";
type teamParam = {
	team: playerType[] | null;
};
type defenseTeamPositions = {
	de: playerType[];
	dl: playerType[];
	cb: playerType[];
	lb: playerType[];
	fs: playerType[];
	ss: playerType[];
};

type Point ={
    x: number;
    y: number;
  }

export default function PlayFild({ team }: teamParam) {
    const [playersXPositions, setPlayersXPositions] =
    useState<defenseTeamPositions>({
        de: [],
        dl: [],
        cb: [],
        lb: [],
        fs: [],
        ss: [],
    });
    const [positiony, setPositiony] = useState(0);
    const [positionx, setPositionx] = useState(0);
    const [moving, setMoving] = useState(false);
    const [mouseLastPositionY, setMouseLastPositionY] = useState(0);
    const [mouseLastPositionX, setMouseLastPositionX] = useState(0);
    const [start, setStart] = useState<null | Point>(null);
    const [end, setEnd] = useState<null | Point>(null);

useEffect(() => {
    if (team) {
        let dePlayers: playerType[] = [];
        let dlPlayers: playerType[] = [];
        let cbPlayers: playerType[] = [];
        let lblayers: playerType[] = [];
        let fsPlayers: playerType[] = [];
        let ssPlayers: playerType[] = [];
        team.forEach((player) => {
            if (player.images.photo !== "") {
                let positionPlayer = player.infoCurrentTeam.position;
                if (positionPlayer === "DE") dePlayers.push(player);
                if (positionPlayer === "DL" || positionPlayer === "CB") {
                    dlPlayers.push(player);
                }
                if (positionPlayer === "CB") cbPlayers.push(player);
                if (positionPlayer === "LB") lblayers.push(player);
                if (positionPlayer === "FS" || positionPlayer === "S")
                    fsPlayers.push(player);
                if (positionPlayer === "SS" || positionPlayer === "SAF")
                    ssPlayers.push(player);
            }
        });
        setPlayersXPositions({
            de: dePlayers,
            dl: dlPlayers,
            cb: cbPlayers,
            lb: lblayers,
            fs: fsPlayers,
            ss: ssPlayers,
        });
    }
}, [team]);



// const handleMouseClick = (e: React.MouseEvent<HTMLElement>) => {
//     console.log("handleMouseClick")
//     setMoving(true);
//     setMouseLastPositionX(e.pageX);
//     setMouseLastPositionY(e.pageY);
//   };
//   const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
//     console.log("handleMouseMove")
//     if (moving) {
//       const difX = e.pageX - mouseLastPositionX;
//       const dify = e.pageY - mouseLastPositionY;
//       setPositionx(difX);
//       setPositiony(dify);
//     }
//   };

//   const handleMouseUp = () => {
//     setMoving(false);
//   };

const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (start === null) {
      setStart({ x: e.clientX, y: e.clientY });
    } else if (end === null) {
      setEnd({ x: e.clientX, y: e.clientY });
    } else {
      setStart(null);
      setEnd(null);
    }
  };
  
  const containerStyle: React.CSSProperties = {
    // position: "relative",
    // width: "100%",
    // height: "100%",
    cursor: "crosshair"
  };

  const ArrowStyle: React.CSSProperties = {
    position: "absolute",
    borderStyle: "solid",
    borderWidth: "0.25rem 0 0 0.25rem",
    borderColor: "black",
    transform: "rotate(45deg)"
  };
  
	return playersXPositions.de.length !== 0 ? (
		<div className="field-image"
        style={containerStyle} onClick={handleClick}
        >
			<div
				className="box box-1"

                // onMouseMove={handleMouseMove}
                // onClick={handleMouseClick}
                // onDragEnter={handleMouseClick}
                // onMouseLeave={handleMouseUp}
                
				style={{
					backgroundImage: `url(${playersXPositions.de[0].images.photo})`,
                    // left: positionx, top: positiony,
                    transform: `translateX(${positionx}px) translateY(${positiony}px)`,
                    cursor: "pointer",
				}}
			>
				<h5>DE</h5>
                
			</div>

			<div
				className="box box-2"
				style={{
					backgroundImage: `url(${playersXPositions.dl[0].images.photo})`,
				}}
			>
				<h5>DL</h5>
			</div>
			<div
				className="box box-3"
				style={{
					backgroundImage: `url(${playersXPositions.dl[1].images.photo})`,
				}}
			>
				<h5>DL</h5>
			</div>
			<div
				className="box box-4"
				style={{
					backgroundImage: `url(${playersXPositions.de[1].images.photo})`,
				}}
			>
				<h5>DE</h5>
			</div>
			<div
				className="box box-5"
				style={{
					backgroundImage: `url(${playersXPositions.cb[0].images.photo})`,
				}}
			>
				<h5>CB</h5>
			</div>
			<div
				className="box box-6"
				style={{
					backgroundImage: `url(${playersXPositions.cb[1].images.photo})`,
				}}
			>
				<h5>CB</h5>
			</div>
			<div
				className="box box-7"
				style={{
					backgroundImage: `url(${playersXPositions.lb[0].images.photo})`,
				}}
			>
				<h5>LB</h5>
			</div>
			<div
				className="box box-8"
				style={{
					backgroundImage: `url(${playersXPositions.lb[1].images.photo})`,
				}}
			>
				<h5>LB</h5>
			</div>
			<div
				className="box box-9"
				style={{
					backgroundImage: `url(${playersXPositions.lb[2].images.photo})`,
				}}
			>
				<h5>LB</h5>
			</div>
			<div
				className="box box-10"
				style={{
					backgroundImage: `url(${playersXPositions.fs[0].images.photo})`,
				}}
			>
				<h5>FS</h5>
			</div>
			<div
				className="box box-11"
				style={
					playersXPositions.fs[1].images && {
						backgroundImage: `url(${playersXPositions.fs[1].images.photo})`,
					}
				}
			>
				<h5>FS</h5>
			</div>
		</div>
	) : (
		<></>
	);
}

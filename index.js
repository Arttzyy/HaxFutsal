// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "|⚽Futsal⚽|";
const botName = "☠️ VAR ☠️";3
const maxPlayers = 12;
const roomPublic = true;
const geo = [{ "code": "PT", "lat": 38.52, "lon": -8.8859 }, { "code": "FR", "lat": 46.2, "lon": 2.2 }, { "code": "PL", "lat": 51.9, "lon": 19.1 }, { "code": "GB", "lat": 55.3, "lon": -3.4 }, { "code": "PT", "lat": 39.3, "lon": -8.2 }];
const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });
setInterval(() => {
room.sendChat("📀 Type !bet to bet on a team! 💵");
}, 600000); // 600000ms = 1 minuto
const scoreLimitClassic = 3;
const scoreLimitBig = 3;
const timeLimitClassic = 3;
const timeLimitBig = 3;

room.setTeamsLock(true);

var adminPassword = 43141421421;

// /colors red 60 000000 D60000 FF0000 D60000
let teamColors = [
  {
    // normal red team
    angle: 60,
    chatColor: 0xffffff,
    teamColors: [0xb00000],
  },
  {
    // Dres6
    angle: 180,
    chatColor: 0xff7096,
    teamColors: [0x4d0b44, 0x8f3683],
  },
  {
    // normal blue team /colors blue 60 000000 2454A6 3881FF 2454A6
    angle: 60,
    chatColor: 0xffffff,
    teamColors: [0x0000b0],
  },
  {
    // Dres6
    angle: 180,
    chatColor: 0x6b6bff,
    teamColors: [0x0b134d, 0x3a338f],
  },
  {
    // Dres2
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0xff0000, 0xd80000],
  },
  {
    // Dres2
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0x0000ff, 0x0e00d8],
  },
  {
    // Dres3
    angle: 178,
    chatColor: 0x9e6a3c,
    teamColors: [0xff0000, 0x8a0b0b],
  },
  {
    // Dres3
    angle: 178,
    chatColor: 0xcccccc,
    teamColors: [0xffffff, 0x1e1877, 0xffffff],
  },
  {
    // Dres4
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0xc20000, 0xff4d4d, 0xc20000],
  },
  {
    // Dres4
    angle: 180,
    chatColor: 0xffffff,
    teamColors: [0x2700c2, 0x4f7eff, 0x2700c2],
  },
  {
    // Dres5
    angle: 180,
    chatColor: 0x000000,
    teamColors: [0xc2005b, 0xff40f2, 0xc2005b],
  },
  {
    // Dres5
    angle: 180,
    chatColor: 0x000000,
    teamColors: [0x0eb6c2, 0x442bab, 0x0eb6c2],
  },
];

room.setTeamsLock(true);
room.setTeamColors(
  1,
  teamColors[0].angle,
  teamColors[0].chatColor,
  teamColors[0].teamColors
);
room.setTeamColors(
  2,
  teamColors[2].angle,
  teamColors[2].chatColor,
  teamColors[2].teamColors
);
room.setKickRateLimit(0, 0, 0);

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;
var aloneMap =
  '{"name":"Training","width":480,"height":230,"bg":{"kickOffRadius":60,"color":"34414B"},"spawnDistance":70,"vertexes":[{"x":-100,"y":-100,"cMask":[],"cGroup":[]},{"x":-100,"y":100,"cMask":[],"cGroup":[]},{"x":0,"y":100,"cMask":[],"cGroup":[]},{"x":0,"y":-100,"cMask":[],"cGroup":[]},{"x":0,"y":-40,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":40,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-1.5,"cMask":[],"cGroup":[]},{"x":0,"y":1.5,"cMask":[],"cGroup":[]},{"x":-100,"y":-100,"cMask":["ball"],"cGroup":[],"bias":10},{"x":100,"y":-100,"cMask":["ball"],"cGroup":[],"bias":10},{"x":100,"y":100,"cMask":["ball"],"cGroup":[],"bias":10},{"x":-100,"y":100,"cMask":["ball"],"cGroup":[],"bias":10}],"segments":[{"v0":3,"v1":4,"color":"ABC2D5","bCoef":0,"cMask":[],"cGroup":[]},{"v0":2,"v1":5,"color":"ABC2D5","bCoef":0,"cMask":[],"cGroup":[]},{"v0":4,"v1":5,"curve":180,"color":"D9A472","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"curveF":6.123233995736766e-17},{"v0":5,"v1":4,"curve":180,"color":"D9A472","bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"curveF":6.123233995736766e-17},{"v0":6,"v1":7,"curve":180,"color":"626262","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17},{"v0":7,"v1":6,"curve":180,"color":"626262","bCoef":0,"cMask":[],"curveF":6.123233995736766e-17},{"v0":10,"v1":9,"color":"ABC2D5","cMask":["ball"],"bias":10,"x":100},{"v0":8,"v1":9,"color":"ABC2D5","cMask":["ball"],"bias":-10},{"v0":10,"v1":11,"color":"ABC2D5","cMask":["ball"],"bias":-10},{"v0":8,"v1":11,"color":"ABC2D5","cMask":["ball"],"bias":10}],"planes":[{"normal":[0,1],"dist":-200,"bCoef":0},{"normal":[0,-1],"dist":-200,"bCoef":0},{"normal":[1,0],"dist":-200,"bCoef":0},{"normal":[-1,0],"dist":-200,"bCoef":0}],"goals":[],"discs":[{"radius":5.8,"invMass":1.55,"pos":[0,0],"color":"FFF26D","bCoef":0.412,"cGroup":["ball","kick","score"]}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.2},"ballPhysics":"disc0","traits":[],"joints":[],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":true}';
var classicMap =
  '{"name":"Futsal 1v/2v","width":480,"height":230,"bg":{"kickOffRadius":60,"color":"34414B"},"vertexes":[{"x":-401.4,"y":-200,"cMask":[],"cGroup":[]},{"x":401.4,"y":-200,"cMask":[],"cGroup":[]},{"x":401.4,"y":200,"cMask":[],"cGroup":[]},{"x":-401.4,"y":200,"cMask":[],"cGroup":[]},{"x":0,"y":200,"cMask":[],"cGroup":[]},{"x":0,"y":-200,"cMask":[],"cGroup":[]},{"x":0,"y":-80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":-400,"y":70,"cMask":[],"cGroup":[]},{"x":-400,"y":-70,"cMask":[],"cGroup":[]},{"x":400,"y":-70,"cMask":[],"cGroup":[]},{"x":400,"y":70,"cMask":[],"cGroup":[]},{"x":0,"y":230,"cMask":[],"cGroup":[]},{"x":0,"y":-230,"cMask":[],"cGroup":[]},{"x":436.4,"y":-70,"cMask":[],"cGroup":[]},{"x":436.4,"y":70,"cMask":[],"cGroup":[]},{"x":-436.4,"y":-70,"cMask":[],"cGroup":[]},{"x":-436.4,"y":70,"cMask":[],"cGroup":[]},{"x":0,"y":-1.5,"cMask":[],"cGroup":[]},{"x":0,"y":1.5,"cMask":[],"cGroup":[]},{"x":400,"y":-135,"cMask":[],"cGroup":[]},{"x":400,"y":135,"cMask":[],"cGroup":[]},{"x":-400,"y":-135,"cMask":[],"cGroup":[]},{"x":-400,"y":135,"cMask":[],"cGroup":[]},{"x":-400,"y":-201.4,"cMask":[],"cGroup":[]},{"x":400,"y":-201.4,"cMask":[],"cGroup":[]},{"x":400,"y":201.4,"cMask":[],"cGroup":[]},{"x":-400,"y":201.4,"cMask":[],"cGroup":[]},{"x":435,"y":-71.4,"cMask":[],"cGroup":[]},{"x":435,"y":71.4,"cMask":[],"cGroup":[]},{"x":-435,"y":-71.4,"cMask":[],"cGroup":[]},{"x":-435,"y":71.4,"cMask":[],"cGroup":[]}],"segments":[{"v0":5,"v1":6,"bCoef":0,"cMask":[],"cGroup":[],"color":"ABC2D5"},{"v0":4,"v1":7,"bCoef":0,"cMask":[],"cGroup":[],"color":"ABC2D5"},{"v0":6,"v1":13,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":7,"v1":12,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":6,"v1":7,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["redKO"],"color":"D9A472"},{"v0":7,"v1":6,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"D9A472"},{"v0":18,"v1":19,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},{"v0":19,"v1":18,"bCoef":0,"curve":180,"curveF":6.123233995736766e-17,"cMask":[],"color":"626262"},{"v0":21,"v1":20,"bCoef":0,"curve":150,"curveF":0.2679491924311227,"cMask":[],"color":"626262"},{"v0":22,"v1":23,"bCoef":0,"curve":150,"curveF":0.2679491924311227,"cMask":[],"color":"626262"},{"v0":10,"v1":14,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"6666FF"},{"v0":28,"v1":29,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"6666FF"},{"v0":15,"v1":11,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"6666FF"},{"v0":8,"v1":17,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"FF6666"},{"v0":31,"v1":30,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"FF6666"},{"v0":16,"v1":9,"bias":-10,"bCoef":0.1,"cMask":["ball"],"color":"FF6666"},{"v0":9,"v1":8,"bCoef":0,"cMask":[],"color":"C5C5C5"},{"v0":10,"v1":11,"bCoef":0,"cMask":[],"color":"C5C5C5"},{"v0":0,"v1":1,"bias":-10,"cMask":["ball"],"color":"ABC2D5"},{"v0":25,"v1":10,"bias":-10,"cMask":["ball"],"color":"ABC2D5"},{"v0":11,"v1":26,"bias":-10,"cMask":["ball"],"color":"ABC2D5"},{"v0":2,"v1":3,"bias":-10,"cMask":["ball"],"color":"ABC2D5"},{"v0":27,"v1":8,"bias":-10,"cMask":["ball"],"color":"ABC2D5"},{"v0":9,"v1":24,"bias":-10,"cMask":["ball"],"color":"ABC2D5"}],"planes":[{"normal":[0,1],"dist":-230,"bCoef":0},{"normal":[0,-1],"dist":-230,"bCoef":0},{"normal":[1,0],"dist":-480,"bCoef":0},{"normal":[-1,0],"dist":-480,"bCoef":0}],"goals":[{"p0":[-407.9,70],"p1":[-407.9,-70],"team":"red"},{"p0":[407.9,70],"p1":[407.9,-70],"team":"blue"}],"discs":[{"radius":5.8,"bCoef":0.412,"invMass":1.55,"color":"FFF26D","cGroup":["ball","kick","score"]},{"pos":[-400,-70],"radius":5.4,"invMass":0,"color":"31726"},{"pos":[-400,70],"radius":5.4,"invMass":0,"color":"31726"},{"pos":[400,-70],"radius":5.4,"invMass":0,"color":"31726"},{"pos":[400,70],"radius":5.4,"invMass":0,"color":"31726"}],"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":4.2},"ballPhysics":"disc0","canBeStored":true}';
var bigMap =
  '{"name":"LDC 4v4 - OFFICIAL","width":725,"height":340,"bg":{"type":"grass","color":"484C5C"},"vertexes":[{"x":-660,"y":-85,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":-660,"y":85,"bCoef":0.1,"cMask":["blue"],"cGroup":["redKO","blueKO"]},{"x":660,"y":-85,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":660,"y":85,"bCoef":0.1,"cMask":["red"],"cGroup":["redKO","blueKO"]},{"x":-345.5,"y":308,"cMask":[]},{"x":-345.5,"y":-308,"cMask":[]},{"x":345.5,"y":308,"cMask":[]},{"x":345.5,"y":-308,"cMask":[]},{"x":-345.5,"y":-130,"cMask":[]},{"x":-345.5,"y":130,"cMask":[]},{"x":345.5,"y":-130,"cMask":[]},{"x":345.5,"y":130,"cMask":[]},{"x":0,"y":350,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-340,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"x":0,"y":-310,"cMask":["wall"]},{"x":0,"y":-80,"cMask":["wall"]},{"x":0,"y":80,"cMask":["wall"]},{"x":0,"y":310,"cMask":["wall"]},{"x":0,"y":80,"cMask":["wall"]},{"x":0,"y":-80,"cMask":["wall"]},{"x":-660,"y":-85,"bCoef":0,"cMask":["c0"]},{"x":-660,"y":85,"bCoef":0,"cMask":["c0"]},{"x":660,"y":85,"bCoef":0,"cMask":["c0"]},{"x":660,"y":-85,"bCoef":0,"cMask":["c0"]},{"x":660,"y":-85,"bCoef":2,"cMask":["ball"]},{"x":660,"y":-311.5,"bCoef":2,"cMask":["ball"]},{"x":661.5,"y":-310,"bCoef":2,"cMask":["ball"]},{"x":-661.5,"y":-310,"bCoef":2,"cMask":["ball"]},{"x":-660,"y":-311.5,"bCoef":2,"cMask":["ball"]},{"x":-660,"y":-85,"bCoef":2,"cMask":["ball"]},{"x":-660,"y":85,"bCoef":2,"cMask":["ball"]},{"x":-660,"y":311.5,"bCoef":2,"cMask":["ball"]},{"x":-661.5,"y":310,"bCoef":2,"cMask":["ball"]},{"x":661.5,"y":310,"bCoef":2,"cMask":["ball"]},{"x":660,"y":311.5,"bCoef":2,"cMask":["ball"]},{"x":660,"y":85,"bCoef":2,"cMask":["ball"]},{"x":-660,"y":-85,"bCoef":5,"cMask":["ball"]},{"x":-698.5,"y":-85,"bCoef":5,"cMask":["ball"]},{"x":-697,"y":-86.5,"bCoef":5,"cMask":["ball"]},{"x":-697,"y":86.5,"bCoef":5,"cMask":["ball"]},{"x":-698.5,"y":85,"bCoef":5,"cMask":["ball"]},{"x":-660,"y":85,"bCoef":5,"cMask":["ball"]},{"x":660,"y":85,"bCoef":5,"cMask":["ball"]},{"x":698.5,"y":85,"bCoef":5,"cMask":["ball"]},{"x":697,"y":86.5,"bCoef":5,"cMask":["ball"]},{"x":697,"y":-86.5,"bCoef":5,"cMask":["ball"]},{"x":698.5,"y":-85,"bCoef":5,"cMask":["ball"]},{"x":660,"y":-85,"bCoef":5,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"bCoef":0.1,"cMask":["blue","c3"],"cGroup":["redKO","blueKO"],"color":"F9ECE5"},{"v0":2,"v1":3,"bCoef":0.1,"cMask":["red","c2"],"cGroup":["redKO","blueKO"],"color":"F9ECE5"},{"v0":4,"v1":5,"bCoef":0.1,"cMask":["wall"],"color":"A3A5AD"},{"v0":6,"v1":7,"bCoef":0.1,"cMask":["wall"],"color":"A3A5AD"},{"v0":8,"v1":9,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"A3A5AD"},{"v0":11,"v1":10,"curve":89.99999999999999,"curveF":1.0000000000000002,"cMask":["wall"],"color":"A3A5AD"},{"v0":12,"v1":13,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":14,"v1":15,"bCoef":0.1,"vis":false,"cMask":["red","blue"],"cGroup":["redKO","blueKO"]},{"v0":16,"v1":17,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["blueKO"],"color":"530C0C"},{"v0":17,"v1":16,"bCoef":0.1,"curve":180,"curveF":6.123233995736766e-17,"vis":false,"cMask":["red","blue"],"cGroup":["redKO"],"color":"530C0C"},{"v0":18,"v1":19,"cMask":["wall"],"color":"A3A5AD"},{"v0":20,"v1":21,"cMask":["wall"],"color":"A3A5AD"},{"v0":22,"v1":23,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A5AD"},{"v0":23,"v1":22,"curve":180,"curveF":6.123233995736766e-17,"cMask":["wall"],"color":"A3A5AD"},{"v0":24,"v1":25,"bias":10,"vis":false,"cMask":["c0"],"color":"C8C9CE"},{"v0":26,"v1":27,"bias":10,"vis":false,"cMask":["c1"],"color":"C8C9CE"},{"v0":28,"v1":29,"bias":10,"cMask":["ball"],"color":"C8C9CE"},{"v0":30,"v1":31,"bias":10,"cMask":["ball"],"color":"C8C9CE"},{"v0":32,"v1":33,"bias":10,"cMask":["ball"],"color":"C8C9CE"},{"v0":34,"v1":35,"bias":10,"cMask":["ball"],"color":"C8C9CE"},{"v0":36,"v1":37,"bias":10,"cMask":["ball"],"color":"C8C9CE"},{"v0":38,"v1":39,"bias":10,"cMask":["ball"],"color":"C8C9CE"},{"v0":40,"v1":41,"bias":10,"bCoef":5,"cMask":["ball"],"color":"FF8800"},{"v0":42,"v1":43,"bias":10,"bCoef":5,"cMask":["ball"],"color":"FF8800"},{"v0":44,"v1":45,"bias":10,"bCoef":5,"cMask":["ball"],"color":"FF8800"},{"v0":46,"v1":47,"bias":10,"bCoef":5,"cMask":["ball"],"color":"D3B66"},{"v0":48,"v1":49,"bias":10,"bCoef":5,"cMask":["ball"],"color":"D3B66"},{"v0":50,"v1":51,"bias":10,"bCoef":5,"cMask":["ball"],"color":"D3B66"}],"planes":[{"normal":[0,1],"dist":-340,"bCoef":0.1},{"normal":[0,-1],"dist":-340,"bCoef":0.1},{"normal":[-1,0],"dist":-750,"bCoef":0.1},{"normal":[-1,0],"dist":-745,"bCoef":0.8,"cMask":["ball"]},{"normal":[1,0],"dist":-725,"bCoef":0.8,"cMask":["ball"]},{"normal":[-1,0],"dist":-345,"bCoef":0,"cMask":["c1"]},{"normal":[1,0],"dist":-345,"bCoef":0,"cMask":["c0"]}],"goals":[{"p0":[-668.23,85],"p1":[-668.23,-85],"team":"red"},{"p0":[668.23,-85],"p1":[668.23,85],"team":"blue"}],"discs":[{"radius":5.73,"bCoef":0.4125,"invMass":1.4897,"damping":0.9878,"color":"FF8800","cGroup":["ball","kick","score"]},{"pos":[-660,85],"radius":5.4,"invMass":0},{"pos":[-697,85],"radius":4,"invMass":0,"color":"FD3838","cMask":["ball"]},{"pos":[-697,-85],"radius":4,"invMass":0,"color":"FD3838","cMask":["ball"]},{"pos":[-660,-85],"radius":5.4,"invMass":0},{"pos":[660,85],"radius":5.4,"invMass":0},{"pos":[697,85],"radius":4,"invMass":0,"color":"3858FD","cMask":["ball"]},{"pos":[697,-85],"radius":4,"invMass":0,"color":"3858FD","cMask":["ball"]},{"pos":[660,-85],"radius":5.4,"invMass":0}],"playerPhysics":{"bCoef":0,"acceleration":0.1109,"kickingAcceleration":0.083,"kickStrength":4.71},"ballPhysics":"disc0","spawnDistance":310}';

/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = Infinity;
var maxTeamSize = 4; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;
let playerCooldown = {};

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = {
  GA: 0,
  WI: 1,
  DR: 2,
  LS: 3,
  WR: 4,
  GL: 5,
  AS: 6,
  GK: 7,
  CS: 8,
  CP: 9,
  RL: 10,
  GP: 11,
  AP: 12,
  PT: 13,
  OC: 14,
  NK: 15,
  AV: 16,
};
var players;
var avatarCommand = "!avatar";
var commands = ["!dno", "!buyinstantpick"];
var command = ["!buybeer"];
var commandz = ["!buyDres6"];
var dres2 = ["!dres 2"];
var dres3 = ["!dres 3"];
var dres4 = ["!dres 4"];
var dres5 = ["!dres 5"];
var gamePaused = false;
var redCaptain;
var blueCaptain;
var teamR;
var teamB;
var teamS;
var oddsRed, oddsBlue;
var playerDataMap = new Map();

var mutedAuths = [];
var timeObject = { Seconds: 1000, Minutes: 60000, Hours: 3600000 };

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */
var winstreakrecord = 0;
var winstreakrecordplayers = [];

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(aloneMap, 0, 0);

/* OBJECTS */

function Goal(time, team, striker, assist) {
  this.time = time;
  this.team = team;
  this.striker = striker;
  this.assist = assist;
}

function Game(date, scores, goals) {
  this.date = date;
  this.scores = scores;
  this.goals = goals;
}

/* FUNCTIONS */

function findPlayerById(playerId) {
  return room.getPlayerList().find((p) => p.id === playerId);
}

let bettingOpen = false;

// Function to close betting after 15 seconds
function closeBetting() {
  bettingOpen = false;
  room.sendAnnouncement("Betting is closed.", null, 0x015fb0, "bold", 0);
}

// Function to open betting
function openBetting() {
  bettingOpen = true;
  setTimeout(closeBetting, 20000);
}

let winningTeam = null; // Global variable to store the winning team

function setWinningTeam(team) {
  winningTeam = team;
}

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) {
  // returns a random number from 0 to max-1
  return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) {
  // returns the current time of the game
  return (
    "[" +
    Math.floor(Math.floor(scores.time / 60) / 10).toString() +
    Math.floor(Math.floor(scores.time / 60) % 10).toString() +
    ":" +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) / 10
    ).toString() +
    Math.floor(
      Math.floor(scores.time - Math.floor(scores.time / 60) * 60) % 10
    ).toString() +
    "]"
  );
}

function pointDistance(p1, p2) {
  var d1 = p1.x - p2.x;
  var d2 = p1.y - p2.y;
  return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function topBtn() {
  if (teamS.length == 0) {
    return;
  } else {
    if (teamR.length == teamB.length) {
      if (teamS.length > 1) {
        room.setPlayerTeam(teamS[0].id, Team.RED);
        room.setPlayerTeam(teamS[1].id, Team.BLUE);
      }
      return;
    } else if (teamR.length < teamB.length) {
      room.setPlayerTeam(teamS[0].id, Team.RED);
    } else {
      room.setPlayerTeam(teamS[0].id, Team.BLUE);
    }
  }
}

function randomBtn() {
  if (teamS.length == 0) {
    return;
  } else {
    if (teamR.length == teamB.length) {
      if (teamS.length > 1) {
        var r = getRandomInt(teamS.length);
        room.setPlayerTeam(teamS[r].id, Team.RED);
        teamS = teamS.filter((spec) => spec.id != teamS[r].id);
        room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
      }
      return;
    } else if (teamR.length < teamB.length) {
      room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
    } else {
      room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
    }
  }
}

function blueToSpecBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  for (var i = 0; i < teamB.length; i++) {
    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
  }
}

function redToSpecBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  for (var i = 0; i < teamR.length; i++) {
    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
  }
}

function resetBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  if (teamR.length <= teamB.length) {
    for (var i = 0; i < teamR.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
    for (var i = teamR.length; i < teamB.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
  } else {
    for (var i = 0; i < teamB.length; i++) {
      room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
    for (var i = teamB.length; i < teamR.length; i++) {
      room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
  }
}

function blueToRedBtn() {
  resettingTeams = true;
  setTimeout(() => {
    resettingTeams = false;
  }, 100);
  for (var i = 0; i < teamB.length; i++) {
    room.setPlayerTeam(teamB[i].id, Team.RED);
  }
}

/* GAME FUNCTIONS */

function checkTime() {
  const scores = room.getScores();
  game.scores = scores;
  if (
    Math.abs(scores.time - scores.timeLimit) <= 0.01 &&
    scores.timeLimit != 0
  ) {
    if (scores.red != scores.blue) {
      if (checkTimeVariable == false) {
        checkTimeVariable = true;
        setTimeout(() => {
          checkTimeVariable = false;
        }, 3000);
        scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
        setTimeout(() => {
          room.stopGame();
        }, 2000);
      }
      return;
    }
    goldenGoal = true;
    room.sendAnnouncement("⚽ Golden goal !");
  }
  if (
    Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 &&
    players.length > 2
  ) {
    if (checkTimeVariable == false) {
      checkTimeVariable = true;
      setTimeout(() => {
        checkTimeVariable = false;
      }, 10);
      room.sendChat("⌛ 60 seconds left until the game ends !");
    }
  }
  if (
    Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 &&
    players.length > 2
  ) {
    if (checkTimeVariable == false) {
      checkTimeVariable = true;
      setTimeout(() => {
        checkTimeVariable = false;
      }, 10);
      endGame(Team.SPECTATORS);
      room.stopGame();
      goldenGoal = false;
    }
  }
}

function endGame(winner) {
  // handles the end of a game : no stopGame function inside
  players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
  const scores = room.getScores();
  game.scores = scores;
  Rposs = Rposs / (Rposs + Bposs);
  Bposs = 1 - Rposs;
  lastWinner = winner;
  endGameVariable = true;

  // Existing streak handling code
  if (winner == Team.RED) {
    streak++;
    if (streak > winstreakrecord) {
      room.sendAnnouncement(
        "🔴 Red Team have set a new record for consecutive wins.",
        null,
        0xed56ef,
        "bold",
        0
      );
    }
    setTimeout(function () {
      room.sendAnnouncement(
        "🔴 Red Team now have " + streak + " consecutive wins!",
        null,
        0xffffff,
        "italic",
        0
      );
    }, 2500);
  } else if (winner == Team.BLUE) {
    var previousStreak = streak; // Capture the current streak before resetting it
    setTimeout(function () {
      room.sendAnnouncement(
        "🔵 Blue Team managed to break the streak of " +
          previousStreak +
          " consecutive victories by the Red champions!",
        null,
        0xffffff,
        "italic",
        0
      );
    }, 3000);
    streak = 1; // Reset the streak since the blue team won
  } else {
    streak = 0;
    room.sendChat("💤 Time’s up, I’m finishing! 💤");
  }

  if (streak > 9) {
    // Handle long streak if needed
  }

  if (streak < 3) {
    let players = room.getPlayerList();
    for (let i = 0; i < players.length; i++) {
      if (players[i].team == Team.RED) {
        // Reset avatar or other actions for RED team
      }
    }
    for (let i = 0; i < players.length; i++) {
      if (players[i].team == Team.BLUE) {
        // Reset avatar or other actions for BLUE team
      }
    }
  }

  scores.red == 0
    ? scores.blue == 0
      ? room.sendAnnouncement(
          "🧤 " +
            GKList[0].name +
            " i " +
            GKList[1].name +
            " kept a clean sheet !",
          null,
          0xffffff,
          "bold",
          0
        )
      : room.sendAnnouncement(
          "🧤 " + GKList[1].name + " kept a clean sheet !",
          null,
          0xffffff,
          "bold",
          0
        )
    : scores.blue == 0
    ? room.sendAnnouncement(
        "🧤 " + GKList[0].name + " kept a clean sheet !",
        null,
        0xffffff,
        "bold",
        0
      )
    : null;
  updateStats();

  if (winstreakrecord < streak && teamR.length == maxTeamSize) {
    winstreakrecord = streak;
    if (winner == Team.RED) {
      for (i = 0; i < maxTeamSize; i++) {
        winstreakrecordplayers[i] = teamR[i].name;
      }
    }
    if (winner == Team.BLUE) {
      for (i = 0; i < maxTeamSize; i++) {
        winstreakrecordplayers[i] = teamB[i].name;
      }
    }
  }

  // New betting functionality
  let storedOdds = localStorage.getItem("odds");
  let oddsRed = 1.85; // Default fallback
  let oddsBlue = 1.85; // Default fallback

  if (storedOdds) {
    try {
      let oddsData = JSON.parse(storedOdds);
      oddsRed = parseFloat(oddsData.red) || oddsRed;
      oddsBlue = parseFloat(oddsData.blue) || oddsBlue;
    } catch (e) {
      //console.error("Error parsing odds from localStorage:", e);
    }
  }

  //console.log(`Odds Red: ${oddsRed}, Odds Blue: ${oddsBlue}`);

  if (Array.isArray(game.bets) && game.bets.length > 0) {
    game.bets.forEach((bet) => {
      let auth = getAuth({ id: bet.playerId });
      let playerStats;

      if (localStorage.getItem(auth)) {
        playerStats = JSON.parse(localStorage.getItem(auth));
      } else {
        playerStats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
          "Unknown Player",
        ];
      }

      let winnings = bet.amount * bet.odds;
      //console.log(`Bet details: Player ID: ${bet.playerId}, Team: ${bet.team}, Amount: ${bet.amount}, Odds: ${bet.odds}`);
      //console.log(`Winner: ${winner}, Bet Team: ${bet.team}`);
      //console.log(`Winnings: ${winnings.toFixed(2)}`);
      //console.log(`Current Points: ${playerStats[Ss.PT]}`);

      if (
        (winner === Team.RED && bet.team === "r") ||
        (winner === Team.BLUE && bet.team === "b")
      ) {
        playerStats[Ss.PT] += winnings; // Add winnings
        localStorage.setItem(auth, JSON.stringify(playerStats));
        room.sendAnnouncement(
          `Congratulations ${playerStats[15]}! You have won ${Math.floor(
            winnings
          )} 💰HaxCoins by betting on ${
            winner === Team.RED ? "Red Team" : "Blue Team"
          }.`,
          null,
          0x00ff00,
          "bold",
          0
        );
      } else {
        room.sendAnnouncement(
          `${playerStats[15]}, you lost your 💰HaxCoins in betting.`,
          null,
          0xff0000,
          "bold",
          0
        );
      }
    });

    game.bets = [];
  } else {
    // room.sendAnnouncement("No bets were placed.", null, 0xff0000, "bold", 2);
  }
}

function normalkits() {
  room.setTeamColors(
    1,
    teamColors[0].angle,
    teamColors[0].chatColor,
    teamColors[0].teamColors
  );
  room.setTeamColors(
    2,
    teamColors[2].angle,
    teamColors[2].chatColor,
    teamColors[2].teamColors
  );
}

function quickRestart() {
  room.stopGame();
  setTimeout(() => {
    room.startGame();
  }, 2000);
}

function resumeGame() {
  setTimeout(() => {
    room.startGame();
  }, 2000);
  setTimeout(() => {
    room.pauseGame(false);
  }, 1000);
}

function activateChooseMode() {
  inChooseMode = true;
  slowMode = 2;
  room.sendAnnouncement(`👆 Captains are picking players!`, null, 0xf0ff33);
}

function deactivateChooseMode() {
  inChooseMode = false;
  clearTimeout(timeOutCap);
  if (slowMode != 0) {
    slowMode = 0;
    room.sendAnnouncement(`We continue.`, null, 0xffffff, "bold", 0);
  }
  redCaptainChoice = "";
  blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
  if (map == aloneMap) {
    room.setCustomStadium(aloneMap);
  } else if (map == classicMap) {
    classicMap != ""
      ? room.setCustomStadium(classicMap)
      : room.setDefaultStadium("Classic");
  } else if (map == bigMap) {
    bigMap != "."
      ? room.setCustomStadium(bigMap)
      : room.setDefaultStadium("Big");
  } else {
    room.setCustomStadium(map);
  }
  room.setScoreLimit(scoreLim);
  room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() {
  // update the players' list and all the teams' list
  players = room
    .getPlayerList()
    .filter((player) => player.id != 0 && !getAFK(player));
  teamR = players.filter((p) => p.team === Team.RED);
  teamB = players.filter((p) => p.team === Team.BLUE);
  teamS = players.filter((p) => p.team === Team.SPECTATORS);
}

function handleInactivity() {
  // handles inactivity : players will be kicked after afkLimit
  if (countAFK && teamR.length + teamB.length > 1) {
    for (var i = 0; i < teamR.length; i++) {
      setActivity(teamR[i], getActivity(teamR[i]) + 1);
    }
    for (var i = 0; i < teamB.length; i++) {
      setActivity(teamB[i], getActivity(teamB[i]) + 1);
    }
  }
  for (var i = 0; i < extendedP.length; i++) {
    if (extendedP[i][eP.ACT] == 60 * ((2 / 3) * afkLimit)) {
      room.sendAnnouncement(
        "⛔ @" +
        room.getPlayer(extendedP[i][eP.ID]).name +
        ", If you don't move in the next " +
        Math.floor(afkLimit / 3) +
        " seconds, you will be kicked!",        
        extendedP[i][eP.ID],
        0xff0000,
        "bold",
        2
      );
    }
    if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
      extendedP[i][eP.ACT] = 0;
      if (room.getScores().time <= afkLimit - 0.5) {
        setTimeout(() => {
          !inChooseMode ? quickRestart() : room.stopGame();
        }, 10);
      }
      room.kickPlayer(extendedP[i][eP.ID], "AFK 👻", false);
    }
  }
}

function getAuth(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH]
    : null;
}

function getAFK(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK]
    : null;
}

function setAFK(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.AFK] = value));
}

function getActivity(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT]
    : null;
}

function setActivity(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.ACT] = value));
}

function getGK(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK]
    : null;
}

function setGK(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.GK] = value));
}

function getMute(player) {
  return extendedP.filter((a) => a[0] == player.id) != null
    ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE]
    : null;
}

function setMute(player, value) {
  extendedP
    .filter((a) => a[0] == player.id)
    .forEach((player) => (player[eP.MUTE] = value));
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
  updateTeams();
  if (inChooseMode) {
    if (players.length == 6) {
      loadMap(bigMap, scoreLimitBig, timeLimitBig);
    }
    let playerToSpecList = teamR.length <= teamB.length ? teamR[0] : teamB[0];
    if (playerToSpecList) {
      getSpecList(playerToSpecList);
    }
  }
  balanceTeams();
}

function updateRoleOnPlayerOut() {
  updateTeams();
  if (room.getScores() != null) {
    var scores = room.getScores();
    if (
      players.length >= 2 * maxTeamSize &&
      scores.time >= (5 / 6) * game.scores.timeLimit &&
      teamR.length != teamB.length
    ) {
      if (teamR.length < teamB.length) {
        if (scores.blue - scores.red == 2) {
          endGame(Team.BLUE);
          room.sendChat("🤖 The opponent has ragequit! New game... 🤖");
          setTimeout(() => {
            room.stopGame();
          }, 100);
          return;
        }
      } else {
        if (scores.red - scores.blue == 2) {
          endGame(Team.RED);
          room.sendChat("🤖 The opponent has ragequit! New game... 🤖");
          setTimeout(() => {
            room.stopGame();
          }, 100);
          return;
        }
      }
    }
  }
  if (inChooseMode) {
    if (players.length == 5) {
      loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
    }
    if (teamR.length == 0 || teamB.length == 0) {
      teamR.length == 0
        ? room.setPlayerTeam(teamS[0].id, Team.RED)
        : room.setPlayerTeam(teamS[0].id, Team.BLUE);
      return;
    }
    if (Math.abs(teamR.length - teamB.length) == teamS.length) {
      room.sendChat("🤖 I'm fixing it... 🤖");
      deactivateChooseMode();
      resumeGame();
      var b = teamS.length;
      if (teamR.length > teamB.length) {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
          }, 5 * i);
        }
      } else {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.RED);
          }, 5 * i);
        }
      }
      return;
    }
    if (streak == 0 && room.getScores() == null) {
      if (Math.abs(teamR.length - teamB.length) == 2) {
        // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
        room.sendChat("🤖 I'm balancing the teams... 🤖");
        teamR.length > teamB.length
          ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS)
          : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
      }
    }
    if (teamR.length == teamB.length && teamS.length < 2) {
      deactivateChooseMode();
      resumeGame();
      return;
    }
    capLeft
      ? choosePlayer()
      : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
  }
  balanceTeams();
}

function balanceTeams() {
  if (!inChooseMode) {
    if (players.length == 1 && teamR.length == 0) {
      quickRestart();
      loadMap(aloneMap, 0, 0);
      room.setPlayerTeam(players[0].id, Team.RED);
    } else if (
      Math.abs(teamR.length - teamB.length) == teamS.length &&
      teamS.length > 0
    ) {
      const n = Math.abs(teamR.length - teamB.length);
      if (players.length == 2) {
        quickRestart();
        loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
      }
      if (teamR.length > teamB.length) {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamS[i].id, Team.BLUE);
        }
      } else {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamS[i].id, Team.RED);
        }
      }
    } else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
      const n = Math.abs(teamR.length - teamB.length);
      if (players.length == 1) {
        quickRestart();
        loadMap(aloneMap, 0, 0);
        room.setPlayerTeam(players[0].id, Team.RED);
        return;
      } else if (players.length == 5) {
        quickRestart();
        loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
      }
      if (players.length == maxTeamSize * 2 - 1) {
        allReds = [];
        allBlues = [];
      }
      if (teamR.length > teamB.length) {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
      } else {
        for (var i = 0; i < n; i++) {
          room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
      }
    } else if (
      Math.abs(teamR.length - teamB.length) < teamS.length &&
      teamR.length != teamB.length
    ) {
      room.pauseGame(true);
      activateChooseMode();
      choosePlayer();
    } else if (
      teamS.length >= 2 &&
      teamR.length == teamB.length &&
      teamR.length < maxTeamSize
    ) {
      if (teamR.length == 2) {
        quickRestart();
        loadMap(bigMap, scoreLimitBig, timeLimitBig);
      }
      topBtn();
    }
  }
}

function choosePlayer() {
  clearTimeout(timeOutCap);
  if (teamR.length <= teamB.length && teamR.length != 0) {
    room.sendAnnouncement(
      "To choose a player, type the number from the spec list or type 'top', 'random' or 'bottom'.",
      teamR[0].id,
      0xf0ff33,
      "normal",
      1
    );
    timeOutCap = setTimeout(
      function (player) {
        room.sendAnnouncement(
          "Hurry up @" +
            player.name +
            ", only " +
            Number.parseInt(chooseTime / 2) +
            " seconds left to choose!",
          player.id
        );
        timeOutCap = setTimeout(
          function (player) {
            room.kickPlayer(player.id, "You didn’t choose in time!", false);
          },
          chooseTime * 500,
          teamR[0]
        );
      },
      chooseTime * 1000,
      teamR[0]
    );
  } else if (teamB.length < teamR.length && teamB.length != 0) {
    room.sendAnnouncement(
      "To choose a player, type the number from the spec list or type 'top', 'random' or 'bottom'.",
      teamB[0].id,
      0xf0ff33,
      "normal",
      1
    );
    timeOutCap = setTimeout(
      function (player) {
        room.sendAnnouncement(
          "Hurry up @" +
            player.name +
            ", only " +
            Number.parseInt(chooseTime / 2) +
            " seconds left to choose!",
          player.id
        );
        timeOutCap = setTimeout(
          function (player) {
            room.kickPlayer(player.id, "You didn’t choose in time!", false);
          },
          chooseTime * 500,
          teamB[0]
        );
      },
      chooseTime * 1000,
      teamB[0]
    );
  }
  if (teamR.length != 0 && teamB.length != 0)
    getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}


function getSpecList(player) {
  if (!player || !player.id) {
    console.error("Invalid player passed to getSpecList");
    return;
  }
  var cstm = "Player list: ";
  for (var i = 0; i < teamS.length; i++) {
    if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
      room.sendAnnouncement(cstm, player.id, null, "bold", 1);
      cstm = "... ";
    }
    cstm += teamS[i].name + "[" + (i + 1) + "], ";
  }
  cstm = cstm.substring(0, cstm.length - 2);
  cstm += ".";
  room.sendAnnouncement(cstm, player.id, null, "bold", 1);
}

function announcePlayers() {
  var players = room.getPlayerList();
  var playerData = [];

  players.forEach((player) => {
    if (player.id >= 1) {
      var stats;

      var auth = getAuth(player); // Function to get auth for the player
      var rawData = localStorage.getItem(auth);

      if (rawData) {
        try {
          stats = JSON.parse(rawData);
        } catch (e) {
          console.error(`Error parsing data for ${player.name}:`, e);
          stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            0,
            "0.00",
          ]; // Default stats
        }
      } else {
        stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]; // Default stats
      }

      let playerOC =
        stats[Ss.OC] !== undefined ? parseFloat(stats[Ss.OC]) : NaN;
      playerData.push({ name: player.name, oc: playerOC });
    }
  });

  // Sort players by OC in descending order
  playerData.sort((a, b) => b.oc - a.oc);

  var message = `┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓\n┃🌠 Player ratings: `;

  playerData.forEach((player, index) => {
    message += `${player.name} [${
      isNaN(player.oc) ? "NaN" : player.oc.toFixed(2)
    }]`;

    // Add a comma and space if it's not the last player
    if (index < playerData.length - 1) {
      message += ", ";
    }
  });

  message += `\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛\n`;
  room.sendAnnouncement(message, null, 0xd402ff, "bold", 0);
}

setInterval(announcePlayers, 910000);

function announceTeams() {
  var players = room.getPlayerList();
  var redTeamOC = [];
  var blueTeamOC = [];

  players.forEach((player) => {
    if (player.id >= 1) {
      var stats;
      var auth = getAuth(player);
      var rawData = localStorage.getItem(auth);

      if (rawData) {
        try {
          stats = JSON.parse(rawData);
        } catch (e) {
          console.error(`Error parsing data for ${player.name}:`, e);
          stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            0,
            "0.00",
          ];
        }
      } else {
        stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ];
      }

      let playerOC =
        stats[Ss.OC] !== undefined ? parseFloat(stats[Ss.OC]) : NaN;

      if (player.team === 1) {
        // Red team
        redTeamOC.push(playerOC);
      } else if (player.team === 2) {
        // Blue team
        blueTeamOC.push(playerOC);
      }
    }
  });

  if (redTeamOC.length >= 3 && blueTeamOC.length >= 3) {
    let avgRedOC = (
      redTeamOC.reduce((acc, val) => acc + val, 0) / redTeamOC.length
    ).toFixed(2);
    let avgBlueOC = (
      blueTeamOC.reduce((acc, val) => acc + val, 0) / blueTeamOC.length
    ).toFixed(2);

    // Convert averages to probabilities
    let impliedProbRed = 1 / (1 + Math.exp(avgBlueOC - avgRedOC));
    let impliedProbBlue = 1 - impliedProbRed;

    // Margin and odds adjustment
    let margin = 0.1; // House margin
    let adjustedProbRed = impliedProbRed / (1 + margin);
    let adjustedProbBlue = impliedProbBlue / (1 + margin);

    let sumAdjustedProbs = adjustedProbRed + adjustedProbBlue;
    adjustedProbRed /= sumAdjustedProbs;
    adjustedProbBlue /= sumAdjustedProbs;

    oddsRed = (1 / adjustedProbRed).toFixed(2);
    oddsBlue = (1 / adjustedProbBlue).toFixed(2);

    // Ensure odds are not lower than 1.01
    oddsRed = Math.max(oddsRed, 1.01);
    oddsBlue = Math.max(oddsBlue, 1.01);

    // Store odds in localStorage
    localStorage.setItem(
      "odds",
      JSON.stringify({ red: oddsRed, blue: oddsBlue })
    );

    console.log(`Odds Red: ${oddsRed}, Odds Blue: ${oddsBlue}`); // Debugging line

    var message = `LIVE Betting ( !bet ) odds: Red [${oddsRed}] Blue [${oddsBlue}]\n`;
    // Crveni → Red
    // Plavi → Blue
    
    } else {
      var message = `Not enough players for betting.`;
    }

  setTimeout(function () {
    room.sendAnnouncement(message, null, 0x015fb0, "bold", 0);
  }, 2000);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
  const ballPosition = room.getBallPosition();
  updateTeams();
  for (var i = 0; i < players.length; i++) {
    if (players[i].position != null) {
      var distanceToBall = pointDistance(players[i].position, ballPosition);
      if (distanceToBall < triggerDistance) {
        !activePlay ? (activePlay = true) : null;
        if (
          lastTeamTouched == players[i].team &&
          lastPlayersTouched[0] != null &&
          lastPlayersTouched[0].id != players[i].id
        ) {
          lastPlayersTouched[1] = lastPlayersTouched[0];
          lastPlayersTouched[0] = players[i];
        }
        lastTeamTouched = players[i].team;
      }
    }
  }
}

function getStats() {
  // gives possession, ball speed and GK of each team
  if (activePlay) {
    updateTeams();
    lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
    var ballPosition = room.getBallPosition();
    point[1] = point[0];
    point[0] = ballPosition;
    ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
    var k = [-1, Infinity];
    for (var i = 0; i < teamR.length; i++) {
      if (teamR[i].position.x < k[1]) {
        k[0] = teamR[i];
        k[1] = teamR[i].position.x;
      }
    }
    k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
    k = [-1, -Infinity];
    for (var i = 0; i < teamB.length; i++) {
      if (teamB[i].position.x > k[1]) {
        k[0] = teamB[i];
        k[1] = teamB[i].position.x;
      }
    }
    k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
    findGK();
  }
}

function updateStats() {
  if (
    players.length >= 2 * maxTeamSize &&
    (game.scores.time >= (5 / 6) * game.scores.timeLimit ||
      game.scores.red == game.scores.scoreLimit ||
      game.scores.blue == game.scores.scoreLimit) &&
    allReds.length >= maxTeamSize &&
    allBlues.length >= maxTeamSize
  ) {
    var stats;
    for (var i = 0; i < allReds.length; i++) {
      localStorage.getItem(getAuth(allReds[i]))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            allReds[i].name,
          ]);
      stats[Ss.GA]++;
      lastWinner == Team.RED
        ? stats[Ss.WI]++
        : lastWinner == Team.BLUE
        ? stats[Ss.LS]++
        : stats[Ss.DR]++;
      stats[Ss.WR] = ((100 * stats[Ss.WI]) / stats[Ss.GA]).toPrecision(3);
      stats[Ss.OC] = (
        (stats[Ss.WI] -
          stats[Ss.LS] +
          stats[Ss.GL] +
          stats[Ss.AS] +
          stats[Ss.CS]) /
        stats[Ss.GA]
      ).toPrecision(3);
      stats[Ss.GP] = (stats[Ss.GL] / stats[Ss.GA]).toPrecision(2);
      stats[Ss.AP] = (stats[Ss.AS] / stats[Ss.GA]).toPrecision(2);
      localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < allBlues.length; i++) {
      localStorage.getItem(getAuth(allBlues[i]))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            allBlues[i].name,
          ]);
      stats[Ss.GA]++;
      lastWinner == Team.BLUE
        ? stats[Ss.WI]++
        : lastWinner == Team.RED
        ? stats[Ss.LS]++
        : stats[Ss.DR]++;
      stats[Ss.WR] = ((100 * stats[Ss.WI]) / stats[Ss.GA]).toPrecision(3);
      stats[Ss.OC] = (
        (stats[Ss.WI] -
          stats[Ss.LS] +
          stats[Ss.GL] +
          stats[Ss.AS] +
          stats[Ss.CS]) /
        stats[Ss.GA]
      ).toPrecision(3);
      stats[Ss.GP] = (stats[Ss.GL] / stats[Ss.GA]).toPrecision(2);
      stats[Ss.AP] = (stats[Ss.AS] / stats[Ss.GA]).toPrecision(2);
      localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
    }
    for (var i = 0; i < game.goals.length; i++) {
      if (game.goals[i].striker != null) {
        if (
          allBlues
            .concat(allReds)
            .findIndex((player) => player.id == game.goals[i].striker.id) != -1
        ) {
          stats = JSON.parse(
            localStorage.getItem(getAuth(game.goals[i].striker))
          );
          stats[Ss.GL]++;
          stats[Ss.PT]++;
          stats[Ss.GP] = (stats[Ss.GL] / stats[Ss.GA]).toPrecision(2);
          localStorage.setItem(
            getAuth(game.goals[i].striker),
            JSON.stringify(stats)
          );
        }
      }
      if (game.goals[i].assist != null) {
        if (
          allBlues
            .concat(allReds)
            .findIndex((player) => player.name == game.goals[i].assist.name) !=
          -1
        ) {
          stats = JSON.parse(
            localStorage.getItem(getAuth(game.goals[i].assist))
          );
          stats[Ss.AS]++;
          stats[Ss.PT]++;
          stats[Ss.AP] = (stats[Ss.AS] / stats[Ss.GA]).toPrecision(2);
          localStorage.setItem(
            getAuth(game.goals[i].assist),
            JSON.stringify(stats)
          );
        }
      }
    }
    if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
      stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
      stats[Ss.GK]++;
      game.scores.blue == 0 ? (stats[Ss.CS]++, (stats[Ss.PT] += 2)) : null;
      stats[Ss.CP] = ((100 * stats[Ss.CS]) / stats[Ss.GK]).toPrecision(3);
      localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
    }
    if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
      stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
      stats[Ss.GK]++;
      game.scores.red == 0 ? (stats[Ss.CS]++, (stats[Ss.PT] += 2)) : null;
      stats[Ss.CP] = ((100 * stats[Ss.CS]) / stats[Ss.GK]).toPrecision(3);
      localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
    }
  }
}

function findGK() {
  var tab = [
    [-1, ""],
    [-1, ""],
  ];
  for (var i = 0; i < extendedP.length; i++) {
    if (
      room.getPlayer(extendedP[i][eP.ID]) != null &&
      room.getPlayer(extendedP[i][eP.ID]).team == Team.RED
    ) {
      if (tab[0][0] < extendedP[i][eP.GK]) {
        tab[0][0] = extendedP[i][eP.GK];
        tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
      }
    } else if (
      room.getPlayer(extendedP[i][eP.ID]) != null &&
      room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE
    ) {
      if (tab[1][0] < extendedP[i][eP.GK]) {
        tab[1][0] = extendedP[i][eP.GK];
        tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
      }
    }
  }
  GKList = [tab[0][1], tab[1][1]];
}

let blacklist = [];

/* EVENTS */
function isBlacklisted(player) {
  return (
    blacklist.filter((b) => b.Auth == player.auth || b.Conn == player.conn)
      .length > 0
  );
}

const webhookURL = "https://discord.com/api/webhooks/1314283020219580486/NXOMyfqw39THTdSO70xlTaq0PJAtCfm0_5t6P0Bq1h1Zsom_oHGSracuj2rGFT8YcvE2";

function sendDiscordMessage(content) {
    const payload = {
        content: null,
        embeds: [
            {
                title: `Valentino (${room.getPlayerList().length - 1}/20)`,
                description: content,
                color: 0x9b59b6,
                footer: {
                    text: `[ ${room.getPlayerList().length - 1} / 20 ] • ${new Date().toLocaleTimeString()}`,
                },
            },
        ],
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    }).catch((err) => console.error("Error sending webhook:", err));
}

function formatTeamEmbed() {
    const allPlayers = room.getPlayerList().filter((p) => p.id !== 0);

    const formatPlayers = (team) =>
        allPlayers
            .filter((p) => p.team === team)
            .map((p) => `${team === 1 ? "🔴" : team === 2 ? "🔵" : "⚪"} ${p.name}`)
            .join("\n") || "❌";

    const redTeam = formatPlayers(1);
    const blueTeam = formatPlayers(2);
    const spectators = formatPlayers(0);

    return `**Red Team**\n${redTeam}\n\n**Spectators**\n${spectators}\n\n**Blue Team**\n${blueTeam}`;
}

function updateTeamEmbed(action, player) {
    const actionText = action === "join" 
        ? `🔵 **${player.name}** joined!` 
        : `🔴 **${player.name}** left!`;

    const embedContent = `${formatTeamEmbed()}\n\n${actionText}`;
    sendDiscordMessage(embedContent);
}

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
  // Ghost kick logic
  let existingPlayer = Array.from(playerDataMap.values()).find(
    (p) =>
      (p.auth === player.auth || p.conn === player.conn) && p.id !== player.id
  );
  if (existingPlayer) {
    // room.kickPlayer(player.id, "Ghost kick", false); // Use `false` for kicking instead of banning
    console.log(`Kicked player ${player.name} with ID: ${player.id}`);
  }
  // Store the player data
  playerDataMap.set(player.id, {
    name: player.name,
    auth: player.auth,
    conn: player.conn,
  });
  updateTeamEmbed("join", player);
  discord_message_auth(
    `🟢 ${player.name} has joined! \n**A**: ${player.auth}\n**C**: ${player.conn}`
  );
  if (isBlacklisted(player))
    room.kickPlayer(player.id, "You are banned forever!", true);
  room.setPlayerAvatar(player.id, " ⠀");
  if (room.getPlayerList().length >= 19) {
    room.setPassword("sev3n1z01l");
    room.sendAnnouncement(
      "The room is now closed. Only master admins with the password can join."
    );
  }
  extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
  updateRoleOnPlayerIn();
  room.sendAnnouncement(
    `╔═════════════════════════════════╗ 
  👋 Hello ${player.name}! Type !help for a list of commands.
╚═════════════════════════════════╝`,
    player.id,
    0xac43fc
  );  
  if (localStorage.getItem(player.auth) != null) {
    let playerData = JSON.parse(localStorage.getItem(player.auth));
    if (playerData[Ss.RL] != "player") {
      room.setPlayerAdmin(player.id, true);
      room.sendAnnouncement(
        (playerData[Ss.RL] == "master" ? "Master " : "Admin ") +
          player.name +
          " has just joined!"
      );
    }
  }
  var auth = getAuth(player);
  if (localStorage.getItem(auth)) {
    var stats = JSON.parse(localStorage.getItem(auth));
    var avatarId = stats[Ss.AV]; // Assume Ss.AV is the index for avatar ID in stats
    if (avatarId) {
      room.setPlayerAvatar(player.id, avatarId);
    }
  }
};


room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
  if (changedPlayer.id == 0) {
    room.setPlayerTeam(0, Team.SPECTATORS);
    return;
  }
  if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
    room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
    room.sendAnnouncement(changedPlayer.name + " is AFK ! ☕");
    return;
  }
  updateTeams();
  if (room.getScores() != null) {
    var scores = room.getScores();
    if (
      changedPlayer.team != Team.SPECTATORS &&
      scores.time <= (3 / 4) * scores.timeLimit &&
      Math.abs(scores.blue - scores.red) < 2
    ) {
      changedPlayer.team == Team.RED
        ? allReds.push(changedPlayer)
        : allBlues.push(changedPlayer);
    }
  }
  if (changedPlayer.team == Team.SPECTATORS) {
    setActivity(changedPlayer, 0);
  }
  if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
    if (Math.abs(teamR.length - teamB.length) == teamS.length) {
      deactivateChooseMode();
      resumeGame();
      var b = teamS.length;
      if (teamR.length > teamB.length) {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
          }, 200 * i);
        }
      } else {
        for (var i = 0; i < b; i++) {
          setTimeout(() => {
            room.setPlayerTeam(teamS[0].id, Team.RED);
          }, 200 * i);
        }
      }
      return;
    } else if (
      (teamR.length == maxTeamSize && teamB.length == maxTeamSize) ||
      (teamR.length == teamB.length && teamS.length < 2)
    ) {
      deactivateChooseMode();
      resumeGame();
    } else if (teamR.length <= teamB.length && redCaptainChoice != "") {
      // choice remembered
      redCaptainChoice == "top"
        ? room.setPlayerTeam(teamS[0].id, Team.RED)
        : redCaptainChoice == "random"
        ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED)
        : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
      return;
    } else if (teamB.length < teamR.length && blueCaptainChoice != "") {
      blueCaptainChoice == "top"
        ? room.setPlayerTeam(teamS[0].id, Team.BLUE)
        : blueCaptainChoice == "random"
        ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE)
        : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
      return;
    } else {
      choosePlayer();
    }
  }
};

room.onPlayerLeave = function (player) {
    discord_message_auth(`🔴 ${player.name} has left!`);
    updateTeamEmbed("leave", player);
    if (Array.isArray(teamR) && Array.isArray(teamB)) {
      if (
        teamR.findIndex((red) => red.id == player.id) === 0 &&
        inChooseMode &&
        teamR.length <= teamB.length
      ) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
          capLeft = false;
        }, 10);
      }
      if (
        teamB.findIndex((blue) => blue.id == player.id) === 0 &&
        inChooseMode &&
        teamB.length < teamR.length
      ) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
          capLeft = false;
        }, 10);
      }
  
      // Check if the player is in teamR or teamB
      const isInTeamR = teamR.some((red) => red.id === player.id);
      const isInTeamB = teamB.some((blue) => blue.id === player.id);
  
      if (isInTeamR || isInTeamB) {
        if (bettingOpen) {
          // Process refund logic
          if (Array.isArray(game.bets) && game.bets.length > 0) {
            console.log(
              `Player ${player.name} was part of a playing team and has left. Refunding bets...`
            );
  
            // Refund bets
            game.bets.forEach((bet) => {
              let auth = getAuth({ id: bet.playerId });
              let playerStats = JSON.parse(localStorage.getItem(auth)) || [
                0,
                0,
                0,
                0,
                "0.00",
                0,
                0,
                0,
                0,
                "0.00",
                "0.00",
                "0.00",
                0,
                "0.00",
                "Unknown Player",
              ];
  
              // Refund the bet amount
              playerStats[Ss.PT] += bet.amount;
              localStorage.setItem(auth, JSON.stringify(playerStats));
  
              // Get the player who placed the bet
              let betPlayer = findPlayerById(bet.playerId);
              if (betPlayer) {
                // Announce the refund
                room.sendAnnouncement(
                  `${betPlayer.name}, your bet of ${bet.amount} 💰 has been refunded because the player left the game.`,
                  betPlayer.id,
                  0x015fb0,
                  "normal",                
                  2
                );
              }
            });
  
            // Clear bets
            game.bets = [];
          }
        } else {
          console.log("Betting is closed. No refunds are processed.");
        }
      }
    } else {
      console.warn("teamR or teamB is not defined or is not an array.");
    }
  
    // Other existing logic
    setActivity(player, 0);
    updateTeams();
    updateRoleOnPlayerOut();
  
    if (playerDataMap.has(player.id)) {
      playerDataMap.delete(player.id);
    }
  
    if (room.getPlayerList().length === 16) {
      room.setPassword();
    }
  };
  

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
  const webhookURL =
    "https://discord.com/api/webhooks/1313222554928021566/VStOEsdj-X2fwFrIb5Y6z8zJuD4gyhN44zqlb8Yx9l4mbJV6jt1qEbyiEu8Uq_pXHtoB";
  ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
};

/* PLAYER ACTIVITY */

function Essage(playerName, message) {
  playerName = playerName.replace(/@/g, "@ ");
  message = message.replace(/@/g, "@ ").replace(/#/g, "ㅤ#");
  message = message.replace(/\*|\*\*|__|~/g, "");
  message = message.replace(/`/g, "");
  return `📝**${playerName}**: ${message}`;
}

room.onPlayerChat = function (player, message) {
  var lowerCaseMessage = message.toLowerCase();

  // Define an array of words to check
  var blockedWords = [
    "nigger", "https", "gg", "𒀱", "꧁", "꧂", "⎝⎝⎠⎠", "𒋨", "「", "」", "﷽", "乡", "ᐇ", "𐂡", "𒅒᭄", "ه", "sex", "dick", "orospu", "cazzo", "vaffanculo"];  
  // Check if the message contains any of the blocked words
  for (var i = 0; i < blockedWords.length; i++) {
    if (
      lowerCaseMessage.includes(blockedWords[i]) ||
      !lowerCaseMessage == "have"
    ) {
      // Do not display the message
      return false;
    }
  }

  if (message.startsWith(avatarCommand)) {
    var avatarId = message
      .substring(avatarCommand.length)
      .trim()
      .replace(/^"|"$/g, "");

    if (avatarId) {
      var auth = getAuth(player);
      var stats;
      if (localStorage.getItem(auth)) {
        stats = JSON.parse(localStorage.getItem(auth));
      } else {
        stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
          "",
        ]; // Added extra element for avatar ID
      }

      if (stats[Ss.GA] > 19) {
        room.setPlayerAvatar(player.id, avatarId);

        // Save the avatar ID in stats
        stats[Ss.AV] = avatarId; // Assume Ss.AV is the index for avatar ID in stats

        // Update localStorage
        localStorage.setItem(auth, JSON.stringify(stats));

        if (!SMSet.has(player.id)) {
          SMSet.add(player.id);
          var id = [player.id, auth, player.conn];
        }

        return false;
      } else {
        room.sendAnnouncement(
          "You need 20 matches to change your avatar.",
          player.id,
          0xff0000,
          "bold",
          2
        );

        return false;
      }
    } else {
      //console.log("Avatar ID not specified in message:", message);
    }
  }

  discord_message(Essage(player.name, message));
  if (message == "!p") pauseFunction(player);
  let prefixTeamChatString = "t ";

  if (message.substr(0, prefixTeamChatString.length) == prefixTeamChatString) {
    room
      .getPlayerList()
      .filter((callback) => callback.team == player.team)
      .forEach((callback) => {
        room.sendAnnouncement(
          ` ${player.name}: ${message.substr(prefixTeamChatString.length)}`,
          callback.id,
          player.team == 1 ? 0xff0000 : player.team == 0 ? 0xb2b2b2 : 0x1b89f7
        );
      });
    return false;
  }
  if (message.startsWith("#")) {
    message = message.substr(1).trim(); // Remove the '#' character
    if (message.indexOf(" ") !== -1) {
      let args = message.match(/^(\S+)\s(.*)/).slice(1);

      if (args.length > 1) {
        var pmMsg = args[1];
        var players = room.getPlayerList();
        var pmSent = false;

        //console.log("PM command detected. Target ID:", args[0], "Message:", pmMsg); // Debug

        players.forEach(function (pmPlayer) {
          // console.log("Checking player:", pmPlayer.id); // Debug
          if (pmPlayer.id == args[0]) {
            // Ensure comparison is correct
            whisper(
              "[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg,
              player.id,
              0xff20ff,
              "normal",
              1
            );
            whisper(
              "[PM] " + player.name + ": " + pmMsg,
              pmPlayer.id,
              0xff20ff,
              "normal",
              1
            );
            pmSent = true;
            // console.log("PM sent to player:", pmPlayer.name); // Debug
          }
        });
        if (pmSent == false) {
          whisper(
            "Cannot find user with ID '" + args[0] + "'",
            player.id,
            0xff20ff,
            "normal",
            1
          );
          // console.log("User with ID not found:", args[0]); // Debug
        }
        return false;
      }
    }
  }
  var index = commands.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.PT] > 79) {
      if (!SMSet.has(player.auth)) {
        SMSet.add(player.auth);
        setTimeout(
          (auth) => {
            SMSet.delete(auth);
          },
          120000,
          player.auth
        );
  
        id.push(player.id, player.auth, player.conn);
        room.reorderPlayers(id, Boolean(index));
        room.sendChat(
          `${player.name} has used the instantpick. A new instantpick will be available for purchase in 2 minutes!`,
          null,
          0x5ee7ff,
          "normal",
          2
        );
  
        if (typeof stats[Ss.PT] === "number") {
          stats[Ss.PT] -= 80;
          localStorage.setItem(getAuth(player), JSON.stringify(stats));
        }
      }
    } else if (stats[Ss.PT] < 80) {
      room.sendAnnouncement(
        "You don't have enough 💰. 80 is required.",
        player.id,
        0xff0000,
        "bold"
      );
    } else {
      room.sendAnnouncement(
        "You can use the instantpick again in 2 minutes.",
        player.id,
        0xff0000,
        "italic"
      );
      return false;
    }
  }  
  var index = command.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);

        if (stats[Ss.PT] > 0) {
          if (!SMSet.has(player.id)) {
            SMSet.add(player.id);
            setTimeout(
              (number) => {
                SMSet.delete(number);
              },
              180000,
              player.id
            );
            id.push(player.id, player.auth, player.conn);
            room.sendChat(
              `${player.name} bought a beer and starts drinking like a beast. The next beer can be bought in 3 minutes.`,
              null,
              0x5ee7ff,
              "normal",
              2
            );
            if (typeof stats[Ss.PT] === "number") {
              stats[Ss.PT] -= 1;
              localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
          }
        } else if (stats[Ss.PT] < 1) {
          room.sendAnnouncement(
            "You don't have enough 💰. 1 is required.",
            player.id,
            0xff0000,
            "bold"
          );
        }
      }        
  var index = commandz.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.PT] > 989) {
      room.setTeamColors(
        1,
        teamColors[1].angle,
        teamColors[1].chatColor,
        teamColors[1].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[3].angle,
        teamColors[3].chatColor,
        teamColors[3].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        id.push(player.id, player.auth, player.conn);
        room.sendAnnouncement(
          `${player.name} bought a jersey!`,
          null,
          0x5ee7ff,
          "normal",
          2
        );
        if (typeof stats[Ss.PT] === "number") {
          stats[Ss.PT] -= 990;
          localStorage.setItem(getAuth(player), JSON.stringify(stats));
        }
      } else if (stats[Ss.PT] < 990) {
        room.sendAnnouncement(
          "You don't have enough 💰. 990 is required.",
          player.id,
          0xff0000,
          "bold"
        );
      }
    }
  }
  var index = dres2.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.GA] > 9 && stats[Ss.PT] > 20) {
      room.setTeamColors(
        1,
        teamColors[4].angle,
        teamColors[4].chatColor,
        teamColors[4].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[5].angle,
        teamColors[5].chatColor,
        teamColors[5].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} spent 20 credits and bought a jersey!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 20;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
        } else if (stats[Ss.PT] < 20 && stats[Ss.GA] < 10) {
          room.sendAnnouncement(
            "You need 20💰 and 10 matches to use this jersey.",
            player.id,
            0xff0000,
            "bold"
          );
        }
      }
    }        
  var index = dres3.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.GL] > 9 && stats[Ss.PT] > 29) {
      room.setTeamColors(
        1,
        teamColors[6].angle,
        teamColors[6].chatColor,
        teamColors[6].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[7].angle,
        teamColors[7].chatColor,
        teamColors[7].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} spent 30 credits and bought a jersey!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 30;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    } else if (stats[Ss.GL] < 10 && stats[Ss.PT] < 30) {
      room.sendAnnouncement(
        "You need 20💰 and 10 matches to use this jersey",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  var index = dres4.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.AS] > 24 && stats[Ss.PT] > 39) {
      room.setTeamColors(
        1,
        teamColors[8].angle,
        teamColors[8].chatColor,
        teamColors[8].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[9].angle,
        teamColors[9].chatColor,
        teamColors[9].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} spent 40 credits and bought a jersey!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 40;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    } else if (stats[Ss.AS] < 25 && stats[Ss.PT] < 40) {
      room.sendAnnouncement(
        "You need 40💰 and 25 assists to use this jersey.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  var index = dres5.indexOf(message);
  if (index !== -1) {
    var id = [];
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    if (stats[Ss.CS] > 14 && stats[Ss.PT] > 50) {
      room.setTeamColors(
        1,
        teamColors[10].angle,
        teamColors[10].chatColor,
        teamColors[10].teamColors
      );
      room.setTeamColors(
        2,
        teamColors[11].angle,
        teamColors[11].chatColor,
        teamColors[11].teamColors
      );
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          600000,
          player.id
        );
        id.push(player.id, player.auth, player.conn);
        room.sendChat(
          `${player.name} you spent 50 credits and bought a jersey!`,
          player.id,
          0x5ee7ff,
          "normal",
          2
        );
        stats[Ss.PT] -= 50;
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    } else if (stats[Ss.CS] < 15 && stats[Ss.PT] < 50) {
      room.sendAnnouncement(
        "You need 50💰 and 15 clean sheets to use this jersey.",
        player.id,
        0xff0000,
        "bold"
      );
    }
  }
  message = message.split(/ +/);
  player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
  if (["!ws"].includes(message[0].toLowerCase())) {
    if (winstreakrecordplayers[0] == undefined) {
      room.sendAnnouncement(
        `There is currently no streak record`,
        player.id,
        0xff0000,
        "normal",
        0
      );
    } else {
      let kifa = "";
      for (i = 0; i < maxTeamSize; i++) {
        if (i == maxTeamSize - 1) {
          kifa += " and " + winstreakrecordplayers[i];
        } else {
          kifa += winstreakrecordplayers[i] + ", ";
        }
      }
      room.sendAnnouncement(
        "The Reds have " + streak + " consecutive wins",
        player.id,
        0xff0000,
        "normal",
        0
      );
      room.sendAnnouncement(
        `The record is held by ${kifa} with ${winstreakrecord} wins`,
        player.id,
        0xff0000,
        "normal",
        0
      );
    }
  }  
  if (["!pomoc", "!help"].includes(message[0].toLowerCase())) {
    room.sendAnnouncement(
      "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
      player.id,
      0x2eff00,
      "bold",
      0
    );
    room.sendAnnouncement(
      "┃Commands : !me, !afk, !bans, !bet",
      player.id,
      0x2eff00,
      "bold",
      0
    );
    room.sendAnnouncement(
      "┃!p, !avatar, !buy, !jerseys, !pay, !ws, t, !discord.",
      player.id,
      0x2eff00,
      "bold",
      0
    );
    player.admin
      ? room.sendAnnouncement(
          "┃Admin commands : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans, !rr, !slow <duration>, !endslow",
          player.id,
          0x2eff00,
          "bold",
          0
        )
      : null;
    room.sendAnnouncement(
      "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
      player.id,
      0x2eff00,
      "bold",
      0
    );
  } else if (["!afk"].includes(message[0].toLowerCase())) {
    var players = room.getPlayerList(); // Define players variable here

    if (players.length != 1 && player.team != Team.SPECTATORS) {
      if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
        room.setPlayerTeam(player.id, Team.SPECTATORS);
      } else {
        room.sendAnnouncement(
          "You cannot be AFK while on a team 😨!",
          player.id
        );
        return false;
      }
    } else if (players.length == 1 && !getAFK(player)) {
      room.setPlayerTeam(player.id, Team.SPECTATORS);
    }
    setAFK(player, !getAFK(player));
    room.sendAnnouncement(
      player.name +
        (getAFK(player) ? " is AFK! ☕" : " Teams can select you again!"),
      null,
      0xffffff,
      "italic",
      0
    );    
    getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"]);
    // setTimeout(() => {
    // if (getAFK(player) && stats[Ss.RL] != "vip") {
    // room.kickPlayer(player.id, "AFK timeout", false);
    // }
    // }, 30 * 60 * 1000);
    // return false;
  } else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
    var cstm = "AFK List : ";
    for (var i = 0; i < extendedP.length; i++) {
      if (
        room.getPlayer(extendedP[i][eP.ID]) != null &&
        getAFK(room.getPlayer(extendedP[i][eP.ID]))
      ) {
        if (
          140 - cstm.length <
          (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length
        ) {
          room.sendChat(cstm, player.id);
          cstm = "... ";
        }
        cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
      }
    }
    if (cstm == "AFK List : ") {
      room.sendAnnouncement(
        "There's nobody in the AFK List !",
        player.id,
        0x15781a,
        "bold"
      );
      return false;
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id, 0x15781a);
  } else if (
    ["!discord", "!dsc", "!disc", "!disk"].includes(message[0].toLowerCase())
  ) {
    room.sendAnnouncement(
      "" + player.name + ", please join our discord ---> discord.gg/kSAxU5fMtQ",
      player.id,
      0xd402ff,
      "normal",
      0
    );
  } else if (["!ja", "!me", "!stats"].includes(message[0].toLowerCase())) {
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);
    room.sendAnnouncement(
      "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
      player.id,
      0x00ff00,
      "normal",
      0
    );
    room.sendAnnouncement(
      "┃" +
        player.name +
        ": Matches: " +
        stats[Ss.GA] +
        ", Wins: " +
        stats[Ss.WI] +
        "(" +
        stats[Ss.WR] +
        "%)" +
        ", Losses: " +
        stats[Ss.LS] +
        ", Goals: " +
        stats[Ss.GL] +
        ", Assists: " +
        stats[Ss.AS],
      player.id,
      0x00ff00,
      "normal",
      0
    );
    room.sendAnnouncement(
      "┃Goals per match: " +
        stats[Ss.GP] +
        ", Assists per match: " +
        stats[Ss.AP] +
        ", Goalkeeper: " +
        stats[Ss.GK] +
        ", Clean Sheets: " +
        stats[Ss.CS] +
        "(" +
        stats[Ss.CP] +
        "%)",
      player.id,
      0x00ff00,
      "normal",
      0
    );    
    //room.sendAnnouncement("┃🌠 Ocena igrača: " + stats[Ss.OC] + " ┃ " + stats[Ss.PT] + " 💰HaxCoins", player.id, 0x00FF00,"normal", 0);
    room.sendAnnouncement(
      "┃🌠 Player rating: " +
        stats[Ss.OC] +
        " ┃ " +
        Math.floor(stats[Ss.PT]) +
        " 💰HaxCoins",
      player.id,
      0x00ff00,
      "normal",
      0
    );
    room.sendAnnouncement(
      "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
      player.id,
      0x00ff00,
      "normal",
      0
    );
  } else if (["!buy", "!shop"].includes(message[0].toLowerCase())) {
    var stats;
    localStorage.getItem(getAuth(player))
      ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
      : (stats = [
          0,
          0,
          0,
          0,
          "0.00",
          0,
          0,
          0,
          0,
          "0.00",
          "0.00",
          "0.00",
          "0.00",
          0,
          "0.00",
        ]);

        if (stats[Ss.GA] < 1) {
          room.sendChat(
            "❗ You must play at least one 3v3 match to use this command ❗",
            player.id,
            0xffffff,
            "normal",
            0
          );        
    } else {
      room.sendAnnouncement(
        "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
        player.id,
        0xac43fc,
        "bold",
        0
      );
      room.sendAnnouncement(
        "┃Commands: !buyItem, (e.g., !buyMute). ▌ You have: " +
          Math.floor(stats[Ss.PT]) +
          " 💰HaxCoins",
        player.id,
        0xac43fc,
        "bold",
        0
      );      
      room.sendAnnouncement(
        "┃ ▌Dres6(990💰) ▌InstantPick(80💰) ▌Mute(60💰) ▌Pivo(1💰) ▌",
        player.id,
        0xac43fc,
        "bold",
        0
      );
      room.sendAnnouncement(
        "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
        player.id,
        0xac43fc,
        "bold",
        0
      );
    }
  } else if (["!jerseys"].includes(message[0].toLowerCase())) {
    room.sendChat(
      "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
      player.id,
      0xac43fc,
      "normal",
      0
    );
    room.sendChat(
      "┃Change your team's kit when you are the captain using the commands:",
      player.id,
      0xac43fc,
      "normal",
      0
    );  
    room.sendChat(
      "┃!dres 1, !dres 2, !dres 3, !dres 4, !dres 5, !dres 6.",
      player.id,
      0xac43fc,
      "normal",
      0
    );
    room.sendChat(
      "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
      player.id,
      0xac43fc,
      "normal",
      0
    );
  } else if (["!stat"].includes(message[0].toLowerCase())) {
    if (message.length >= 2 && message[1][0] == "#") {
      message[1] = message[1].substring(1, message[1].length);
      var stats;
      localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))
        ? (stats = JSON.parse(
            localStorage.getItem(
              getAuth(room.getPlayer(Number.parseInt(message[1])))
            )
          ))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "0.00",
            "0.00",
            "0.00",
            0,
            "0.00",
          ]);
      if (
        !Number.isNaN(Number.parseInt(message[1])) &&
        room.getPlayer(Number.parseInt(message[1])) != null
      ) {
        room.sendAnnouncement(
          "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "┃" +
            room.getPlayer(Number.parseInt(message[1])).name +
            " Match: " +
            stats[Ss.GA] +
            ", Wins: " +
            stats[Ss.WI] +
            "(" +
            stats[Ss.WR] +
            "%)" +
            ", Losses: " +
            stats[Ss.LS] +
            ", Goals: " +
            stats[Ss.GL] +
            ", Assists: " +
            stats[Ss.AS],
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "┃Goals per match: " +
            stats[Ss.GP] +
            ", Assists per match: " +
            stats[Ss.AP] +
            ", Goalkeeper: " +
            stats[Ss.GK] +
            ", Clean Sheets: " +
            stats[Ss.CS] +
            "(" +
            stats[Ss.CP] +
            "%)",
          player.id,
          0x00ff00,
          "normal",
          0
        );        
        room.sendAnnouncement(
          "┃🌠 Player rating: " + stats[Ss.OC],
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ ",
          player.id,
          0x00ff00,
          "normal",
          0
        );
        room.sendAnnouncement(
          "🔎 " + player.name + " is reading ur stats. 🔎 ",
          room.getPlayer(Number.parseInt(message[1])).id
        );
      }
    }
  } else if (["!claimz"].includes(message[0].toLowerCase())) {
    if (message[1] == adminPassword) {
      room.setPlayerAdmin(player.id, true);
      var stats;
      localStorage.getItem(getAuth(player))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            player.name,
          ]);
      if (stats[Ss.RL] != "master") {
        stats[Ss.RL] = "master";
        room.sendChat(player.name + " is now a room master !");
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    }
  } else if (["!claimz"].includes(message[0].toLowerCase())) {
    if (message[1] == 98894) {
      room.setPlayerAdmin(player.id, true);
      var stats;
      localStorage.getItem(getAuth(player))
        ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
        : (stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            player.name,
          ]);
      if (stats[Ss.RL] != "admin") {
        stats[Ss.RL] = "admin";
        room.sendAnnouncement(player.name + " is admin !");
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
      }
    }
  } else if (["!topgoals"].includes(message[0].toLowerCase())) {
    try {
        let allPlayersStats = [];

        // Pobranie statystyk dla wszystkich graczy
        for (let player of allReds.concat(allBlues)) {
            let stats;
            if (localStorage.getItem(getAuth(player))) {
                stats = JSON.parse(localStorage.getItem(getAuth(player)));
            } else {
                stats = [
                    0,
                    0,
                    0,
                    0,
                    "0.00",
                    0,
                    0,
                    0,
                    0,
                    "0.00",
                    "player",
                    player.name,
                ];
            }
            allPlayersStats.push({ name: player.name, goals: stats[Ss.GL] || 0 });
        }

        // Sortowanie graczy według liczby goli malejąco
        allPlayersStats.sort((a, b) => b.goals - a.goals);

        // Wyciągnięcie top 5
        let topGoals = allPlayersStats.slice(0, 5);

        // Wyświetlanie wyników
        if (topGoals.length === 0 || topGoals.every(player => player.goals === 0)) {
            room.sendAnnouncement("Top 5 Goals: None (no players or all with 0 goals)", player.id, 0x2eff00, "bold", 0);
        } else {
            room.sendAnnouncement("┏━━━━━━━━━━━ Top 5 Goals ━━━━━━━━━━━┓", player.id, 0x2eff00, "bold", 0);
            topGoals.forEach((player, index) => {
                room.sendAnnouncement(
                    `┃ ${index + 1}. ${player.name} - ${player.goals} goals`,
                    player.id,
                    0x2eff00,
                    "bold",
                    0
                );
            });
            room.sendAnnouncement("┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛", player.id, 0x2eff00, "bold", 0);
        }
    } catch (error) {
        // Obsługa błędów
        room.sendAnnouncement("Error while fetching top goals: " + error.message, player.id, 0xff0000, "bold", 0);
    }
  } else if (message == "!rr") {
    if (player.admin == true) {
      room.stopGame();
      room.startGame();
    }
  } else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
    if (
      localStorage.getItem(getAuth(player)) &&
      JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"
    ) {
      if (message.length >= 2 && message[1][0] == "#") {
        message[1] = message[1].substring(1, message[1].length);
        if (
          !Number.isNaN(Number.parseInt(message[1])) &&
          room.getPlayer(Number.parseInt(message[1])) != null
        ) {
          var stats;
          localStorage.getItem(
            getAuth(room.getPlayer(Number.parseInt(message[1])))
          )
            ? (stats = JSON.parse(
                localStorage.getItem(
                  getAuth(room.getPlayer(Number.parseInt(message[1])))
                )
              ))
            : (stats = [
                0,
                0,
                0,
                0,
                "0.00",
                0,
                0,
                0,
                0,
                "0.00",
                "player",
                "0.00",
                "0.00",
                0,
                "0.00",
                room.getPlayer(Number.parseInt(message[1])).name,
              ]);
          if (stats[Ss.RL] == "player") {
            stats[Ss.RL] = "admin";
            localStorage.setItem(
              getAuth(room.getPlayer(Number.parseInt(message[1]))),
              JSON.stringify(stats)
            );
            room.setPlayerAdmin(
              room.getPlayer(Number.parseInt(message[1])).id,
              true
            );
            room.sendAnnouncement(
              room.getPlayer(Number.parseInt(message[1])).name +
                " has become an admin !"
            );
          }
        }
      }
    }
  } else if (["!give"].includes(message[0].toLowerCase())) {
    // Check if the player executing the command is an admin
    if (
      localStorage.getItem(getAuth(player)) &&
      JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"
    ) {
      if (
        message.length >= 3 &&
        message[1][0] == "#" &&
        !Number.isNaN(Number.parseInt(message[2]))
      ) {
        message[1] = message[1].substring(1, message[1].length);
        let pointsToGive = Number.parseInt(message[2]);

        // Check if the specified player ID is valid
        if (
          !Number.isNaN(Number.parseInt(message[1])) &&
          room.getPlayer(Number.parseInt(message[1])) != null
        ) {
          let targetPlayer = room.getPlayer(Number.parseInt(message[1]));
          let stats;

          // Get the stats of the target player
          if (localStorage.getItem(getAuth(targetPlayer))) {
            stats = JSON.parse(localStorage.getItem(getAuth(targetPlayer)));
          } else {
            stats = [
              0,
              0,
              0,
              0,
              "0.00",
              0,
              0,
              0,
              0,
              "0.00",
              "player",
              "0.00",
              "0.00",
              0,
              "0.00",
              targetPlayer.name,
            ];
          }

          // Add points to Ss.PT
          stats[Ss.PT] += pointsToGive;

          // Update the stats in localStorage
          localStorage.setItem(getAuth(targetPlayer), JSON.stringify(stats));

          // Announce the update
          room.sendAnnouncement(
            targetPlayer.name +
              " received from the admin " +
              pointsToGive +
              " 💰HaxCoins !"
          );
        } else {
          room.sendAnnouncement(
            "Invalid player ID specified.",
            player.id,
            0xff0000,
            "bold",
            2
          );
        }
      } else {
        room.sendAnnouncement(
          "Invalid command usage. Use !give #id points.",
          player.id,
          0xff0000,
          "bold",
          2
        );
      }
    } else {
      room.sendAnnouncement(
        "You don't have permission to use this command.",
        player.id,
        0xff0000,
        "bold",
        2
      );
    }
  } else if (["!pay"].includes(message[0].toLowerCase())) {
    if (
      message.length >= 3 &&
      message[1][0] == "#" &&
      !Number.isNaN(Number.parseInt(message[2]))
    ) {
      message[1] = message[1].substring(1, message[1].length);
      let pointsToGive = Number.parseInt(message[2]);

      // Check if the points to give are positive
      if (pointsToGive <= 0) {
        room.sendChat(
          "You don't have " + pointsToGive + " in your inventory.",
          player.id,
          0xff0000,
          "bold",
          0
        );
        return; // Exit the command execution
      }

      // Check if the specified player ID is valid
      if (
        !Number.isNaN(Number.parseInt(message[1])) &&
        room.getPlayer(Number.parseInt(message[1])) != null
      ) {
        let targetPlayer = room.getPlayer(Number.parseInt(message[1]));

        // Ensure the target player is not the same as the player issuing the command
        if (targetPlayer.id === player.id) {
          room.sendChat(
            "There is no player with that number.",
            player.id,
            0xff0000,
            "bold",
            2
          );
          return;
        }          

        let stats;

        // Get the stats of the target player
        if (localStorage.getItem(getAuth(targetPlayer))) {
          stats = JSON.parse(localStorage.getItem(getAuth(targetPlayer)));
        } else {
          stats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            targetPlayer.name,
          ];
        }

        // Get the stats of the player executing the command
        let senderStats;
        if (localStorage.getItem(getAuth(player))) {
          senderStats = JSON.parse(localStorage.getItem(getAuth(player)));
        } else {
          senderStats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            player.name,
          ];
        }

        // Check if the sender has enough Ss.PT to give
        if (senderStats[Ss.PT] >= pointsToGive) {
          // Deduct points from sender's Ss.PT
          senderStats[Ss.PT] -= pointsToGive;
          localStorage.setItem(getAuth(player), JSON.stringify(senderStats));

          // Add points to target player's Ss.PT
          stats[Ss.PT] += pointsToGive;
          localStorage.setItem(getAuth(targetPlayer), JSON.stringify(stats));

          // Announce the transaction
          room.sendAnnouncement(
            player.name +
              " has given their " +
              pointsToGive +
              " 💰HaxCoins to " +
              targetPlayer.name +
              "!"
          );
          } else {
            room.sendChat(
              "You don't have " + pointsToGive + " in your inventory.",
              player.id,
              0xff0000,
              "bold",
              0
            );
          }
          } else {
            room.sendChat(
              "There is no player with that number.",
              player.id,
              "red",
              "bold"
            );
          }
          } else {
            room.sendAnnouncement(
              "Give some 💰HaxCoins to someone to buy something from the store. (e.g. !give #13 10)",
              player.id
            );
          }
          } else if (["!bet"].includes(message[0].toLowerCase())) {
            let playerId = player.id;
          
            if (playerCooldown[playerId]) {
              room.sendAnnouncement(
                "Please wait 15 seconds before you can bet again.",
                playerId,
                0xff0000,
                "bold",
                2
              );
              return false;
            }
          
            if (!bettingOpen) {
              room.sendAnnouncement(
                "!bet <r/b> <bet> ┃ e.g. !bet r, !bet b 15",
                player.id,
                0x015fb0,
                "bold",
                0
              );
              room.sendAnnouncement(
                "Betting is closed.",
                player.id,
                0x015fb0,
                "bold",
                0
              );
              return false; // Prevent further execution
            }          

            if (
              message.length === 3 &&
              ["r", "b"].includes(message[1].toLowerCase()) &&
              !Number.isNaN(Number.parseFloat(message[2]))
            ) {
              let team = message[1].toLowerCase();
              let amount = Number.parseFloat(message[2]);
            
              if (isNaN(amount) || amount <= 0) {
                room.sendAnnouncement(
                  "Invalid number.",
                  player.id,
                  0xff0000,
                  "bold",
                  2
                );
                return false; // Prevent further execution
              }
            
              // Check if the bet exceeds the maximum limit
              if (amount > 100) {
                room.sendAnnouncement(
                  "The maximum bet is 100 💰HaxCoins.",
                  player.id,
                  0xff0000,
                  "bold",
                  2
                );
                return false; // Prevent further execution
              }
            
              // Get player stats
              let playerStats;
              if (localStorage.getItem(getAuth(player))) {
                playerStats = JSON.parse(localStorage.getItem(getAuth(player)));
              } else {
                playerStats = [
                  0,
                  0,
                  0,
                  0,
                  "0.00",
                  0,
                  0,
                  0,
                  0,
                  "0.00",
                  "0.00",
                  "0.00",
                  "0.00",
                  0,
                  "0.00",
                  player.name,
                ];
              }
            
              // Check if the player has enough points to bet
              if (playerStats[Ss.PT] >= amount) {
                // Ensure odds are available
                if (typeof oddsRed === "undefined" || typeof oddsBlue === "undefined") {
                  room.sendAnnouncement(
                    "Betting is currently disabled.",
                    player.id,
                    0xff0000,
                    "bold",
                    2
                  );
                  return false; // Prevent further execution
                }
            
                // Check if the player is trying to bet on the opposite team
                let playerTeam =
                  player.team === 1 ? "r" : player.team === 2 ? "b" : null;
            
                if (player.team !== 0 && playerTeam !== team) {
                  room.sendAnnouncement(
                    "You cannot bet against your own team!",
                    player.id,
                    0xff0000,
                    "bold",
                    2
                  );
                  return false; // Prevent further execution
                }
            
                // Calculate the odds based on the team
                let odds = team === "r" ? oddsRed : team === "b" ? oddsBlue : null;
                if (odds === null) {
                  room.sendAnnouncement(
                    "To bet on the winner, type (e.g., !bet r 10 or !bet b 10)",
                    player.id,
                    0x015fb0,
                    "bold",
                    0
                  );
                  return false; // Prevent further execution
                }
            
                // Initialize bets array if it doesn't exist
                if (!game.bets) {
                  game.bets = [];
                }
            
                // Deduct points from player
                playerStats[Ss.PT] -= amount;
                localStorage.setItem(getAuth(player), JSON.stringify(playerStats));
            
                // Record the bet
                let bet = {
                  playerId: player.id,
                  team: team,
                  amount: amount,
                  odds: odds,
                };
                game.bets.push(bet);
            
                room.sendAnnouncement(
                  `${player.name} bet ${amount} 💰 on the victory of ${team} with odds ${odds}.`,
                  player.id,
                  0x015fb0,
                  "normal",
                  2
                );
                console.log(
                  `Bet details: Player ID: ${bet.playerId}, Team: ${bet.team}, Amount: ${bet.amount}, Odds: ${bet.odds}`
                );
              } else {
                room.sendAnnouncement(
                  "You don't have enough 💰HaxCoins to place the bet!",
                  player.id,
                  0xff0000,
                  "bold",
                  2
                );
                return false; // Prevent further execution
              }
            } else {
              room.sendAnnouncement(
                "To bet: !bet [team] 💰[HaxCoins]. For example: !bet r 10",
                player.id,
                0x015fb0,
                "bold",
                2
              );
              return false; // Prevent further execution
            }
            
            playerCooldown[playerId] = true;
            
            // Clear the cooldown after 15 seconds
            setTimeout(() => {
              delete playerCooldown[playerId];
            }, 15000); // 15 seconds
            
            return false; // Prevent further execution
            } else if (
              ["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())
            ) {
              if (
                localStorage.getItem(getAuth(player)) &&
                JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master"
              ) {
                if (message.length >= 2 && message[1][0] == "#") {
                  message[1] = message[1].substring(1, message[1].length);
                  if (
                    !Number.isNaN(Number.parseInt(message[1])) &&
                    room.getPlayer(Number.parseInt(message[1])) != null
                  ) {
                    var stats;
                    localStorage.getItem(
                      getAuth(room.getPlayer(Number.parseInt(message[1]))),
                    )
                      ? (stats = JSON.parse(
                          localStorage.getItem(
                            getAuth(room.getPlayer(Number.parseInt(message[1]))),
                          )
                        ))
                      : (stats = [
                          0,
                          0,
                          0,
                          0,
                          "0.00",
                          0,
                          0,
                          0,
                          0,
                          "0.00",
                          "player",
                          "0.00",
                          "0.00",
                          0,
                          "0.00",
                          room.getPlayer(Number.parseInt(message[1])).name,
                        ]);
                    if (stats[Ss.RL] == "admin") {
                      room.sendAnnouncement(
                        room.getPlayer(Number.parseInt(message[1])).name +
                          " is no longer an admin!"
                      );
                      stats[Ss.RL] = "player";
                      localStorage.setItem(
                        getAuth(room.getPlayer(Number.parseInt(message[1]))),
                        JSON.stringify(stats)
                      );
                      room.setPlayerAdmin(
                        room.getPlayer(Number.parseInt(message[1])).id,
                        false
                      );
                    }
                  }
                }
              }            
  } else if (
    ["!mutes", "!mutelist", "!ucutkani"].includes(message[0].toLowerCase())
  ) {
    // Collect all muted players' names into a string
    // let mutedListMessage = "Currently muted players: ";
    // mutedAuths.forEach((player, index) => {
    //   mutedListMessage += `${player.name}`; // Add player name to the message
    //   if (index < mutedAuths.length - 1) {
    //     mutedListMessage += ", "; // Add a comma between names (but not after the last one)
    //   }
    // });
    if (player.admin == true){
      room.sendAnnouncement(`Error getting muted players list.`, player.id);
    } else {
      room.sendAnnouncement(`You do not have permission to view mutes.`, player.id);
    }
    // let resultString = ""; // Initialize an empty string

    // mutedAuths.forEach((item, index) => {
    //   var stats;
    //   localStorage.getItem(item)
    //     ? (stats = JSON.parse(localStorage.getItem(item)))
    //     : (stats = [
    //         0,
    //         0,
    //         0,
    //         0,
    //         "0.00",
    //         0,
    //         0,
    //         0,
    //         0,
    //         "0.00",
    //         "0.00",
    //         "0.00",
    //         "0.00",
    //         0,
    //         "0.00",
    //       ]);

    //   console.log(stats);
    //   console.log(item);
    //   // Add the item to the result string
    //   let playerName = stats[Ss.NK];
    //   resultString += playerName;

    //   // If it's not the last item, add a separator (like a comma and space)
    //   if (index < mutedAuths.length - 1) {
    //     resultString += ", ";
    //   }

    // Send the list of muted players as an announcement
    // room.sendAnnouncement(resultString, null);
  } else if (
    mutedAuths.includes(getAuth(room.getPlayer(Number.parseInt(player.id)))) ==
    true
  ) {
    room.sendAnnouncement(`You are still muted.`, player.id);
    return false;
  } else if (["!mute"].includes(message[0].toLowerCase())) {
    if (player.admin == true) {
      let ID = parseInt(message[1].substring(1, message[1].length));

      if(isNaN(ID)){
        room.sendAnnouncement(`Invalid ID`, player.id);
        return false;
      }

      if(ID == player.id){
        room.sendAnnouncement(`You cant mute yourself.`, player.id);
        return false;
      }

      if(room.getPlayer(Number.parseInt(ID)).admin == true){
        room.sendAnnouncement(`You cant mute an Admin`, player.id);
        return false;
      }

      if(mutedAuths.includes(getAuth(room.getPlayer(Number.parseInt(ID)))) == true){
        room.sendAnnouncement(`Player is already muted.`, player.id);
        return false;
      }
      var time = parseInt(message[2]);

      room.sendAnnouncement(
        `${room.getPlayer(Number.parseInt(ID)).name} has been muted by ${
          player.name
        } for ${time} ${time == 1 ? "minute." : "minutes."}`,
        null
      );

      let playerStats;
      localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(ID))))
        ? (playerStats = JSON.parse(
            localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(ID))))
          ))
        : (playerStats = [
            0,
            0,
            0,
            0,
            "0.00",
            0,
            0,
            0,
            0,
            "0.00",
            "player",
            "0.00",
            "0.00",
            0,
            "0.00",
            room.getPlayer(Number.parseInt(ID)).name,
          ]);
      mutedAuths.push(getAuth(room.getPlayer(Number.parseInt(ID))));
      var pname = room.getPlayer(Number.parseInt(ID)).name;
      var pauth = getAuth(room.getPlayer(Number.parseInt(ID)));
      setTimeout(function () {
        if (mutedAuths.includes(pauth) == true) {
          var index = mutedAuths.indexOf(pauth);
          mutedAuths.splice(index, 1);
          room.sendAnnouncement(`${pname} has been unmuted.`, null);
        }
      }, time * timeObject.Minutes);
      return false;
    }
  } else if (["!unmute"].includes(message[0].toLowerCase())) {
    if (player.admin == true) {
      let ID = parseInt(message[1].substring(1, message[1].length));
      var pauth = getAuth(room.getPlayer(Number.parseInt(ID)));
      var index = mutedAuths.findIndex((player) => player.id === pauth);
      mutedAuths.splice(index, 1);

      room.sendAnnouncement(
        `${room.getPlayer(Number.parseInt(ID)).name} has been unmuted by ${
          player.name
        }`,
        null
      );
    }
  } else if (['!clearmutes'].includes(message[0].toLowerCase())){
    if (player.admin == true) {
      mutedAuths.length = 0;
      room.sendAnnouncement(`Mutes cleared.`, null);
    }
  }
  // } else if (["!mute"].includes(message[0].toLowerCase())) {
  //   if (player.admin) {
  //     updateTeams();
  //     var timeOut;
  //     if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
  //       if (Number.parseInt(message[1]) > 0) {
  //         timeOut = Number.parseInt(message[1]) * 60 * 1000;
  //       } else {
  //         timeOut = 3 * 60 * 1000;
  //       }
  //       if (message[2].length > 1 && message[2][0] == "#") {
  //         message[2] = message[2].substring(1, message[2].length);
  //         if (
  //           !Number.isNaN(Number.parseInt(message[2])) &&
  //           room.getPlayer(Number.parseInt(message[2])) != null
  //         ) {
  //           if (
  //             room.getPlayer(Number.parseInt(message[2])).admin ||
  //             getMute(room.getPlayer(Number.parseInt(message[2])))
  //           ) {
  //             return false;
  //           }
  //           setTimeout(
  //             function (player) {
  //               setMute(player, false);
  //             },
  //             timeOut,
  //             room.getPlayer(Number.parseInt(message[2]))
  //           );
  //           setMute(room.getPlayer(Number.parseInt(message[2])), true);
  //           room.sendAnnouncement(
  //             room.getPlayer(Number.parseInt(message[2])).name +
  //               " je ućutkan na " +
  //               timeOut / 60000 +
  //               " minuta !"
  //           );
  //         }
  //       }
  //     } else if (Number.isNaN(Number.parseInt(message[1]))) {
  //       if (message[1].length > 1 && message[1][0] == "#") {
  //         message[1] = message[1].substring(1, message[1].length);
  //         if (
  //           !Number.isNaN(Number.parseInt(message[1])) &&
  //           room.getPlayer(Number.parseInt(message[1])) != null
  //         ) {
  //           if (
  //             room.getPlayer(Number.parseInt(message[1])).admin ||
  //             getMute(room.getPlayer(Number.parseInt(message[1])))
  //           ) {
  //             return false;
  //           }
  //           setTimeout(
  //             function (player) {
  //               setMute(player, false);
  //             },
  //             3 * 60 * 1000,
  //             room.getPlayer(Number.parseInt(message[1]))
  //           );
  //           setMute(room.getPlayer(Number.parseInt(message[1])), true);
  //           room.sendAnnouncement(
  //             room.getPlayer(Number.parseInt(message[1])).name +
  //               " je ućutkan na 3 minuta!"
  //           );
  //         }
  //       }
  //     }
  //   }
  // }
  else if (message[0].toLowerCase() === "!buyMute".toLowerCase()) {
    updateTeams();
    if (message[1] && message[1].length > 1 && message[1][0] === "#") {
      var targetPlayer = message[1].substring(1);
      var targetId = Number.parseInt(targetPlayer);

      if (!Number.isNaN(targetId) && room.getPlayer(targetId) != null) {
        var target = room.getPlayer(targetId);
        var stats;
        localStorage.getItem(getAuth(player))
          ? (stats = JSON.parse(localStorage.getItem(getAuth(player))))
          : (stats = [
              0,
              0,
              0,
              0,
              "0.00",
              0,
              0,
              0,
              0,
              "0.00",
              "0.00",
              "0.00",
              0,
              "0.00",
            ]);
            if (stats[Ss.PT] > 59) {
              if (!target.admin && !getMute(target)) {
                setMute(target, true);
                setTimeout(function () {
                  setMute(target, false);
                }, 2 * 60 * 1000); // Mute for 2 minutes
                room.sendChat(
                  player.name +
                    " bought a mute and muted " +
                    target.name +
                    " for 2 minutes!",
                  null,
                  0xff0000,
                  "bold"
                );
                if (typeof stats[Ss.PT] === "number") {
                  stats[Ss.PT] -= 60;
                  localStorage.setItem(getAuth(player), JSON.stringify(stats));
                }
              } else {
                room.sendAnnouncement(
                  target.name + " is already muted or is an admin!" + target.id,
                  player.id,
                  0xff0000,
                  "bold"
                );
              }
            } else if (stats[Ss.PT] < 60) {
              room.sendAnnouncement(
                "You don't have enough 💰. 60 is required.",
                player.id,
                0xff0000,
                "bold"
              );
            }
            } else {
              room.sendAnnouncement(
                "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓",
                player.id,
                0xffffff,
                "bold"
              );
              room.sendAnnouncement(
                "┃Plaster. When someone is too annoying, you can mute them for 2 minutes. ▌20 💰▌",
                player.id,
                0xffffff,
                "bold"
              );
              room.sendAnnouncement(
                "┃Command: ▌ !buyMute #<br.Player> (e.g., !buyMute #13)",
                player.id,
                0xffffff,
                "bold"
              );
              room.sendAnnouncement(
                "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛",
                player.id,
                0xffffff,
                "bold"
              );
            }
          }
        }            
  // else if (["!unmute"].includes(message[0].toLowerCase())) {
  //   if (player.admin && message.length >= 2) {
  //     if (message[1] == "all") {
  //       extendedP.forEach((ePlayer) => {
  //         ePlayer[eP.MUTE] = false;
  //       });
  //       room.sendAnnouncement("Mutovi uklonjeni.");
  //     } else if (
  //       !Number.isNaN(Number.parseInt(message[1])) &&
  //       room.getPlayer(Number.parseInt(message[1])) != null &&
  //       getMute(room.getPlayer(Number.parseInt(message[1])))
  //     ) {
  //       setMute(room.getPlayer(Number.parseInt(message[1])), false);
  //       room.sendAnnouncement(
  //         room.getPlayer(Number.parseInt(message[1])).name +
  //           " može ponovo pisati !"
  //       );
  //     } else if (Number.isNaN(Number.parseInt(message[1]))) {
  //       if (message[1].length > 1 && message[1][0] == "#") {
  //         message[1] = message[1].substring(1, message[1].length);
  //         if (
  //           !Number.isNaN(Number.parseInt(message[1])) &&
  //           room.getPlayer(Number.parseInt(message[1])) != null &&
  //           getMute(room.getPlayer(Number.parseInt(message[1])))
  //         ) {
  //           setMute(room.getPlayer(Number.parseInt(message[1])), false);
  //           room.sendAnnouncement(
  //             room.getPlayer(Number.parseInt(message[1])).name +
  //               " može ponovo pisati !"
  //           );
  //         }
  //       }
  //     }
  //   }
  // }
  else if (["!slow"].includes(message[0].toLowerCase())) {
    if (player.admin) {
      if (message.length == 1) {
        slowMode = 2;
        room.sendAnnouncement(`👆 Captains are choosing players!`, null, 0xf0ff33);
      } else if (message.length == 2) {
        if (!Number.isNaN(Number.parseInt(message[1]))) {
          if (Number.parseInt(message[1]) > 0) {
            slowMode = Number.parseInt(message[1]);
            room.sendChat(slowMode + " seconds, slow mode activated!");
            return false;
          }
        }
        slowMode = 2;
        room.sendChat("Slow mode activated (2 seconds)!");
      }
    }
  } else if (["!endslow"].includes(message[0].toLowerCase())) {
    if (player.admin) {
      slowMode != 0 ? room.sendAnnouncement("We continue.") : null;
      slowMode = 0;
    }
  } else if (
    ["!banlist", "!bans", "!kaznjeni"].includes(message[0].toLowerCase())
  ) {
    if (banList.length == 0) {
      room.sendAnnouncement("No one is banned!", player.id);
      return false;
    }
    var cstm = "Ban List";
    for (var i = 0; i < banList.length; i++) {
      if (
        140 - cstm.length <
        (banList[i][0] + "[" + banList[i][1] + "], ").length
      ) {
        room.sendAnnouncement(cstm, player.id);
        cstm = "... ";
      }
      cstm += banList[i][0] + "[" + banList[i][1] + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id);
  } else if (["!clearbans"].includes(message[0].toLowerCase())) {
    if (player.admin) {
      if (message.length == 1) {
        room.clearBans();
        room.sendAnnouncement("Bans cleared!!");
        banList = [];
      }
      if (message.length == 2) {
        if (!Number.isNaN(Number.parseInt(message[1]))) {
          if (Number.parseInt(message[1]) > 0) {
            ID = Number.parseInt(message[1]);
            room.clearBan(ID);
            if (banList.length != banList.filter((array) => array[1] != ID)) {
              room.sendAnnouncement(
                banList.filter((array) => array[1] == ID)[0][0] +
                  " has been unbanned from the room!"
              );
            }
            setTimeout(() => {
              banList = banList.filter((array) => array[1] != ID);
            }, 20);
          }
        }
      }
    }
  } else if (
    ["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())
  ) {
    room.kickPlayer(player.id, "YU Futsal life is!", false);
  }
  if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
    if (player.id == teamR[0].id || player.id == teamB[0].id) {
      // we care if it's one of the captains choosing
      if (teamR.length <= teamB.length && player.id == teamR[0].id) {
        // we care if it's red turn && red cap talking
        if (["top", "auto"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[0].id, Team.RED);
          redCaptainChoice = "top";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " selected players from the top! 🔝",
            null,
            0xf0ff33
          );
          return false;
        } else if (
          ["random", "rand", "auto"].includes(message[0].toLowerCase())
        ) {
          var r = getRandomInt(teamS.length);
          room.setPlayerTeam(teamS[r].id, Team.RED);
          redCaptainChoice = "random";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " selected Random!",
            null,
            0xf0ff33
          );
          return false;
        } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
          redCaptainChoice = "bottom";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " selected players from the bottom ⤴!",
            null,
            0xf0ff33
          );
          return false;
        } else if (!Number.isNaN(Number.parseInt(message[0]))) {
          if (
            Number.parseInt(message[0]) > teamS.length ||
            Number.parseInt(message[0]) < 1
          ) {
            room.sendAnnouncement("Invalid number!", player.id);
            return false;
          } else {
            room.setPlayerTeam(
              teamS[Number.parseInt(message[0]) - 1].id,
              Team.RED
            );
            room.sendAnnouncement(
              player.name +
                " selected " +
                teamS[Number.parseInt(message[0]) - 1].name +
                "!",
              null,
              0xf0ff33
            );
            return false;
          }
        }
      }  
      if (teamR.length > teamB.length && player.id == teamB[0].id) {
        // we care if it's red turn && blue cap talking
        if (["top", "auto"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[0].id, Team.BLUE);
          blueCaptainChoice = "top";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " selected players from the top! 🔝",
            null,
            0xf0ff33
          );
          return false;
        } else if (["random", "rand"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
          blueCaptainChoice = "random";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " selected Random!",
            null,
            0xf0ff33
          );
          return false;
        } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
          room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
          blueCaptainChoice = "bottom";
          clearTimeout(timeOutCap);
          room.sendAnnouncement(
            player.name + " selected players from the bottom ⤴!",
            null,
            0xf0ff33
          );
          return false;
        } else if (!Number.isNaN(Number.parseInt(message[0]))) {
          if (
            Number.parseInt(message[0]) > teamS.length ||
            Number.parseInt(message[0]) < 1
          ) {
            room.sendAnnouncement("Invalid number!", player.id);
            return false;
          } else {
            room.setPlayerTeam(
              teamS[Number.parseInt(message[0]) - 1].id,
              Team.BLUE
            );
            room.sendAnnouncement(
              player.name +
                " selected " +
                teamS[Number.parseInt(message[0]) - 1].name +
                "!",
              null,
              0xf0ff33
            );
            return false;
          }
        }
      }
    }
  }      
  if (message[0][0] == "!") {
    return false;
  }
  if (getMute(player)) {
    room.sendAnnouncement("You are muted.", player.id);
    return false;
  }
  if (slowMode > 0) {
    if (!player.admin) {
      if (!SMSet.has(player.id)) {
        SMSet.add(player.id);
        setTimeout(
          (number) => {
            SMSet.delete(number);
          },
          slowMode * 1000,
          player.id
        );
      } else {
        return false;
      }
    }
  }
  return true;
};

function pauseFunction(player) {
  var players = room.getPlayerList();
  var redCaptain = players.find((p) => p.team == 1);
  var blueCaptain = players.find((p) => p.team == 2);
  if (
    (redCaptain && redCaptain.id == player.id) ||
    (blueCaptain && blueCaptain.id == player.id)
  ) {
    if (!SMSet.has(player.id)) {
      SMSet.add(player.id);
      setTimeout(
        (number) => {
          SMSet.delete(number);
        },
        300000,
        player.id
      );
      room.sendAnnouncement(
        `${player.name} (captain) has requested a 15-second pause.`,
        null,
        0x2eff00,
        "bold",
        0
      );
      room.pauseGame(true);
      gamePaused = true;
      setTimeout(() => {
        if (gamePaused) room.pauseGame(false);
      }, 15000);
    }
  }
}

room.onPlayerActivity = function (player) {
  setActivity(player, 0);
};

room.onPlayerBallKick = function (player) {
  if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
    !activePlay ? (activePlay = true) : null;
    lastTeamTouched = player.team;
    lastPlayersTouched[1] = lastPlayersTouched[0];
    lastPlayersTouched[0] = player;
  }
};

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
  game = new Game(Date.now(), room.getScores(), []);
  game.bets = []; // Initialize the bets array
  countAFK = true;
  activePlay = false;
  goldenGoal = false;
  endGameVariable = false;
  lastPlayersTouched = [null, null];
  Rposs = 0;
  Bposs = 0;
  GKList = [];
  allReds = [];
  allBlues = [];

  if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
    for (var i = 0; i < maxTeamSize; i++) {
      allReds.push(teamR[i]);
      allBlues.push(teamB[i]);
    }
  }

  for (var i = 0; i < extendedP.length; i++) {
    extendedP[i][eP.GK] = 0;
    extendedP[i][eP.ACT] = 0;
    room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
  }

  deactivateChooseMode();
  announceTeams();

  // Check if there are enough players to start betting
  if (allReds.length >= 3 && allBlues.length >= 3) {
    // Open betting for the first 15 seconds
    openBetting();
  } else {
    // room.sendAnnouncement("Nedovoljno igrača da bi započeo kladjenje.", null, 0x015FB0, "bold", 0);
  }
};

room.onGameStop = function (byPlayer) {
  if (byPlayer.id == 0 && endGameVariable) {
    updateTeams();
    if (inChooseMode) {
      if (players.length == 2 * maxTeamSize) {
        inChooseMode = false;
        resetBtn();
        for (var i = 0; i < maxTeamSize; i++) {
          setTimeout(() => {
            randomBtn();
          }, 400 * i);
        }
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else {
        if (lastWinner == Team.RED) {
          blueToSpecBtn();
        } else if (lastWinner == Team.BLUE) {
          redToSpecBtn();
          blueToRedBtn();
        } else {
          resetBtn();
        }
        setTimeout(() => {
          topBtn();
        }, 500);
      }
    } else {
      if (players.length == 2) {
        if (lastWinner == Team.BLUE) {
          room.setPlayerTeam(teamB[0].id, Team.RED);
          room.setPlayerTeam(teamR[0].id, Team.BLUE);
        }
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
        if (lastWinner == Team.RED) {
          blueToSpecBtn();
        } else {
          redToSpecBtn();
          blueToRedBtn();
        }
        setTimeout(() => {
          topBtn();
        }, 200);
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else if (players.length == 4) {
        resetBtn();
        setTimeout(() => {
          randomBtn();
          setTimeout(() => {
            randomBtn();
          }, 500);
        }, 500);
        setTimeout(() => {
          room.startGame();
        }, 2000);
      } else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
        if (lastWinner == Team.RED) {
          blueToSpecBtn();
        } else {
          redToSpecBtn();
          blueToRedBtn();
        }
        setTimeout(() => {
          topBtn();
        }, 200);
        activateChooseMode();
      } else if (players.length == 6) {
        resetBtn();
        setTimeout(() => {
          randomBtn();
          setTimeout(() => {
            randomBtn();
            setTimeout(() => {
              randomBtn();
            }, 500);
          }, 500);
        }, 500);
        setTimeout(() => {
          room.startGame();
        }, 2000);
      }
    }
  }
};

room.onGamePause = function (byPlayer) {};

room.onGameUnpause = function (byPlayer) {
  gamePaused = false;
  if (
    (teamR.length == 4 && teamB.length == 4 && inChooseMode) ||
    (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)
  ) {
    deactivateChooseMode();
  }
};

room.onTeamGoal = function (team) {
  activePlay = false;
  countAFK = false;
  const scores = room.getScores();
  game.scores = scores;
  if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
    if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
      room.sendAnnouncement(
        "⚽ Goal: " +
          lastPlayersTouched[0].name +
          " ! Assist: " +
          lastPlayersTouched[1].name +
          (team == Team.RED ? "🔴" : "🔵"),
        null,
        0xffffff,
        "bold",
        0
      );
      game.goals.push(
        new Goal(
          scores.time,
          team,
          lastPlayersTouched[0],
          lastPlayersTouched[1]
        )
      );
    } else {
      room.sendAnnouncement(
        "⚽ Goal: " +
          lastPlayersTouched[0].name +
          " !" +
          (team == Team.RED ? "🔴" : "🔵"),
        null,
        0xffffff,
        "bold",
        0
      );
      game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
    }
  } else {
    room.sendAnnouncement(
      "⚽ Owngoal: " +
        lastPlayersTouched[0].name +
        (team == Team.RED ? "🔴" : "🔵"),
      null,
      0xffffff,
      "bold",
      0
    );
    game.goals.push(new Goal(scores.time, team, null, null));
  }
  if (
    scores.scoreLimit != 0 &&
    (scores.red == scores.scoreLimit ||
      (scores.blue == scores.scoreLimit && scores.blue > 0) ||
      goldenGoal == true)
  ) {
    endGame(team);
    goldenGoal = false;
    setTimeout(() => {
      room.stopGame();
    }, 1000);
  }
};

room.onPositionsReset = function () {
  countAFK = true;
  lastPlayersTouched = [null, null];
};

function whisper(msg, targetId, color, style, sound) {
  if (color == null) {
    color = 0x66c7ff;
  }
  if (style == null) {
    style = "normal";
  }
  if (sound == null) {
    sound = 0;
  }
  room.sendAnnouncement(msg, targetId, color, style, sound);
  if (room.getPlayer(targetId) != null) {
    console.log("Whisper -> " + room.getPlayer(targetId).name + ": " + msg);
  }
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {};

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
  if (getMute(changedPlayer) && changedPlayer.admin) {
    room.sendAnnouncement(changedPlayer.name + " has been unmuted.");
    setMute(changedPlayer, false);
  }
  if (
    byPlayer.id != 0 &&
    localStorage.getItem(getAuth(byPlayer)) &&
    JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin"
  ) {
    room.sendAnnouncement(
      "You don't have permission to name a player admin !",
      byPlayer.id
    );
    room.setPlayerAdmin(changedPlayer.id, false);
  }
};

room.onStadiumChange = function (newStadiumName, byPlayer) {};

let discordWebhookMsg =
  "https://discord.com/api/webhooks/1313222554928021566/VStOEsdj-X2fwFrIb5Y6z8zJuD4gyhN44zqlb8Yx9l4mbJV6jt1qEbyiEu8Uq_pXHtoB";
//let discordWebhookMsg2 = "";
let discordWebhookMsg3 =
  "https://discord.com/api/webhooks/1313222554928021566/VStOEsdj-X2fwFrIb5Y6z8zJuD4gyhN44zqlb8Yx9l4mbJV6jt1qEbyiEu8Uq_pXHtoB";

function discord_message(message) {
  var webHookURL = discordWebhookMsg;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "⭐ Valentino ⭐",
    })
  );
}

function discord_message_match(message) {
  var webHookURL = discordWebhookMsg2;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "ROOM",
    })
  );
}
function discord_message_auth(message) {
  var webHookURL = discordWebhookMsg3;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(
    JSON.stringify({
      content: message,
      username: "ROOM",
    })
  );
}

var interval = 420000; // 7 minutes for the discord
var discordAnnouncement = "╔══════════════════════════════════╗";
var discordAnnouncement2 = "╚══════════════════════════════════╝";
var discordInviteLink = ""; //Insert your discord server's link here.
var announcementTarget = null;
var announcementColors = { discord: 0xd402ff, welcome: 0xd402ff };
var announcementFonts = {
  normal: "normal",
  bold: "bold",
  italic: "italic",
  small: "small",
  small_bold: "small-bold",
  small_italic: "small-italic",
};
var announcementSounds = { nothing: 0, normal: 1, highlight: 2 };

function kupiAnnnouncement() {
  room.sendAnnouncement(
    "╔══════════════════════════════════╗" + discordInviteLink,
    announcementTarget,
    0xd402ff,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┃💰 Buy new equipment using the !buy command 💰",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "╚══════════════════════════════════╝",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
}

function dresAnnnouncement() {
  room.sendAnnouncement(
    "╔══════════════════════════════════╗" + discordInviteLink,
    announcementTarget,
    0xd402ff,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┃👕 Change your team jersey or avatar using the commands: !jerseys, !avatar",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "╚══════════════════════════════════╝",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
}

function afkAnnnouncement() {
  room.sendAnnouncement(
    "╔══════════════════════════════════╗" + discordInviteLink,
    announcementTarget,
    0xd402ff,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "┃☕ Type !afk if you don't want to be selected for the losing team! ☕",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
  room.sendAnnouncement(
    "╚══════════════════════════════════╝",
    announcementTarget,
    0xbe22c9,
    announcementFonts.bold,
    announcementSounds.nothing
  );
}


var interval = 420000; // Interval in milliseconds (5 minutes)
var announcements = [kupiAnnnouncement, dresAnnnouncement, afkAnnnouncement]; // Array of announcement functions
var currentIndex = 0; // Index to keep track of the current announcement

// Function to send the current announcement and increment index
function sendNextAnnouncement() {
  announcements[currentIndex](); // Call the current announcement function
  currentIndex = (currentIndex + 1) % announcements.length; // Move to the next announcement, looping back to the beginning if necessary
}

// Set up interval to send announcements
var statNumber = 0; // Ensure statNumber is initialized
var sendMessageInterval = setInterval(function () {
  var statKey;
  var message;

  if (statNumber % 2 === 0) {
    // Even number - show top 10 players with most wins
    statKey = Ss.WI;
    message = "Top 10 Players with the most wins: ";
  } else {
    // Odd number - show top 10 goalkeepers
    statKey = Ss.CS;
    message = "Top 10 Goalkeepers: ";
  }

  printRanks(statKey, null, message);
  statNumber++;
}, statInterval * 60 * 3000); // 30 minutes in milliseconds

function printRanks(statKey, id = 0, titulli) {
  var leaderboard = [];
  var players = room.getPlayerList();
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.length == 43)
      leaderboard.push([
        JSON.parse(localStorage.getItem(key))[Ss.NK],
        JSON.parse(localStorage.getItem(key))[statKey], // statKey part
      ]);
  }
  leaderboard.sort(function (a, b) {
    return b[1] - a[1];
  });
  var rankingString = `${titulli}`;
  for (let i = 0; i < 10 && i < leaderboard.length; i++) {
    let playerName = leaderboard[i][0];
    let playerStat = leaderboard[i][1];
    //if (statKey == 'playtime') playerStat = getTimeStats(playerStat);
    rankingString += `${playerName}[${playerStat}], `;
  }
  rankingString = rankingString.substring(0, rankingString.length - 2);
  room.sendAnnouncement(discordAnnouncement, id, 0xd402ff, "bold", 0);
  room.sendAnnouncement(rankingString, id, 0xd402ff, "bold", 0);
  room.sendAnnouncement(discordAnnouncement2, id, 0xd402ff, "bold", 0);
}

room.onGameTick = function () {
  checkTime();
  getLastTouchOfTheBall();
  getStats();
  handleInactivity();
};
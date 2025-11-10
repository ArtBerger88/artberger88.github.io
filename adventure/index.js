const game = {
  start: {
    text: "Hello Adventurer!\nWelcome to 'The Lone Road'\n\nGOOD LUCK out there!!!\n\nAre you ready, YES or NO?",
    options: ["YES", "NO"],
    next: { yes: "split", no: "notReady" }
  },
  notReady: {
    text: "You will never be truly ready.",
    options: []
  },
  split: {
    text: "Can you find the PATH? You are walking down a road and come to a 4 way split.\n Do you go STRAIGHT, LEFT, RIGHT or BACK?",
    options: ["STRAIGHT", "LEFT", "RIGHT", "BACK"],
    next: {
      left: "leftThicket",
      right: "rightSplit",
      straight: "cottage",
      back: "backReturn",
      secret: "secretHatch"
    }
  },

  // LEFT branch
  leftThicket: {
    text: "You come to a thicket of bushes. Go AROUND or THRU?",
    options: ["AROUND", "THRU"],
    next: { around: "leftBeach", thru: "mosquitoLoss" }
  },
  mosquitoLoss: {
    text: "You got stuck in the thicket and eaten by mosquitoes!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "mosquitoLoss",
    isAudio: true,
    audioType: "mosquito"
  },
  leftBeach: {
    text: "You come to a sandy beach. WALK the beach or SWIM the waters?",
    options: ["WALK", "SWIM"],
    next: { walk: "leftPathChoice", swim: "swimLoss" }
  },
  swimLoss: {
    text: "You attempted to brave the waters, to no avail!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "swimLoss"
  },
  leftPathChoice: {
    text: "You walked for a while until you see a path. Do you walk the PATH or follow the BEACH?",
    options: ["PATH", "BEACH"],
    next: { path: "win", beach: "beachLoss" }
  },
  win: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: [],
    isLoss: false,
    winType: "treasure"
  },
  beachLoss: {
    text: "You continue down the beach for days until you can no longer walk!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "beachLoss"
  },

  // RIGHT branch
  rightSplit: {
    text: "You walk for awhile coming to another split in the road. Do you go LEFT or RIGHT?",
    options: ["LEFT", "RIGHT"],
    next: { right: "snakeLoss", left: "rightSound" }
  },
  snakeLoss: {
    text: "You continue right yet again, only to be wrong, a GIANT snake eats you!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "snakeLoss",
    isAudio: true,
    audioType: "snake"
  },
  rightSound: {
    text: "You continue until you hear a sound, do you investigate YES or NO",
    options: ["YES", "NO"],
    next: { yes: "dragonLoss", no: "clearingChoice" }
  },
  dragonLoss: {
    text: "You investigate, heading around the corner and see a DRAGON sitting upon a pile of gold,\n he turns you to ash!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "dragonLoss"
  },
  clearingChoice: {
    text: "You ignore the sound and keep going, you see a clearing, head TOWARDS or AWAY from the clearing??",
    options: ["TOWARDS", "AWAY"],
    next: { away: "forestLoss", towards: "beachChoice" }
  },
  forestLoss: {
    text: "You head away for the clearing, the forest darkens and you lose your way!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "forestLoss"
  },
  beachChoice: {
    text: "You head thru the clearing and onto a beach, you see a path, follow the PATH or BEACH?",
    options: ["PATH", "BEACH"],
    next: { path: "win", beach: "beachLoss" }
  },
  win: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: []
  },
  beachLoss: {
    text: "You continue down the beach for days until you turn into SANDMAN!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "beachLoss"
  },

  // STRAIGHT branch
  cottage: {
    text: "The road seems to go on forever. Eventually you arrive at a cottage, do you go in YES or NO?",
    options: ["YES", "NO"],
    next: { yes: "cottageStay", no: "dazedLoss" }
  },
  dazedLoss: {
    text: "You continue walking for days and daze only to become dazed!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "dazedLoss"
  },
  cottageStay: {
    text: "You enter the cottage, it appears to have been abandoned for quite some time.\n You scavenge food and water, do you spend the night, STAY or GO??",
    options: ["STAY", "GO"],
    next: { stay: "bearLoss", go: "trailChoice" }
  },
  bearLoss: {
    text: "You fall asleep with a full belly next to a warm fire.\n A bear smells your good fortune, ravenges the cottage and tears you to shreds!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "bearLoss"
  },
  trailChoice: {
    text: "You ate some rations and head back out. Theres the obvious ROAD,\n You also see a trail behind the cottage, ROAD or TRAIL? ?",
    options: ["ROAD", "TRAIL"],
    next: { road: "drifterEnd", trail: "hillChoice" }
  },
  drifterEnd: {
    text: "The route was rough and hard to traverse, you run into a blockade of cars, forcing you to stop for the night.\n You eat sleep and tell spooky stories to yourself over your makeshift campfire.\n Becoming quite attached to yourself You dont lose but you also dont win,\n you live your life as a nomad and wandering drifter meandering from village to town in search of an exact clone of yourself to keep you company for the rest of your drifting days.",
    options: []
  },
  hillChoice: {
    text: "The route was rough and hard to traverse it took longer than expected.\n You arrive at a hill, do you go AROUND or CLIMB the hill?",
    options: ["AROUND", "CLIMB"],
    next: { climb: "ankleLoss", around: "riverChoice" }
  },
  ankleLoss: {
    text: "You climb the hill that seems like a mountain, immensely tired now you fall climbing down the hill breaking your ankle!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "ankleLoss",
    isAudio: true,
    audioType: "ankle"
  },
  riverChoice: {
    text: "You go around the hill safely coming a to river, do you CROSS or FOLLOW the river?",
    options: ["CROSS", "FOLLOW"],
    next: { cross: "currentLoss", follow: "riverBeach" }
  },
  currentLoss: {
    text: "You attempt to cross the river but are swept away by current!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "currentLoss"
  },
  riverBeach: {
    text: "You follow the river it leads to a beach, do you SWIM or WALK the beach?",
    options: ["SWIM", "WALK"],
    next: { swim: "sharkLoss", walk: "pathTiming" }
  },
  sharkLoss: {
    text: "You swim and swim, until a shark eats you!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "sharkLoss"
  },
  pathTiming: {
    text: "You walk the beach until you see a path, go down the path NOW or LATER?",
    options: ["NOW", "LATER"],
    next: { now: "win", later: "win" }
  },
  now: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: []
  },
  later: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: []
  },

  // BACK branch
  backReturn: {
    text: "You go back the way you came. BACK or NO?",
    options: ["BACK", "NO"],
    next: { back: "loopyLoss", no: "backSplit" }
  },
  loopyLoss: {
    text: "You go back again, your stuck in a loop, not a real loop, just a loopy loop!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "loopyLoss"
  },
  backSplit: {
    text: "You stopped going back just as you began to not recognize the reverse route you took,\n theres a road that looks promicing do you go LEFT or RIGHT?",
    options: ["LEFT", "RIGHT"],
    next: { left: "kirbyLoss", right: "streamChoice" }
  },
  kirbyLoss: {
    text: "You go left you come to a downed tree blocking your route, you try moving the tree, to no avail.\n All your energy is spent you sit down for a little bit, Kirby comes around the corner and sucks you up!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "kirbyLoss"
  },
  streamChoice: {
    text: "You go down the right way you feel quite confident this will lead to somewhere promicing, a land of riches perhaps.\n Halfway thru your daydream you come to a stream do you SWIM or FOLLOW the stream?",
    options: ["SWIM", "FOLLOW"],
    next: { swim: "piranhaLoss", follow: "streamFollow" }
  },
  piranhaLoss: {
    text: "You go for a dip enjoying the perfect water temp until you get eaten by piranhas!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "piranhaLoss"
  },
  streamFollow: {
    text: "You follow the stream, it has to lead somewhere but theres nothing in sight so far.\n Do you STRAY away or FOLLOW the stream?",
    options: ["STRAY", "FOLLOW"],
    next: { stray: "cowLoss", follow: "campChoice" }
  },
  cowLoss: {
    text: "You stray away from the stream knowing it wasnt a good idea.\n You walk and walk through feilds of flowers, feilds of wheat, and feilds of cows but you dont find a land of riches,\n YOU FIND COWS!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "cowLoss"
  },
  campChoice: {
    text: "You continue to follow the stream for a day, stopping only to catch a fish do you stop to make CAMP or NOT?",
    options: ["CAMP", "NOT"],
    next: { not: "wolfLoss", camp: "morningChoice" }
  },
  wolfLoss: {
    text: "You decide to continue without making camp, you are mighty hungry by the time night falls, and so are the wolves that just picked up your scent.\n Its not long before you are swarmed by a PACK of wolves!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "wolfLoss"
  },
  morningChoice: {
    text: "You made camp setting up a makeshift shack out of sticks and tree limbs also building a fire and cooking your delicious fish you caught earlier.\n Eating it and enjoying the beutiful clear night.\n In the morning you wake up with a full belly and plenty of energy ready to tackle the day. You pack up camp do you FOLLOW the stream or NOT?",
    options: ["FOLLOW", "NOT"],
    next: { not: "bullLoss", follow: "finalBeach" }
  },
  bullLoss: {
    text: "You do not continue to follow the stream instead walking in a diffent direction.\n This leads to a herd of bulls, you are wearing red so all the bulls charge at you!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "bullLoss"
  },
  finalBeach: {
    text: "Knowing this will lead the right way you follow the stream, after walking for miles you finally see a BEACH and PATH.\n Which way will you go?",
    options: ["BEACH", "PATH"],
    next: { beach: "saltyLoss", path: "win" }
  },
  saltyLoss: {
    text: "You walk the beach and enjoy the sand going swimming at one point, tasting the water,\n knowing that you would be as salty as the ocean when you never reach the path to treasure!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "saltyLoss"
  },
  win: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: []
  },

  // SECRET branch
  secretHatch: {
    text: "You found a secret hatch that is sealed.\n You can LOOK around, PRY, or SMACK the lock?",
    options: ["LOOK", "PRY", "SMACK"],
    next: { look: "lookAround", pry: "pryLoop", smack: "smackChoice" }
  },
  lookAround: {
    text: "You look around, there is a MAT a ROCK, and a HOLE in the wall.",
    options: ["MAT", "ROCK", "HOLE"],
    next: { mat: "matChoice", rock: "rockChoice", hole: "armLoss" }
  },
    matChoice: {
    text: "You look under the mat on the floor, spotting a key that unlocks the lock, do you go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "jawasWin",
      wait: "waitLoss"
    }
  },
  jawasWin: {
    text: "You go thru the secret hatch finding jawas that trade you a few good droids for the right amount of credits!!!!YOU WIN but so do the jawas",
    options: []
  },
  waitLoss: {
    text: "You wait and go nowhere, it seems you are still where you started!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "waitLoss"
  },
  rockChoice: {
    text: "You pick up the rock, finding no key under it. You can either put the rock DOWN or SMASH the lock?",
    options: ["DOWN", "SMASH"],
    next: {
      down: "hopeChoice",
      smash: "smashHatch"
    }
  },
  hopeChoice: {
    text: "You put the rock down also letting yourself down. Obi Wan is not here there is no HOPE!!!! You Lose.",
    options: ["HOPE"],
    next: {
      hope: "forceWin"
    }
  },
  forceWin: {
    text: "OBI WAN was with us, he is always with us, you use the force and i am compelled to give you all the riches in this game!!!! YOU WIN",
    options: []
  },
  smashHatch: {
    text: "You decide the only thing left to do is smash the lock. With a great hurl and flawless technique the rock smashes the lock breaking the mechanism and crumbiling the rock also, the hatch flings open. Do you go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "lukeWin",
      wait: "waitLoss"
    }
  },
  lukeWin: {
    text: "You go thru the secret hatch finding Luke Skywalker!!!! YOU WIN",
    options: []
  },
  armLoss: {
    text: "You spot a hole in the wall, thinking it could be something useful you reach in.\n To no surprise you lose your arm and the game to the secret and arm eating monster!!!! YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "armLoss"
  },
  pryLoop: {
    text: "You PRY and PRY. oh how you PRY.",
    options: ["PRY"],
    next: {
      pry: "pryLoop2"
    }
  },
  pryLoop2: {
    text: "You PRY.... more?\n It budges. With a little intuition on your side you PRY again and the hatch opens. Go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "yodaWin",
      wait: "yodaMasterWin"
    }
  },
  yodaWin: {
    text: 'You have found GrandMaster Yoda!!!! "Found me you have, in order, congragulations is!!!!" YOU WIN',
    options: []
  },
  yodaMasterWin: {
    text: 'You have found GrandMaster Yoda. You hear....\n "Patience you covet, Found me you have, in order congragulations is!!!!"\n You study under the great Grandmaster Yoda for years and become a far greater jedi than I could ever be.\n He grants you the Rank of MASTER!!!!\n YOU WIN',
    options: []
  },
  smackChoice: {
    text: "You smack, hear a whack and it opens. Go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "leiaWin",
      wait: "waitLoss"
    }
  },
  leiaWin: {
    text: "You go thru the secret hatch finding Princess Leia in the Jabba slave outfit!!!! YOU WIN AT LIFE",
    options: []
  },
  invalid: {
  text: "That answer is not correct.",
  options: []
}
};

// DOM logic remains unchanged
const questionEl = document.getElementById("question");
const buttonsEl = document.getElementById("buttons");
const audioMap = {
  mosquito: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/mosquito-audio.mp3",
  ankle: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/ankleBreak-audio.mp3",
  snake: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/snakeRattle-audio.mp3",
  // Add more audio types here as needed
};
let currentState = "start";

function render(stateKey) {
  const state = game[stateKey];
  currentState = stateKey;

  buttonsEl.innerHTML = "";

//state not loading for win
if (state.isAudio && state.audioType) {
  playAudio(state.audioType);
}  
if (state.isLoss === true) {
  handleLoss(stateKey);
  addResetButton();
  return;
}

  questionEl.textContent = state.text;
  buttonsEl.innerHTML = "";

  state.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      const nextKey = state.next?.[option.toLowerCase()] || "invalid";
      render(nextKey);
    };
    buttonsEl.appendChild(btn);
  });

  if (state.options.length === 0) {
  addResetButton();
  }
}

function playAudio(audioType) {
  const audioSrc = audioMap[audioType];
  if (!audioSrc) {
  return;
}
  const audio = new Audio(audioSrc);
  audio.play()
  .catch(err => console.error('Audio playback failed:', err));
 
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 3000);
}

function handleLoss(stateKey) {
  const state = game[stateKey];

  questionEl.textContent = state.text;

  const imageContainer = document.getElementById("game-image");
  imageContainer.innerHTML = `
    <img src="https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/Bones.gif" 
         alt="Bones" class="game-image">
  `;

  setTimeout(() => {
    const audio = document.getElementById("game-audio");
    audio.src = "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/death.mp3";
    audio.play();
  },1000); 
}

function addResetButton() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "RESET";
  resetBtn.onclick = () => {
    
    const imageContainer = document.getElementById("game-image");
    imageContainer.innerHTML = "";

    const audio = document.getElementById("game-audio");
    audio.pause();
    audio.currentTime = 0;
    
    buttonsEl.innerHTML = "";

    render("start");
  };
  buttonsEl.appendChild(resetBtn);
}

document.addEventListener("DOMContentLoaded", () => {
  const secretZone = document.getElementById("secret-zone");
  const hatchAudio = document.getElementById('hatchAudio');
  let pressTimer;

  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key.toLowerCase() === "s") {
      hatchAudio.currentTime = 0;
      hatchAudio.play();
      render("secretHatch");
    }
  });

  secretZone.addEventListener("click", () => {
  console.log("Secret branch triggered via click!");
  hatchAudio.currentTime = 0;
  hatchAudio.play();
  render("secretHatch");
});
});

render(currentState);
/*
// handle win function
function handleWin(stateKey) {
  const state = game[stateKey];
  console.log("handleWin triggered with:", stateKey);
  questionEl.textContent = state.text;
  
  if (state.winType === "treasure") {
    const treasure2Audio = new Audio("https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/treasure-audio.mp3");
    console.error("Audio playing");
    treasure2Audio.play();
    
    setTimeout(() => {
  treasure2Audio.pause();
  treasure2Audio.currentTime = 0; 
}, 1000);
  }
}
*/
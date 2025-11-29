const game = {
  start: {
    text: "Hello Adventurer!\nWelcome to 'The Lone Road'\n\nGOOD LUCK out there!!!\n\nAre you ready, YES or NO?",
    options: ["YES", "NO"],
    next: { yes: "split", no: "notReady" }
  },
  notReady: {
    text: "Are we ever truly ready?",
    options: [],
    isAudio: true,
    audioType: "darth"
  },
  split: {
    text: "Can you find the PATH? You are walking down a road and come to a 4 way split.\n\n Do you go STRAIGHT, LEFT, RIGHT or BACK?",
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
    text: "You come to a thicket of bushes.\n\n Go AROUND or THRU?",
    options: ["AROUND", "THRU"],
    next: { around: "leftBeach", thru: "mosquitoLoss" }
  },
  mosquitoLoss: {
    text: "You got stuck in the thicket and eaten by mosquitoes!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "mosquitoLoss",
    isAudio: true,
    audioType: "mosquito"
  },
  leftBeach: {
    text: "You come to a sandy beach.\n WALK the beach or SWIM the waters?",
    options: ["WALK", "SWIM"],
    next: { walk: "leftPathChoice", swim: "swimLoss" }
  },
  swimLoss: {
    text: "You attempted to brave the waters, to no avail!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "swimLoss"
  },
  leftPathChoice: {
    text: "You walked for a while until you see a path.\n\n Do you walk the PATH or follow the BEACH?",
    options: ["PATH", "BEACH"],
    next: { path: "win", beach: "beachLoss" }
  },
  win: {
    text: "The path leads you to Treasures.\n What a wild adventure!!!!\n\n YOU WIN",
    options: [],
    isAudio: true,
    audioType: "treasure"
  },
  beachLoss: {
    text: "You continue down the beach for days until you can no longer walk!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "beachLoss"
  },

  // RIGHT branch
  rightSplit: {
    text: "You walk for awhile coming to another split in the road.\n\n Do you go LEFT or RIGHT?",
    options: ["LEFT", "RIGHT"],
    next: { right: "snakeLoss", left: "rightSound" }
  },
  snakeLoss: {
    text: "You continue right yet again, only to be wrong, a GIANT snake eats you!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "snakeLoss",
    isAudio: true,
    audioType: "snake"
  },
  rightSound: {
    text: "You continue until you hear a sound.\n\n Do you investigate YES or NO",
    options: ["YES", "NO"],
    next: { yes: "dragonLoss", no: "clearingChoice" }
  },
  dragonLoss: {
    text: "You investigate, heading around the corner and see a DRAGON sitting upon a pile of gold,\n he turns you to ash!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "dragonLoss",
    isAudio: true,
    audioType: "dragFire"
  },
  clearingChoice: {
    text: "You ignore the sound, keep going and see a clearing,\n\n head TOWARDS or AWAY from the clearing?",
    options: ["TOWARDS", "AWAY"],
    next: { away: "forestLoss", towards: "beachChoice" }
  },
  forestLoss: {
    text: "You head away from the clearing, the forest darkens and you lose your way!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "forestLoss"
  },
  beachChoice: {
    text: "You head thru the clearing and onto a beach and see a path.\n\n Follow the PATH or the BEACH?",
    options: ["PATH", "BEACH"],
    next: { path: "win", beach: "beachLoss" }
  },
  win: {
    text: "The path leads you to Treasures.\n What a wild adventure!!!!\n\n YOU WIN",
    options: [],
    isaudio: true,
    audioType: "treasure"
  },
  beachLoss: {
    text: "You continue down the beach for days until you turn into SANDMAN!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "beachLoss"
  },

  // STRAIGHT branch
  cottage: {
    text: "The road seems to go on forever. Eventually you arrive at a cottage\n\n Do you go in YES or NO?",
    options: ["YES", "NO"],
    next: { yes: "cottageStay", no: "dazedLoss" }
  },
  dazedLoss: {
    text: "You continue walking for days and daze only to become dazed!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "dazedLoss"
  },
  cottageStay: {
    text: "You enter the cottage, it appears to have been abandoned for quite some time.\n You scavenge food and water.\n\n Do you spend the night, STAY or GO??",
    options: ["STAY", "GO"],
    next: { stay: "bearLoss", go: "trailChoice" }
  },
  bearLoss: {
    text: "You fall asleep with a full belly next to a warm fire.\n A bear smells your good fortune, ravenges the cottage and tears you to shreds!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "bearLoss",
    isAudio: true,
    audioType: "bear"
  },
  trailChoice: {
    text: "You ate some rations and head back out. Theres the obvious ROAD.\n You also see a trail behind the cottage.\n\n Head towards the ROAD or TRAIL? ?",
    options: ["ROAD", "TRAIL"],
    next: { road: "drifterEnd", trail: "hillChoice" }
  },
  drifterEnd: {
    text: "The route was rough and hard to traverse, you run into a blockade of cars, forcing you to stop for the night.\n\n You eat, sleep, and tell spooky stories to yourself over your makeshift campfire.\n Becoming quite attached to yourself.\n\n You dont lose but you also dont win.\n\n You live your life as a nomad and wandering drifter meandering from village to town in search of an exact clone of yourself to keep you company for the rest of your drifting days.",
    options: []
  },
  hillChoice: {
    text: "The route was rough and hard to traverse it took longer than expected.\n You arrive at a hill.\n\n Do you go AROUND or CLIMB the hill?",
    options: ["AROUND", "CLIMB"],
    next: { climb: "ankleLoss", around: "riverChoice" }
  },
  ankleLoss: {
    text: "You climb the hill that seems like a mountain,\n immensely tired now you fall climbing down the hill breaking your ankle!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "ankleLoss",
    isAudio: true,
    audioType: "ankle"
  },
  riverChoice: {
    text: "You go around the hill safely coming a to river.\n\n Do you attempt to CROSS or FOLLOW the river?",
    options: ["CROSS", "FOLLOW"],
    next: { cross: "currentLoss", follow: "riverBeach" }
  },
  currentLoss: {
    text: "You attempt to cross the river but are swept away by current!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "currentLoss"
  },
  riverBeach: {
    text: "You follow the river it leads to a beach.\n\n Do you try and SWIM or WALK the beach?",
    options: ["SWIM", "WALK"],
    next: { swim: "sharkLoss", walk: "pathTiming" }
  },
  sharkLoss: {
    text: "You swim and swim, indeed you swim, until a shark eats you!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "sharkLoss"
  },
  pathTiming: {
    text: "You walk the beach until you see a path.\n\n Do you go down the path NOW or LATER?",
    options: ["NOW", "LATER"],
    next: { now: "win", later: "later" }
  },
  now: {
    text: "The path leads you to Treasures.\n What a wild adventure!!!!\n\n YOU WIN",
    options: [],
    isAudio: true,
    audioType: "treasure"
  },
  later: {
    text: "You pateince is rewarding, The path leads you to Treasures beyond anything you could fathom.\n What a wild adventure!!!!\n\n YOU WIN",
    options: [],
    isAudio: true,
    audioType: "treasure2"
  },

  // BACK branch
  backReturn: {
    text: "You go back the way you came.\n\n BACK or NO?",
    options: ["BACK", "NO"],
    next: { back: "loopy", no: "backSplit" }
  },
 loopy: {
    text: "You go back again. Your stuck in a loop, not a real loop, just a Loopy Loop!!!!\n\n YOU LOSE",
    options: ["LOOPYLOOP"],
    next: {loopyloop: "loopLoop"},
  },
  loopLoop: {
    text: "You go back again? Your stuck in a loop, not a real loop, just a Loopy Loop!!!!\n\n YOU LOSE",
    options: ["LOOPYLOOP"],
    next: {loopyloop: "loopLoopLoop"},
  },
  loopLoopLoop: {
    text: "You go back again?? Your stuck in a loop, not a real loop, just a Loopy Loop!!!!\n\n YOU LOSE",
    options: ["LOOPYLOOP"],
    next: {loopyloop: "loopLoss"},
  },
  loopLoss: {
    text: "You go back again??? For the final time you die in a loop, not a real loop, just a Loopy Loop!!!!\n\n YOU LOSE FOR REAL THIS TIME",
    options: [],
    isLoss: true,
    lossType: "loopy"
  },
  backSplit: {
    text: "You stopped going back just as you began to not recognize the reverse route you took,\n theres a road that looks like the right way.\n\n Do you go LEFT or RIGHT?",
    options: ["LEFT", "RIGHT"],
    next: { left: "kirbyLoss", right: "streamChoice" }
  },
  kirbyLoss: {
    text: "You go left you come to a downed tree blocking your route.\n You try moving the tree, to no avail.\n All your energy is spent so you sit down for a little while.\n Moments later Kirby comes around the corner and sucks you up!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "kirbyLoss",
    isAudio: true,
    audioType: "kirby"
  },
  streamChoice: {
    text: "You go down the right way you feel quite confident this will lead to somewhere promicing, a land of riches perhaps.\n Halfway thru your daydream you come to a stream.\n\n Do you SWIM or FOLLOW the stream?",
    options: ["SWIM", "FOLLOW"],
    next: { swim: "piranhaLoss", follow: "streamFollow" }
  },
  piranhaLoss: {
    text: "You go for a dip enjoying the perfect water temp until you get eaten by piranhas!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "piranhaLoss"
  },
  streamFollow: {
    text: "You follow the stream, it has to lead somewhere but theres nothing in sight so far.\n\n Do you STRAY away or FOLLOW the stream?",
    options: ["STRAY", "FOLLOW"],
    next: { stray: "cowLoss", follow: "campChoice" }
  },
  cowLoss: {
    text: "You stray away from the stream knowing it wasnt a good idea.\n You walk and walk through feilds of flowers, feilds of wheat, and feilds of cows but you dont find a land of riches.\n\n YOU FIND COWS!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "cowLoss",
    isAudio: true,
    audioType: "cow"
  },
  campChoice: {
    text: "You continue to follow the stream for a day, stopping only to catch a fish.\n\n Do you stop to make CAMP or NOT?",
    options: ["CAMP", "NOT"],
    next: { not: "wolfLoss", camp: "morningChoice" }
  },
  wolfLoss: {
    text: "You decide to continue without making camp, you are mighty hungry by the time night falls.\n So are the wolves that just picked up your scent.\n Its not long before you are swarmed by the PACK that eats you for their dinner!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "wolfLoss",
    isAudio: true,
    audioType: "wolf"
  },
  morningChoice: {
    text: "You made camp setting up a makeshift shack out of sticks and tree limbs,\n also building a fire and cooking your delicious fish you caught earlier.\n Eating it and enjoying the beutiful clear night.\n\n In the morning you wake up with a full belly and plenty of energy ready to tackle the day.\n\n You pack up camp do you FOLLOW the stream or NOT?",
    options: ["FOLLOW", "NOT"],
    next: { not: "bullLoss", follow: "finalBeach" }
  },
  bullLoss: {
    text: "You do not continue to follow the stream instead walking in a diffent direction.\n This leads to a herd of bulls, you are wearing red so all the bulls charge at you!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "bullLoss"
  },
  finalBeach: {
    text: "Knowing this will lead the right way you follow the stream, after walking for miles you finally see a BEACH and PATH.\n\n Which way will you go?",
    options: ["BEACH", "PATH"],
    next: { beach: "saltyLoss", path: "win" }
  },
  saltyLoss: {
    text: "You walk the beach and enjoy the sand going swimming at one point, tasting the water,\n knowing that you would be as salty as the ocean when you never reach the path to treasure!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "saltyLoss"
  },
  win: {
    text: "The path leads you to Treasures.\n What a wild adventure!!!!\n\n YOU WIN",
    options: [],
    isAudio: true,
    audioType: "treasure"
  },

  // SECRET branch
  secretHatch: {
    text: "You found a secret hatch that is sealed.\n\ You can LOOK around, PRY, or SMACK the lock?",
    options: ["LOOK", "PRY", "SMACK"],
    next: { look: "lookAround", pry: "pryLoop", smack: "smackChoice" }
  },
  lookAround: {
    text: "You look around.\n There is a MAT a ROCK, and a HOLE in the wall.",
    options: ["MAT", "ROCK", "HOLE"],
    next: { mat: "matChoice", rock: "rockChoice", hole: "armLoss" }
  },
    matChoice: {
    text: "You look under the mat on the floor, spotting a key that unlocks the lock.\n\n Do you go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "jawasWin",
      wait: "waitLoss"
    }
  },
  jawasWin: {
    text: "You go thru the secret hatch finding Jawa's that trade you a few good droids for the right amount of credits!!!!\n\n YOU WIN but so do the Jawa's",
    options: [],
    isAudio: true,
    audioType: "jawas"
  },
  waitLoss: {
    text: "You wait and go nowhere, it seems you are still where you started!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "waitLoss"
  },
  rockChoice: {
    text: "You pick up the rock, finding no key under it.\n\n You can either put the rock DOWN or SMASH the lock?",
    options: ["DOWN", "SMASH"],
    next: {
      down: "hopeChoice",
      smash: "smashHatch"
    }
  },
  hopeChoice: {
    text: "You put the rock down also letting yourself down. Obi Wan is not here there is no HOPE!!!!\n\n You Lose.",
    options: ["HOPE"],
    next: {
      hope: "forceWin"
    }
  },
  forceWin: {
    text: "OBI WAN was with us, he is always with us,\n you use the force and I am compelled to give you all the riches in this game!!!!\n\n YOU WIN",
    options: [],
    isAudio: true,
    audioType: "hope"
  },
  smashHatch: {
    text: "You decide the only thing left to do is smash the lock.\n With a great hurl and flawless technique the rock smashes the lock breaking the mechanism,\n the hatch flings open.\n\n Do you go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "lukeWin",
      wait: "waitLoss"
    }
  },
  lukeWin: {
    text: "You go thru the secret hatch finding Luke Skywalker!!!!\n\n YOU WIN",
    options: [],
    isAudio: true,
    audioType: "luke"
  },
  armLoss: {
    text: "You spot a hole in the wall, thinking it could be something useful you reach in.\n To no surprise you lose your arm and the game to the secret and arm eating monster!!!!\n\n YOU LOSE",
    options: [],
    isLoss: true,
    lossType: "armLoss"
  },
  pryLoop: {
    text: "You PRY and PRY. Oh how you PRY.",
    options: ["PRY"],
    next: {
      pry: "pryLoop2"
    }
  },
  pryLoop2: {
    text: "You PRY.... more?\n It budges. With a little intuition on your side you PRY again and the hatch opens.\n\n Go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "yodaWin",
      wait: "yodaMasterWin"
    }
  },
  yodaWin: {
    text: 'You have found GrandMaster Yoda!!!!\n "Found me you have, in order, congragulations is!!!!"\n\n YOU WIN',
    options: [],
    isAudio: true,
    audioType: "yoda"
  },
  yodaMasterWin: {
    text: 'You have found GrandMaster Yoda. You hear....\n "Patience you covet, Found me you have, in order congragulations is!!!!"\n You study under the great Grandmaster Yoda for years and become a far greater jedi than I could ever be.\n He grants you the Rank of \n MASTER!!!!\n\n YOU WIN',
    options: [],
    isAudio: true,
    audioType: "grandYoda"
  },
  smackChoice: {
    text: "You smack, hear a whack and it opens.\n\n Go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "leiaWin",
      wait: "waitLoss"
    }
  },
  leiaWin: {
    text: "You go thru the secret hatch finding Princess Leia in the Jabba slave outfit!!!!\n\n YOU WIN AT LIFE",
    options: [],
    isAudio: true,
    audioType: "leia"
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
  ankle: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/ankleBreak-audio.mp3",
  bear: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/bear-audio.mp3",
  bite: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/cartoonBite-audio.mp3",
  cow: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/cowMoo-audio.mp3",
  darth: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/darthvader-audio.mp3",
  door: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/door-creaking-audio.mp3",
  dragFire: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/dragonFire-audio.mp3",
  dragRoar: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/dragonRoar-audio.mp3",
  may4th: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/forceBeWithYou-audio.mp3",
  hope: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/hope-audio.mp3",
  intro: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/intro-audio.mp3",
  jawas: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/jawas-audio.mp3",
  leia: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/leia-audio.mp3",
  lightsaber: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/lightsaber-audio.mp3",
  luke: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/lukeSkywalker-audio.mp3",
  mosquito:"https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/mosquito-audio.mp3",
  openDoor: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/openDoor-audio.mp3",
  snake: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/snakeRattle-audio.mp3",
  grandYoda: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/trainYoda-audio.mp3",
  treasure: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/treasure-audio.mp3",
  treasure2: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/treasure2-audio.mp3",
  win: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/win-audio.mp3",
  win2: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/win2-audio.mp3",
  kirby: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/windSuction-audio.mp3",
  wolf: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/wolfHowl-audio.mp3",
  yoda: "https://raw.githubusercontent.com/ArtBerger88/ArtRepo/main/yoda-audio.mp3",
};
let currentState = "start";

function render(stateKey) {
  const state = game[stateKey];
  currentState = stateKey;

  buttonsEl.innerHTML = "";

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
  }, 4500);
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
  resetBtn.textContent = "START OVER";
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
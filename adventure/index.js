const game = {
  start: {
    text: "Hello Adventurer!\nWelcome to 'The Lone Road'\nGOOD LUCK\n\nAre you ready, YES or NO?",
    options: ["YES", "NO"],
    next: { yes: "split", no: "notReady" }
  },
  notReady: {
    text: "You will never be truly ready.",
    options: []
  },
  split: {
    text: "You are walking down a road and come to a 4 way split. Do you go STRAIGHT, LEFT, RIGHT or BACK?",
    options: ["STRAIGHT", "LEFT", "RIGHT", "BACK"],
    next: {
      left: "leftThicket",
      right: "rightSplit",
      straight: "cottage",
      back: "backReturn"
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
    options: []
  },
  leftBeach: {
    text: "You come to a sandy beach. WALK the beach or SWIM the waters?",
    options: ["WALK", "SWIM"],
    next: { walk: "leftPathChoice", swim: "swimLoss" }
  },
  swimLoss: {
    text: "You attempted to brave the waters, to no avail!!!! YOU LOSE",
    options: []
  },
  leftPathChoice: {
    text: "You walked for a while until you see a path. Do you walk the PATH or follow the BEACH?",
    options: ["PATH", "BEACH"],
    next: { path: "win", beach: "beachLoss" }
  },
  win: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: []
  },
  beachLoss: {
    text: "You continue down the beach for days until you can no longer walk!!!! YOU LOSE",
    options: []
  },

  // RIGHT branch
  rightSplit: {
    text: "You walk for awhile coming to another split in the road. Do you go LEFT or RIGHT?",
    options: ["LEFT", "RIGHT"],
    next: { right: "snakeLoss", left: "rightSound" }
  },
  snakeLoss: {
    text: "A GIANT snake eats you!!!! YOU LOSE",
    options: []
  },
  rightSound: {
    text: "You hear a sound. Investigate YES or NO?",
    options: ["YES", "NO"],
    next: { yes: "dragonLoss", no: "clearingChoice" }
  },
  dragonLoss: {
    text: "You see a DRAGON sitting on gold. He turns you to ash!!!! YOU LOSE",
    options: []
  },
  clearingChoice: {
    text: "You see a clearing. Head TOWARDS or AWAY?",
    options: ["TOWARDS", "AWAY"],
    next: { away: "forestLoss", towards: "beachChoice" }
  },
  forestLoss: {
    text: "The forest darkens and you lose your way!!!! YOU LOSE",
    options: []
  },
  beachChoice: {
    text: "You reach a beach. Follow the PATH or BEACH?",
    options: ["PATH", "BEACH"],
    next: { path: "win", beach: "beachLoss" }
  },
  win: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: []
  },
  beachLoss: {
    text: "You continue down the beach for days until you can no longer walk!!!! YOU LOSE",
    options: []
  },

  // STRAIGHT branch
  cottage: {
    text: "You arrive at a cottage. Go in YES or NO?",
    options: ["YES", "NO"],
    next: { yes: "cottageStay", no: "dazedLoss" }
  },
  dazedLoss: {
    text: "You walk for days and become dazed!!!! YOU LOSE",
    options: []
  },
  cottageStay: {
    text: "Scavenge food and water. STAY or GO?",
    options: ["STAY", "GO"],
    next: { stay: "bearLoss", go: "trailChoice" }
  },
  bearLoss: {
    text: "A bear ravages the cottage and tears you to shreds!!!! YOU LOSE",
    options: []
  },
  trailChoice: {
    text: "You see a trail behind the cottage. ROAD or TRAIL?",
    options: ["ROAD", "TRAIL"],
    next: { road: "drifterEnd", trail: "hillChoice" }
  },
  drifterEnd: {
    text: "You become a wandering drifter. You don't lose, but you don't win either.",
    options: []
  },
  hillChoice: {
    text: "You arrive at a hill. Go AROUND or CLIMB?",
    options: ["AROUND", "CLIMB"],
    next: { climb: "ankleLoss", around: "riverChoice" }
  },
  ankleLoss: {
    text: "You fall and break your ankle!!!! YOU LOSE",
    options: []
  },
  riverChoice: {
    text: "You reach a river. CROSS or FOLLOW?",
    options: ["CROSS", "FOLLOW"],
    next: { cross: "currentLoss", follow: "riverBeach" }
  },
  currentLoss: {
    text: "Swept away by the current!!!! YOU LOSE",
    options: []
  },
  riverBeach: {
    text: "You reach a beach. SWIM or WALK?",
    options: ["SWIM", "WALK"],
    next: { swim: "sharkLoss", walk: "pathTiming" }
  },
  sharkLoss: {
    text: "A shark eats you!!!! YOU LOSE",
    options: []
  },
  pathTiming: {
    text: "You see a path. Go NOW or LATER?",
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
    text: "You're stuck in a loopy loop!!!! YOU LOSE",
    options: []
  },
  backSplit: {
    text: "You see a promising road. Go LEFT or RIGHT?",
    options: ["LEFT", "RIGHT"],
    next: { left: "kirbyLoss", right: "streamChoice" }
  },
  kirbyLoss: {
    text: "Kirby sucks you up!!!! YOU LOSE",
    options: []
  },
  streamChoice: {
    text: "You come to a stream. SWIM or FOLLOW?",
    options: ["SWIM", "FOLLOW"],
    next: { swim: "piranhaLoss", follow: "streamFollow" }
  },
  piranhaLoss: {
    text: "Eaten by piranhas!!!! YOU LOSE",
    options: []
  },
  streamFollow: {
    text: "STRAY away or FOLLOW the stream?",
    options: ["STRAY", "FOLLOW"],
    next: { stray: "cowLoss", follow: "campChoice" }
  },
  cowLoss: {
    text: "You find cows, not riches!!!! YOU LOSE",
    options: []
  },
  campChoice: {
    text: "Make CAMP or NOT?",
    options: ["CAMP", "NOT"],
    next: { not: "wolfLoss", camp: "morningChoice" }
  },
  wolfLoss: {
    text: "Wolves swarm you!!!! YOU LOSE",
    options: []
  },
  morningChoice: {
    text: "FOLLOW the stream or NOT?",
    options: ["FOLLOW", "NOT"],
    next: { not: "bullLoss", follow: "finalBeach" }
  },
  bullLoss: {
    text: "Charged by bulls!!!! YOU LOSE",
    options: []
  },
  finalBeach: {
    text: "You see a BEACH and a PATH. Which way?",
    options: ["BEACH", "PATH"],
    next: { beach: "saltyLoss", path: "win" }
  },
  saltyLoss: {
    text: "You never reach the treasure!!!! YOU LOSE",
    options: []
  },
  win: {
    text: "The path leads you to Treasures, what a wild adventure!!!! YOU WIN",
    options: []
  },

  // SECRET branch
  secretHatch: {
    text: "You found a secret hatch. LOOK, PRY, or SMACK the lock?",
    options: ["LOOK", "PRY", "SMACK"],
    next: { look: "lookAround", pry: "pryLoop", smack: "smackChoice" }
  },
  lookAround: {
    text: "You see a MAT, a ROCK, and a HOLE.",
    options: ["MAT", "ROCK", "HOLE"],
    next: { mat: "matChoice", rock: "rockChoice", hole: "armLoss" }
  },
    matChoice: {
    text: "You look under the mat and find a key that unlocks the hatch. Do you go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "jawasWin",
      wait: "waitLoss"
    }
  },
  jawasWin: {
    text: "You go thru the secret hatch finding jawas that trade you a few good droids for the right amount of credits!!!! YOU WIN",
    options: []
  },
  waitLoss: {
    text: "You wait and go nowhere, it seems you are still where you started!!!! YOU LOSE",
    options: []
  },
  rockChoice: {
    text: "You pick up the rock, finding no key under it. Put the rock DOWN or SMASH the lock?",
    options: ["DOWN", "SMASH"],
    next: {
      down: "hopeChoice",
      smash: "smashHatch"
    }
  },
  hopeChoice: {
    text: "You put the rock down. Obi Wan is not here. There is no HOPE. Type HOPE to use the force.",
    options: ["HOPE"],
    next: {
      hope: "forceWin"
    }
  },
  forceWin: {
    text: "OBI WAN was with us. You use the force and I am compelled to give you all the riches in this game!!!! YOU WIN",
    options: []
  },
  smashHatch: {
    text: "You smash the lock with flawless technique. The hatch flings open. Do you go THRU or WAIT?",
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
    text: "You reach into the hole and lose your arm to the secret monster!!!! YOU LOSE",
    options: []
  },
  pryLoop: {
    text: "You PRY and PRY. It budges. With intuition you PRY again and the hatch opens. Go THRU or WAIT?",
    options: ["THRU", "WAIT"],
    next: {
      thru: "yodaWin",
      wait: "yodaMasterWin"
    }
  },
  yodaWin: {
    text: "You have found GrandMaster Yoda!!!! Found me you have, in order, congragulations is!!!! YOU WIN",
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
    text: "You go thru the secret hatch finding Princess Leia in the Jabba slave outfit!!!! YOU WIN",
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
let currentState = "start";

function render(stateKey) {
  const state = game[stateKey];
  currentState = stateKey;
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

function addResetButton() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "RESET";
  resetBtn.onclick = () => render("start");
  buttonsEl.appendChild(resetBtn);
}

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.key.toLowerCase() === "s") {
    render("secretHatch");
  }
});

render(currentState);
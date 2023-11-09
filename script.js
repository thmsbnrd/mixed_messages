const travelAdventure = {
  countries: ["Japan", "Brazil", "Italy", "Kenya", "Australia"],
  activities: [
    "savor the famous street food",
    "visit a historical site",
    "buy a unique souvenir gift",
    "take a scenic hike",
    "enjoy a local cooking class",
  ],
  companions: [
    "a friend",
    "a coworker",
    "your sibling",
    "your parent",
    "your significant other",
  ],
};

const randomPick = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const craftMessage = (objArr) => {
  let country;
  let activity;
  let companion;

  let keys = Object.keys(objArr);

  for (let key of keys) {
    switch (key) {
      case "countries":
        country = randomPick(objArr[key]);
        break;
      case "activities":
        activity = randomPick(objArr[key]);
        break;
      case "companions":
        companion = randomPick(objArr[key]);
        break;
      default:
        console.log("Not a category");
    }
  }

  let message = `Join ${companion} for an unforgettable adventure in ${country} to ${activity}.`;

  return message;
};

console.log(craftMessage(travelAdventure));

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

const randCountry = randomPick(travelAdventure.countries);
const randActivity = randomPick(travelAdventure.activities);
const randCompanion = randomPick(travelAdventure.companions);

console.log(randCountry);
console.log(randActivity);
console.log(randCompanion);

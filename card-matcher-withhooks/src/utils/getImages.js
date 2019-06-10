import { uniqueId, shuffle } from "lodash";
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);
const filterdImage = images.filter(
  image => !image.startsWith("/static/media/back-card")
);
const EASY = filterdImage.slice(0, 1);
const MEDIUM = filterdImage.slice(0, 8);
const HARD = filterdImage;

export function formatCards(data) {
  const formatData = data.map(card => {
    const id = uniqueId();
    return {
      id: id,
      data: {
        imageSrc: card,
        isTurned: false,
        isMatched: false
      }
    };
  });

  return shuffle([...formatData, ...formatData]);
}
export const resetCard = cards => {
  return cards.map(card => {
    return {
      id: card.id,
      data: {
        imageSrc: card["data"]["imageSrc"],
        isTurned: false,
        isMatch: false
      }
    };
  });
};
export const Cards = {
  EASY: formatCards(EASY),
  MEDIUM: formatCards(MEDIUM),
  HARD: formatCards(HARD)
};

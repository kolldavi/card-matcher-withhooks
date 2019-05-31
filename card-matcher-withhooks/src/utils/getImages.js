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

export default filterdImage;
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

export const Cards = formatCards(filterdImage);

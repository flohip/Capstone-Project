//takes an width and ratio as input to calculate the height of e.g. a picture
export default function calculateHeight(width, ratio) {
  let height = width * ratio;
  return height;
}

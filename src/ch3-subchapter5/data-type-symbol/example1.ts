const COLOR_RED = Symbol("Red");
const COLOR_ORANGE = Symbol("Orange");
const COLOR_YELLOW = Symbol("Yellow");
const COLOR_GREEN = Symbol("Green");
const COLOR_BLUE = Symbol("Blue");
const COLOR_VIOLET = Symbol("Violet");

function getComplement(color: Symbol) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_ORANGE:
      return COLOR_BLUE;
    case COLOR_YELLOW:
      return COLOR_VIOLET;
    case COLOR_GREEN:
      return COLOR_ORANGE;
    case COLOR_VIOLET:
      return COLOR_YELLOW;
  }
}
console.log(getComplement(COLOR_RED)); //Symbol(Green)

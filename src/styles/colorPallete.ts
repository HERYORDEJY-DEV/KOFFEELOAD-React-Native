export const Primary = (assent?: number) => {
  if (assent === 2) {
    return '#A47551';
  } else if (assent === 3) {
    return '#D0B49F';
  } else if (assent === 4) {
    return '#E4D4C8';
  } else {
    return '#523A28';
  }
};

export const Secondary = (assent?: number) => {
  if (assent === 2) {
    return '##FFB1B4';
  } else if (assent === 3) {
    return '#FFDADB';
  } else {
    return '#FC696F';
  }
};

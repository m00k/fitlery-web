let lastId = 0;

const id = () => {
  lastId = lastId > 98
    ? 0
    : lastId + 1;
  return lastId < 10
    ? `0${lastId}`
    : `${lastId}`;
};

export default id;

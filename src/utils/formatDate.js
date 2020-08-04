const formatDate = (date) => {
  const day = date.split('/')[0];
  const mounth = date.split('/')[1];
  const year = date.split('/')[2];
  return `${year}-${`0${mounth}`.slice(-2)}-${`0${day}`.slice(-2)}`;
};

export default formatDate;

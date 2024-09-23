import moment from "moment";

const formatDate = (date: Date) => {
  return moment(new Date(date)).format('MM/DD/YYYY');
};

export default formatDate;
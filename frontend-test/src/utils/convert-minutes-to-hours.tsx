const minutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60).toString();
  const min = (minutes % 60).toString();

  return `${hours.slice(-2)}h ${min.slice(-2)}min`;
};

export default minutesToHours;

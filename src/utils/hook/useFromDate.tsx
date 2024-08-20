function useFromDate(
  date = new Date(),
) {
  const now = new Date();
  const diffdate = Math.floor((now.getTime() - date.getTime())/(1000 * 60 * 60 * 24));
  if (diffdate === 1) {
    return 'today';
  } else if (diffdate < 7) {
    return `${diffdate} days ago`
  } else if (diffdate < 29) {
    return `${Math.floor(diffdate/7)} weeks ago`
  } else if (diffdate < 365) {
    return `${Math.floor(diffdate/30)} month ago`
  } else {
    return `${Math.floor(diffdate/365)} years ago`
  }
};

export default useFromDate;
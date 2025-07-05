

export const formatCurrency = (value, currency) => {
  return new Intl.NumberFormat("en-US", {
    // style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(value);
}






const formatFullDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}


// Format time to: 2:30 PM
const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}


export const formatFullDateTime = (date) => {
  const dateObj = new Date(date);
  return `${formatFullDate(dateObj)} ${formatTime(dateObj)}`;
}


export const getStableCoinLogo = (coin) => {
  const logo = stablecoinLogos[coin.toLowerCase()]
  return logo  ? logo : stablecoinLogos["usdc"]
}
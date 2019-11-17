export const convertCoins = usd => {
  const coins = parseFloat(usd) * 100

  return (Math.round(coins * 100) / 100).toFixed(1)
}

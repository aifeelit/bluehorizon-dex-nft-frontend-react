const hostName = window.location.hostname

const getTokenLogoURL = (address: string) =>
  // `https://assets.trustwalletapp.com/blockchains/smartchain/assets/${address}/logo.png`
  `/images/tokens/${address}.png`

export default getTokenLogoURL

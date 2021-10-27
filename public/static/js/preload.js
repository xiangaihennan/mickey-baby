// beforeInteractive
const isProductions = document.domain == 'mickey-baby.vercel.app'
isProductions && (console.log = (params) => {})

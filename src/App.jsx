import './App.css'

function App() {
  // Prompt the user to enter an amount.
  const rawValue = prompt('Bir məbləğ daxil edin')
  const amount = Number(rawValue)

  // Prompt the user to choose a currency for conversion.
  const currency = prompt('Pul seçin: USD və ya AZN')

  let resultMessage = ''

  if (Number.isNaN(amount)) {
    resultMessage = 'Xəta: rəqəm daxil edilmədi.'
  } else {
    switch (currency) {
      case 'AZN':
        resultMessage = `AZN → USD: ${(amount * 0.59).toFixed(2)}`
        break
      case 'USD':
        resultMessage = `USD → AZN: ${(amount * 1.70).toFixed(2)}`
        break
      default:
        resultMessage = 'Xəta: düzgün valyuta seçilməyib.'
        break
    }
  }

  // Log the result to the browser console as well as display it in the page.
  console.log(resultMessage)

  return (
    <main className="app-container">
      <h1>Valyuta Konvertoru</h1>
      <p>{resultMessage}</p>
      <small>Bu tətbiq sadə məbləğ və valyuta seçimi ilə işləyir.</small>
    </main>
  )
}

export default App

import './App.css'

function App() {
  // Prompt the user to enter the amount they want to convert.
  const enteredAmount = prompt('Bir məbləğ daxil edin:')
  const numericAmount = Number(enteredAmount)

  // Ask the user which currency they want to convert from.
  const selectedCurrency = prompt('Konvertasiya üçün valyutanı seçin: USD və ya AZN')

  // Prepare a message for the final result.
  let conversionMessage = ''

  if (Number.isNaN(numericAmount)) {
    conversionMessage = 'Xəta: rəqəm daxil edilmədi. Zəhmət olmasa, yalnız ədədi dəyər daxil edin.'
  } else {
    switch (selectedCurrency) {
      case 'AZN':
        conversionMessage = `${numericAmount.toFixed(2)} AZN = ${(numericAmount * 0.59).toFixed(2)} USD`
        break
      case 'USD':
        conversionMessage = `${numericAmount.toFixed(2)} USD = ${(numericAmount * 1.70).toFixed(2)} AZN`
        break
      default:
        conversionMessage = 'Xəta: düzgün valyuta seçilməyib. Seçim yalnız "USD" və ya "AZN" ola bilər.'
        break
    }
  }

  // Show the computed result in the console for debugging.
  console.log('Valyuta konvertasiyası nəticəsi:', conversionMessage)

  return (
    <main className="app-container">
      <h1>Valyuta Konvertoru</h1>
      <p>{conversionMessage}</p>
      <small>Bu tətbiq daxil edilmiş məbləği seçilmiş valyutaya çevirir.</small>
    </main>
  )
}

export default App

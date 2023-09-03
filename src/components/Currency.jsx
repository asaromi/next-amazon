import React from 'react'

const typeCurrency = {
  "USD": "$",
  "EUR": "€",
  "GBP": "£",
  "JPY": "¥",
  "BAHT": "฿",
  "IDR": "Rp",
  "MYR": "RM",
}

const Currency = ({ price, currency = 'USD' }) => {
  const currencyPattern = typeCurrency[currency] || '$'

  return (
    <p className="text-sm inline-flex">
      <span className="font-medium mr-2">{currencyPattern}</span>
      {price}
    </p>
  )
}

export default Currency

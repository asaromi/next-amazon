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
export const getCurrency = ({ currency = 'USD', number = 0, locale = 'en-US' }) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(number)

const Currency = ({ price, currency = 'USD' }) => {
  return (
    <p className="text-sm inline-flex">
      {getCurrency({ currency, number: price })}
    </p>
  )
}

export default Currency

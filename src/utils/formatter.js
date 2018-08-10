export const currencyFormatter = amount => amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
export const dateFormatter = date => new Date(date.split('-').reverse().join('-'))
export const msToDays = ms => ms / 86400000

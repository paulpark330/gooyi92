/** @format */

const form = document.querySelector('#form');
let $netSales = document.querySelector('#net-sales');
let $bossMoney = document.querySelector('#boss-money');

let netSales,
  bossMoney,
  delivery = 0;

let tip = 0;
let payout = 0;
let openMoney = 0;
let ccSales = 0;
let cashSales = 0;
let tax = 0;
let doordash = 0;
let grubhub = 0;
let fantuan = 0;

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  tip = parseFloat(formData.get('tip'));
  payout = parseFloat(formData.get('payout'));
  openMoney = parseFloat(formData.get('open-money'));
  ccSales = parseFloat(formData.get('cc-sales'));
  cashSales = parseFloat(formData.get('cash-sales'));
  tax = parseFloat(formData.get('tax'));
  doordash = parseFloat(formData.get('doordash'));
  grubhub = parseFloat(formData.get('grubhub'));
  fantuan = parseFloat(formData.get('fantuan'));
  netSales = (ccSales + cashSales - tax).toFixed(2);
  delivery = (doordash + grubhub + fantuan).toFixed(2);
  bossMoney = (cashSales - tip - payout - delivery).toFixed(2);
  $netSales.value = netSales;
  $bossMoney.value = bossMoney;
};

form.addEventListener('submit', handleSubmit);

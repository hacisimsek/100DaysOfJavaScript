const quote = [
  'You have a lovely smile.',
  'I looked my lovely future wife in the eye.',
  'There is a lovely beach that stretches miles along the blue Atlantic.',
  'Father will buy me a lovely new watch.',
  'I had many lovely things for Christmas.',
  'Lovely to hear from you, especially today.',
];

const generetor = () => {
  const randomeNumber = Math.floor(Math.random() * quote.length);
  document.getElementById('QuoteGenerator').innerHTML = quote[randomeNumber];
};

export const fetchQuote = () => {
  return $.ajax({
    method: 'GET',
    url: "/api/quotes/1"
  });
};

//https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

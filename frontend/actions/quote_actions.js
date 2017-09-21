import * as QuoteAPIUtil from '../util/quote_api_util';

export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

export const fetchQuote = () => dispatch => (
  QuoteAPIUtil.fetchQuote().then(quote => (
    dispatch(receiveQuote(quote))
  )
  )
);

export const receiveQuote = quote => ({
  type: RECEIVE_QUOTE,
  quote
});

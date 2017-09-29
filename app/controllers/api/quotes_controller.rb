class Api::QuotesController < ApplicationController
  def show
    start = Quote.first.id
    ending = Quote.last.id
    if Quote.where(day: Date.today.day)
      num = Quote.where(day: Date.today.day)[0].id
      @quote = Quote.find(num)
    else
      num = rand(start..ending)
      @quote = Quote.find(num)
      @quote.update(day: Date.today.day)
    end
  end
end

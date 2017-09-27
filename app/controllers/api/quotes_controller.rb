class Api::QuotesController < ApplicationController
  def show
    start = Quote.first.id
    ending = Quote.last.id
    num = rand(start..ending)
    @quote = Quote.find(num)
  end
end

class Api::CalendarsController < ApplicationController
  def create
    @calendar = Calendar.new(calendar_params)
    if @calendar.save

    else
      
    end
  end

  def show

  end

  def destroy

  end
end

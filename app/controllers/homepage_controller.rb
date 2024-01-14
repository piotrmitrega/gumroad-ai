class HomepageController < ApplicationController
  def index
    puts ENV['GUMROAD_APP_ID'], ENV['GUMROAD_APP_SECRET']
  end
end

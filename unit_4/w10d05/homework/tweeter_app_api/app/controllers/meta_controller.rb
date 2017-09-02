class MetaController < ApplicationController

  #meta route
  def about
    render json: { author: "President Kool-chair", last_updated: "10 Jan 2017" }
  end
end

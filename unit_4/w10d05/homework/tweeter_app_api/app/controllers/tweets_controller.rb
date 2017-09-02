class TweetsController < ApplicationController

  #index route
  def index
    render json: {status: 200, tweets: Tweet.all}
  end

  #show route
  def show
    one_tweet = Tweet.find(params[:id])
    render json: {status: 200, tweet: one_tweet}
  end

end

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

  #create route
  def create
    tweet = Tweet.new(tweet_params)

    if tweet.save
      render json: {status: 200, tweet: tweet}
    else
      render json: {status: 422, tweet: tweet}
    end
  end

  #private method

  def tweet_params
    params.require(:tweet).permit(:title, :content, :author)
  end

end

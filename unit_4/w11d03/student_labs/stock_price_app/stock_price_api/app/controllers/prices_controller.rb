class PricesController < ApplicationController
  before_action :set_price, only: [:show, :update, :destroy]

  # GET /prices
  def index
    @prices = Price.all

    render json: @prices
  end

  # GET /prices/1
  def show
    stock_prices = @stock.prices
    render json: { stock: @stock, prices: stock_prices }


  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_price
      @price = Price.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def price_params
      params.require(:price).permit(:avg_price, :stock_id, :date)
    end
end

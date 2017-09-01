class BooksController < ApplicationController

  def index
    render json: {status: 200, books: Book.all}
  end

  def show
    found_book = Book.find(params[:id])
    render json: {status: 200, book: found_book}
  end
end

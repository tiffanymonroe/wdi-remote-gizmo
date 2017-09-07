class RostersController < ApplicationController
  before_action :set_roster, only: [:show, :update, :destroy]

  # GET /rosters
  def index
    @rosters = Roster.all

    render json: @rosters.to_json(include: [:song, :playlist])
  end

  # GET /rosters/1
  def show
    render json: @roster.to_json(include: [:song, :playlist])
  end

  # POST /rosters
  def create
    @roster = Roster.new(roster_params)

    if @roster.save
      render json: @roster, status: :created, location: @roster
    else
      render json: @roster.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rosters/1
  def update
    if @roster.update(roster_params)
      render json: @roster
    else
      render json: @roster.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rosters/1
  def destroy
    @roster.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_roster
      @roster = Roster.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def roster_params
      params.require(:roster).permit(:playlist_id, :song_id, :plays)
    end
end

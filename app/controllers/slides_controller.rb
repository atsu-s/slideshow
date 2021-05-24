class SlidesController < ApplicationController
  before_action :set_slide, only: [:show, :destroy]

  def index
    @slides = Slide.order("created_at DESC")
    @shares = Share.order("created_at DESC")
  end

  def new
    @slide = Slide.new
  end

  def create
    @slide = Slide.new(slide_params)
    if @slide.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
  end

  def destroy
    @slide.destroy
  end

  private
  def slide_params
    params.require(:slide).permit(:title, images: []).merge(user_id: current_user.id)
  end

  def set_slide
    @slide = Slide.find(params[:id])
  end
end

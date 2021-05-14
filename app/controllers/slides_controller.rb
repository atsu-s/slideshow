class SlidesController < ApplicationController
  def index
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

  private
  def slide_params
    params.require(:slide).permit(:title, images: []).merge(user_id: current_user.id)
  end
end

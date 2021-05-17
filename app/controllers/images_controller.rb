class ImagesController < ApplicationController
  def index
  end

  def show
    @slide = Slide.find(params[:id])
  end

end

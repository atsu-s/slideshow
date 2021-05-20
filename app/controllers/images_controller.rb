class ImagesController < ApplicationController
  before_action :authenticate_user!, except: [:show, :destroy]
  before_action :set_image, only: :show

  def index
  end

  def show
  end

  private
  def set_image
    @slide = Slide.find(params[:id])
  end
end

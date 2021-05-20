class SharesController < ApplicationController
  before_action :set_slide, only: [:new, :create]

  def index
  end

  def new
    @share = Share.new
  end

  def create
    @share = Share.new(share_params)
    if @share.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def share_params
    params.require(:share).permit(:text).merge(slide_id: @slide.id)
  end

  def set_slide
    @slide = Slide.find_by(id: params[:slide_id])
  end

end

class SharesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_share, only: [:show, :destroy]
  before_action :set_slide, only: [:index, :new, :create, :show]

  def index
    @shares = Share.order("created_at DESC")
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

  def show
    @comment = Comment.new
    @comments = @slide.comments.includes(:user)
  end

  def destroy
    @share.destroy
    redirect_to root_path
  end

  private
  def share_params
    params.require(:share).permit(:text).merge(slide_id: @slide.id)
  end

  def set_share
    @share = Share.find(params[:id])
  end

  def set_slide
    @slide = Slide.find_by(id: params[:slide_id])
  end
end
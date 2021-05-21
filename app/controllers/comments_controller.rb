class CommentsController < ApplicationController
  before_action :set_slide, only: [:index, :new, :create]

  def index
    @comments = Comment.order("created_at DESC")
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      redirect_to slide_comments_path
    else
      @slide = @comment.slide
      @comments = @slide.comments
      render :new
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:comment_text).merge(user_id: current_user.id, slide_id: params[:slide_id])
  end

  def set_slide
    @slide = Slide.find_by(id: params[:slide_id])
  end
end
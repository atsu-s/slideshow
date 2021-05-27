require 'rails_helper'

RSpec.describe Comment, type: :model do
  before do
    @comment = FactoryBot.build(:comment)
  end

  describe 'コメント' do
    context 'コメントできるとき' do
      it 'comment_textがあれば作成できる' do
        expect(@comment).to be_valid
      end
    end

    context 'コメントできないとき' do
      it 'comment_textが空だとコメントできない' do
        @comment.comment_text = ''
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Comment text can't be blank")
      end

      it 'comment_textが101文字以上だとコメントできない' do
        @comment.comment_text = "a" * 101
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Comment text は100文字以内で入力して下さい")
      end

      it 'userが紐付いていないとコメントできない' do
        @comment.user = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("User must exist")
      end

      it 'slideが紐付いていないとコメントできない' do
        @comment.slide = nil
        @comment.valid?
        expect(@comment.errors.full_messages).to include("Slide must exist")
      end
    end
  end
end

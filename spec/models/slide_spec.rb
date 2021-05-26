require 'rails_helper'

RSpec.describe Slide, type: :model do
  before do
    @slide = FactoryBot.build(:slide)
  end

  describe 'slide作成' do
    context 'slideを作成できるとき' do
      it 'titleと画像が1枚以上あれば作成できる' do
        expect(@slide).to be_valid
      end
    end

    context 'slideを作成できないとき' do
      it 'titleが空だと作成できない' do
        @slide.title = ''
        @slide.valid?
        expect(@slide.errors.full_messages).to include("Title can't be blank")
      end

      it 'titleが21文字以上だと作成できない' do
        @slide.title = "a" * 21
        @slide.valid?
        expect(@slide.errors.full_messages).to include("Title is too long (maximum is 20 characters)")
      end

      it '画像が空だと作成できない' do
        @slide.images = nil
        @slide.valid?
        expect(@slide.errors.full_messages).to include("Images can't be blank")
      end

      it 'userが紐付いていないと作成できない' do
        @slide.user = nil
        @slide.valid?
        expect(@slide.errors.full_messages).to include("User must exist")
      end
    end
  end
end

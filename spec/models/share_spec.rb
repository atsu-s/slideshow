require 'rails_helper'

RSpec.describe Share, type: :model do
  before do
    @share = FactoryBot.build(:share)
  end

  describe '公開' do
    context '公開できるとき' do
      it 'textがあれば作成できる' do
        expect(@share).to be_valid
      end
    end

    context '公開できないとき' do
      it 'textが空だと公開できない' do
        @share.text = ''
        @share.valid?
        expect(@share.errors.full_messages).to include("Text can't be blank")
      end

      it 'textが101文字以上だと公開できない' do
        @share.text = "a" * 101
        @share.valid?
        expect(@share.errors.full_messages).to include("Text is too long (maximum is 100 characters)")
      end

      it 'slideが紐付いていないと登録できない' do
        @share.slide = nil
        @share.valid?
        expect(@share.errors.full_messages).to include("Slide must exist")
      end

      it '既に公開しているslideは公開できない' do
        @share.slide_id = 1
        @share.slide_id = 1
        @share.valid?
        expect(@share.errors.full_messages).to include("Slide must exist")
      end
    end
  end
end

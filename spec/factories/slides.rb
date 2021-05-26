FactoryBot.define do
  factory :slide do
    title              {"test"}
    association :user

    after(:build) do |slide|
      slide.images.attach(io: File.open('public/images/test_image.png'), filename: 'test_image.png', content_type: 'image/png')
    end
  end
end

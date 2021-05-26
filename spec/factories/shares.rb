FactoryBot.define do
  factory :share do
    text              {"test"}
    association :slide
    
  end
end

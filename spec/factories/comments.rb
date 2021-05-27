FactoryBot.define do
  factory :comment do
    comment_text    {"test"}
    association :user
    association :slide

  end
end

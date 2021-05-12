# テーブル設計

## users テーブル

| Column             | Type    | Option                    |
|--------------------|---------|---------------------------|
| nickname           | string  | null: false               |
| email              | string  | null: false, unique: true |
| encrypted_password | string  | null: false               |
| sex_id             | integer | null: false               |

### Association

- has_many   :slides
- has_many   :comments

## slides テーブル

| Column             | Type       | Option                         |
|--------------------|------------|--------------------------------|
| title              | string     | null: false                    |
| user               | references | null: false, foreign_key: true |


### Association

- has_many   :photos
- has_many   :comments
- belongs_to :user

## photos テーブル

| Column | Type       | Option                         |
|--------|------------|--------------------------------|
| image  | string     | null: false                    |
| slide  | references | null: false, foreign_key: true |

### Association

- belongs_to :slide

## comments テーブル

| Column | Type       | Option                         |
|--------|------------|--------------------------------|
| text   | text       | null: false                    |
| user   | references | null: false, foreign_key: true |
| slide  | references | null: false, foreign_key: true |

### Association

- belongs_to user
- belongs_to slide
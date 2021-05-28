# アプリ名

### SlideShow

# 概要

自身の機器に入っている画像データを10枚まで保存してまとめることが可能で、

SlideShow形式で閲覧することができます。また他の人の制作物も閲覧することも可能です。

# 本番環境

<https://slideshow-35579.herokuapp.com/>

ログイン情報（テスト用）

* Email : <show@gmail.com>
* Password : show12

# 制作背景（意図）

昨今ではスマートフォンで簡単に写真を撮影することができます。しかし、簡単すぎるあまり

つい撮影をしすぎてしまい、どれがどの写真なのか、似たような写真を撮影してしまい、上手く整理が

できないといった事象に見舞われてしまうことが多々起きてしまいます。私はその課題を解決できないかと考え、

本アプリの制作を行いました。

本アプリは上記の課題を解決すると共に、任意の作品を公開する機能を実装したことによりSNSのような用途でも

使用することが可能です。

# DEMO

## トップページ

<img width="1440" alt="スクリーンショット 2021-05-28 15 08 32" src="https://user-images.githubusercontent.com/82425024/119938008-aeadfd00-bfc6-11eb-8994-8cede399cdf9.png">

* 自身の制作した作品の一枚目の画像が表示されます。各画像をクリックすることで、その作品の詳細ページへと進むことができます。

* 右上にあるメニューボタンをクリックすることで、作品の制作画面や公開されている作品一覧画面への遷移、ログアウトするボタンが

  でてきます

## スライド作成画面

<img width="1440" alt="スクリーンショット 2021-05-28 15 22 21" src="https://user-images.githubusercontent.com/82425024/119939399-c71f1700-bfc8-11eb-9281-61815c197b73.png">

* 画像フォームをクリックすると、画像を選択することができ、選択した画像はプレビュー表示されるので完成形をイメージしながら

  制作することが可能です。

* 右上のResetボタンをクリックすることで初期状態に戻りやり直しができます。Saveボタンをクリックすることで作品の保存が可能です

## 詳細画面

<img width="1440" alt="スクリーンショット 2021-05-28 15 50 31" src="https://user-images.githubusercontent.com/82425024/119942168-790c1280-bfcc-11eb-83c1-7b5ad7c38057.png">

* 詳細画面では製作者、1枚目の画像、作品のタイトルを閲覧することが可能です。

* 詳細画面では3つのボタンを新たに設置しています。それぞれ作品制作画面、公開画面、削除画面へ遷移するようになっています。

## スライドショー画面

<img width="1440" alt="スクリーンショット 2021-05-28 15 33 01" src="https://user-images.githubusercontent.com/82425024/119940419-1b76c680-bfca-11eb-9906-5b1547b737e8.png">

* スライドショー画面は三次元的に表示され前後の画像が見切れるタイプのもので実装しました。画像の下部にナビを設置することにより

  視覚的に何枚目の画像なのかを把握することが可能です。

* 本アプリはAWSのS3へ画像が保存されるように設定を行っています。

## 公開画面

<img width="1440" alt="スクリーンショット 2021-05-28 15 54 58" src="https://user-images.githubusercontent.com/82425024/119942680-16674680-bfcd-11eb-8e48-8f810dd27151.png">

* 公開画面では作成した作品の要素に加え、作品の説明文を記載することができ、コンセプトや作成時の心境を記載することが可能です

## 削除画面

<img width="1440" alt="スクリーンショット 2021-05-28 15 44 50" src="https://user-images.githubusercontent.com/82425024/119941532-b1f7b780-bfcb-11eb-83a0-01b906044d13.png">

* 削除画面はプルダウンメニューバーの削除ボタンをクリックした際に画面が切り替わるように設定しています。確認画面を

  ひとつ挟むことにより、誤って作品を削除してしまうことを防止しています。

# 工夫した点

* どの画面においてもアニメーションやボタンの動きを入れることにより、質素なイメージがつかないようにしました。

* なるべく色に統一感をもたせるようにし、淡い色を多く採用することで、落ち着いた雰囲気をもたせました。アクセントとしてクリック時に

  多少の刺激色が表示されるようにしました。

* コメント機能を実装することにより、アプリ内で多少のコミュニケーションが取れるようにしました。

# 使用技術（開発環境）

## バックエンド

  Ruby,Ruby on Rails

## フロントエンド

  HTML,CSS,JavaScript,jQuery(Slick),Swiper

## インフラ

  AWS(S3)

## アプリケーションサーバ(本番環境)

  Heroku

## ソース管理

  GitHub,GitHub Desktop

## テスト

  RSpec

## エディタ

  VSCode

# 課題や今後実装したい機能

* 作品の編集をすることができないので、編集機能を実装したいです。

* 検索機能やユーザー詳細ページ機能を実装し、観たい作品をすぐに見つけられる機能を実装したいです。

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
| share              | references | null: false, foreign_key: true |


### Association

- has_many   :comments
- belongs_to :user
- has_one :share
- has_many_attached :images


## shares テーブル

| Column | Type       | Option                         |
|--------|------------|--------------------------------|
| text   | text       | null: false                    |
| slide  | references | null: false, foreign_key: true |

### Association

- belongs_to slide

## comments テーブル

| Column         | Type       | Option                         |
|----------------|------------|--------------------------------|
| comment_text   | string     | null: false                    |
| user           | references | null: false, foreign_key: true |
| slide          | references | null: false, foreign_key: true |

### Association

- belongs_to user
- belongs_to slide
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 0) do

  create_table "authors", primary_key: "author_id", id: { type: :string, limit: 50 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "author_name", limit: 100, null: false
  end

  create_table "book_categorys", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "book_id", limit: 50, null: false
    t.string "category_id", limit: 50, null: false
    t.index ["book_id"], name: "book_id"
    t.index ["category_id"], name: "category_id"
  end

  create_table "book_languages", id: false, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "book_id", limit: 50, null: false
    t.string "language_id", limit: 50, null: false
    t.index ["book_id"], name: "book_id"
    t.index ["language_id"], name: "language_id"
  end

  create_table "books", primary_key: "book_id", id: { type: :string, limit: 50 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "book_title", limit: 100, null: false
    t.string "book_des", limit: 300, null: false
    t.float "book_price", limit: 53, null: false
    t.float "book_percent_sale", null: false
    t.integer "book_stock", null: false
    t.string "book_image_url", limit: 250, null: false
    t.string "author_id", limit: 50, null: false
    t.index ["author_id"], name: "author_id"
  end

  create_table "categorys", primary_key: "category_id", id: { type: :string, limit: 50 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "category_content", limit: 50, null: false
  end

  create_table "customers", primary_key: "customer_id", id: { type: :string, limit: 50 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "customer_name", limit: 100, null: false
    t.string "customer_phone", limit: 15, null: false
    t.string "customer_address", limit: 100, null: false
    t.string "customer_email", limit: 50, null: false
  end

  create_table "languages", primary_key: "language_id", id: { type: :string, limit: 50 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "language_content", limit: 50, null: false
  end

  create_table "order_items", primary_key: ["order_id", "book_id", "language_id"], charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "order_id", limit: 50, null: false
    t.string "book_id", limit: 50, null: false
    t.string "language_id", limit: 50, null: false
    t.integer "item_number", null: false
    t.float "item_price", limit: 53, null: false
    t.index ["book_id"], name: "book_id"
    t.index ["language_id"], name: "language_id"
  end

  create_table "orders", primary_key: "order_id", id: { type: :string, limit: 50 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.datetime "order_date", null: false
    t.string "order_note", limit: 200
    t.float "order_total_price", limit: 53, null: false
    t.string "customer_id", limit: 50, null: false
    t.index ["customer_id"], name: "customer_id"
  end

  create_table "reviews", primary_key: "review_id", id: { type: :string, limit: 50 }, charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.float "rating", null: false
    t.string "content", limit: 200
    t.string "book_id", limit: 50, null: false
    t.string "customer_id", limit: 50, null: false
    t.index ["book_id"], name: "book_id"
    t.index ["customer_id"], name: "customer_id"
  end

  add_foreign_key "book_categorys", "books", primary_key: "book_id", name: "book_categorys_ibfk_1"
  add_foreign_key "book_categorys", "categorys", primary_key: "category_id", name: "book_categorys_ibfk_2"
  add_foreign_key "book_languages", "books", primary_key: "book_id", name: "book_languages_ibfk_1"
  add_foreign_key "book_languages", "languages", primary_key: "language_id", name: "book_languages_ibfk_2"
  add_foreign_key "books", "authors", primary_key: "author_id", name: "books_ibfk_1"
  add_foreign_key "order_items", "books", primary_key: "book_id", name: "order_items_ibfk_2"
  add_foreign_key "order_items", "languages", primary_key: "language_id", name: "order_items_ibfk_3"
  add_foreign_key "order_items", "orders", primary_key: "order_id", name: "order_items_ibfk_1"
  add_foreign_key "orders", "customers", primary_key: "customer_id", name: "orders_ibfk_1"
  add_foreign_key "reviews", "books", primary_key: "book_id", name: "reviews_ibfk_2"
  add_foreign_key "reviews", "customers", primary_key: "customer_id", name: "reviews_ibfk_1"
end

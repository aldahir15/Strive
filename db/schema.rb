# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170929163728) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendars", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "day"
    t.integer "month"
    t.integer "year"
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "user_id"
    t.integer "calendar_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_url"
    t.integer "day"
    t.integer "month"
    t.integer "year"
    t.float "lat"
    t.float "lng"
  end

  create_table "paths", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "title"
    t.float "starting_lat"
    t.float "starting_lng"
    t.float "ending_lat"
    t.float "ending_lng"
    t.float "distance"
  end

  create_table "quotes", force: :cascade do |t|
    t.string "quote", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "day", default: 29
  end

  create_table "user_events", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "user_id", null: false
    t.integer "calendar_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "time"
    t.string "dayornight"
    t.integer "path_id"
  end

end

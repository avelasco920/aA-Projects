# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  username   :string           not null
#

class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true

  has_many :artwork_shares

  has_many :artworks,
  foreign_key: :artist_id

  has_many :viewers,
  through: :artworks,
  source: :viewers

end

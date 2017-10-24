# == Schema Information
#
# Table name: artworks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  image_url  :string           not null
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artwork < ApplicationRecord
  validates :title, presence: true
  validates :title, uniquess: { scope: :artist_id }
  validates :image_url, presence: true
  validates :artist_id, presence: true

  has_many :artwork_shares

  belongs_to :artist,
  class_name: :User

  has_many :viewers,
  through: :artwork_shares,
  source: :viewer


end

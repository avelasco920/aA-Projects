# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  album_id   :integer          not null
#  band_id    :integer          not null
#  title      :string           not null
#  ord        :integer          not null
#  lyrics     :text
#  track_type :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Track < ApplicationRecord
  validates :album_id, presence: true, uniqueness: true
  validates :band_id, presence: true, uniqueness: true
  validates :title, presence: true
  validates :ord, presence: true
  validates :lyrics, presence: true
  validates :track_type, presence: true
  belongs_to :album
  belongs_to :band
end

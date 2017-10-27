# == Schema Information
#
# Table name: albums
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  year            :integer          not null
#  band_id         :integer          not null
#  recording_style :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Album < ApplicationRecord
  validates :title, presence: true
  validates :year, presence: true
  validates :band_id, presence: true, uniqueness: true
  validates :recording_style, presence: true
  belongs_to :band
  has_many :tracks
end

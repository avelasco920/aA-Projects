# == Schema Information
#
# Table name: bands
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  recording_style :string
#

class Band < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :recording_style, presence: true
  has_many :albums
  has_many :tracks
end

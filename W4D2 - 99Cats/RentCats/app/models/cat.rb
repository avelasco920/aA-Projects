# == Schema Information
#
# Table name: cats
#
#  id          :integer          not null, primary key
#  birth_date  :string           not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#


include ActionView::Helpers::DateHelper

class Cat < ApplicationRecord
  COLORS = %w(white black gray orange brown calico tuxedo tortoise cream)
  validates :birth_date, presence: true
  validates :color, presence: true, inclusion: { in: COLORS }
  validates :name, presence: true
  validates :sex, presence: true, inclusion: { in: %w(M F)}
  validates :description, presence: true


  def age
    time_ago_in_words(Date.parse(birth_date))
  end
end

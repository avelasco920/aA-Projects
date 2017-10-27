class RemoveRecordingStyleFromBands < ActiveRecord::Migration[5.1]
  def change
    remove_column :bands, :recording_style, :string
  end
end

class AddRecordingStyleToBandsTable < ActiveRecord::Migration[5.1]
  def change
    add_column :bands, :recording_style, :string
  end
end

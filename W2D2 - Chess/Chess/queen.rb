require_relative "piece"

class Queen < Piece
  include SlidingPiece
  attr_reader :symbol, :directions, :position

  def initialize(team, board, position)
    @board = board
    @symbol = "Q"
    @team = team
    @position = position
    @directions = [
      :down_left, :down_right, :up_right,
      :up_left, :up, :down, :left, :right
    ]
  end

end

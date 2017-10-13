require_relative "piece"

class Bishop < Piece
  include SlidingPiece
  attr_reader :symbol, :directions, :position

  def initialize(team, board, position)
    @board = board
    @symbol = "B"
    @team = team
    @position = position
    @directions = [:down_left, :down_right, :up_right, :up_left]
  end

end

require_relative "piece"

class Rook < Piece
  include SlidingPiece
  attr_reader :symbol, :directions, :position

  def initialize(team, board, position)
    @board = board
    @symbol = "R"
    @team = team
    @position = position
    @directions = [:up, :down, :left, :right]
  end

end

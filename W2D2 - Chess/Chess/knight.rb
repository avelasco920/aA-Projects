require_relative "piece"


class Knight < Piece
  include SteppingPiece

  attr_reader :symbol, :position, :steps

  def initialize(team, board, position)
    @board = board
    @symbol = "H"
    @team = team
    @position
    @steps = [
      [-2, 1],
      [-2, -1],
      [-1, 2],
      [1, 2],
      [2, 1],
      [2, -1],
      [1, -2],
      [-1, -2]
    ]

  end

end

# require_relative 'board'

module SlidingPiece
INCREMENT = {
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
  down: [1, 0],
  down_right: [1, 1],
  up_left: [-1, -1],
  up_right: [-1, 1],
  down_left: [1, -1]
}

  def moves
    poss_moves = []
    piece_pos = self.position
    self.directions.each do |direction|
      step = INCREMENT[direction]
      x = piece_pos[0]
      y = piece_pos[1]
      while @board.valid_move?([x, y]) && @board.in_bounds([x, y])
        x = x + step[0]
        y = y + step[1]
        new_pos = [x, y]
        if @board.valid_move?(new_pos) && @board.in_bounds(new_pos)
          poss_moves << new_pos
        end
      end
      x = piece_pos[0]
      y = piece_pos[1]
    end
    poss_moves
  end

end

module SteppingPiece
  def moves
    poss_moves = []
    piece_pos = self.position
    self.steps.each do |step|
      x = step[0] + piece_pos[0]
      y = step[1] + piece_pos[1]
      new_pos = [x, y]
      if @board.valid_move?(new_pos) && @board.in_bounds(new_pos)
        poss_moves << new_pos
      end
    end
    poss_moves
  end
end


class Piece
  def initialize(team = nil)
    @team = team
    @position
    @board
  end
end

# board = Board.new
# p rook = Rook.new(:team1, board, [0, 0])
# p rook.moves

class AlbumsController < ApplicationController
  def new
    @album = Album.new
    render :new
  end

  def create
    @album = Album.new(album_params)
    # @album.band_id = params[:band_id]
    if @album.save
      redirect_to band_url(@album.band)
    else
      flash[:errors] = @album.errors.full_messages
      render :new
    end
  end

  private
  def album_params
    params.require(:album).permit(:title, :recording_style, :year, :band_id)
  end
end

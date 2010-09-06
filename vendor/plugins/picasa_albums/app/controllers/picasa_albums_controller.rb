class PicasaAlbumsController < ApplicationController

  before_filter :find_all_picasa_albums
  before_filter :find_page

  def index
    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @picasa_album in the line below:
    present(@page)
  end

  def show
    @picasa_album = PicasaAlbum.find(params[:id])

    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @picasa_album in the line below:
    present(@page)
  end

protected

  def find_all_picasa_albums
    @picasa_albums = PicasaAlbum.active.find(:all, :order => "position ASC")
  end

  def find_page
    @page = Page.find_by_link_url("/picasa_albums")
  end

end

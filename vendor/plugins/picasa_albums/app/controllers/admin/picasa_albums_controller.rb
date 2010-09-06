class Admin::PicasaAlbumsController < Admin::BaseController

  crudify :picasa_album, :title_attribute => :title

end

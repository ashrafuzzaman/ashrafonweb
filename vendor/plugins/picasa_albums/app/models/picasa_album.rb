class PicasaAlbum < ActiveRecord::Base

  acts_as_indexed :fields => [:title, :description, :album_url]

  validates_presence_of :title
  validates_uniqueness_of :title

  named_scope :active, :conditions => {:active => true}

end

class Portfolio < ActiveRecord::Base

  acts_as_indexed :fields => [:title, :description, :thumb_url, :image_url]

  validates_presence_of :title
  validates_uniqueness_of :title



end

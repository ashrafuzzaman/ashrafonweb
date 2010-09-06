class CreatePicasaAlbums < ActiveRecord::Migration

  def self.up
    create_table :picasa_albums do |t|
      t.string :title
      t.integer :image_per_page
      t.text :description
      t.string :album_url
      t.boolean :active
      t.integer :position

      t.timestamps
    end

    add_index :picasa_albums, :id

    load(Rails.root.join('db', 'seeds', 'picasa_albums.rb'))
  end

  def self.down
    UserPlugin.destroy_all({:name => "Picasa Albums"})

    Page.find_all_by_link_url("/picasa_albums").each do |page|
      page.link_url, page.menu_match = nil
      page.deletable = true
      page.destroy
    end
    Page.destroy_all({:link_url => "/picasa_albums"})

    drop_table :picasa_albums
  end

end

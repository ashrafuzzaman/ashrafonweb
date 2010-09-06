class CreatePortfolios < ActiveRecord::Migration

  def self.up
    create_table :portfolios do |t|
      t.string :title
      t.text :description
      t.string :thumb_url
      t.string :image_url
      t.boolean :active
      t.integer :position

      t.timestamps
    end

    add_index :portfolios, :id

    load(Rails.root.join('db', 'seeds', 'portfolios.rb'))
  end

  def self.down
    UserPlugin.destroy_all({:name => "Portfolios"})

    Page.find_all_by_link_url("/portfolios").each do |page|
      page.link_url, page.menu_match = nil
      page.deletable = true
      page.destroy
    end
    Page.destroy_all({:link_url => "/portfolios"})

    drop_table :portfolios
  end

end

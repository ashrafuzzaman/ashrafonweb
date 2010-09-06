User.find(:all).each do |user|
  user.plugins.create(:name => "portfolios",
                      :position => (user.plugins.maximum(:position) || -1) +1)
end

page = Page.create(
  :title => "Portfolios",
  :link_url => "/portfolios",
  :deletable => false,
  :position => ((Page.maximum(:position, :conditions => "parent_id IS NULL") || -1)+1),
  :menu_match => "^/portfolios(\/|\/.+?|)$"
)
Page.default_parts.each do |default_page_part|
  page.parts.create(:title => default_page_part, :body => nil)
end

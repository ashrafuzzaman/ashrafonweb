class Admin::PortfoliosController < Admin::BaseController

  crudify :portfolio, :title_attribute => :title

end

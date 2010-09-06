class PortfoliosController < ApplicationController

  before_filter :find_all_portfolios
  before_filter :find_page

  def index
    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @portfolio in the line below:
    present(@page)
  end

  def show
    @portfolio = Portfolio.find(params[:id])

    # you can use meta fields from your model instead (e.g. browser_title)
    # by swapping @page for @portfolio in the line below:
    present(@page)
  end

protected

  def find_all_portfolios
    @portfolios = Portfolio.find(:all, :order => "position ASC")
  end

  def find_page
    @page = Page.find_by_link_url("/portfolios")
  end

end

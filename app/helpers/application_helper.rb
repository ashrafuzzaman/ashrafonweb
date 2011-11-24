module ApplicationHelper
  def render_icon(href, class_name)
    "<div class=\"icon\" style=\"float: left;\"><a href=\"#{href}\" target=\"_blank\"> <div class=\"#{class_name}\"></div> </a></div>".html_safe
  end
end
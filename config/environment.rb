# Load the rails application
require File.expand_path('../application', __FILE__)
#require 'smtp_tls'

#ActionMailer::Base.smtp_settings = {
#  :address => "smtp.gmail.com",
#  :port=>587,
#  :user_name => "noreply.ashraf@gmail.com",
#  :password => "imbackimback",
#  :authentication => :plain,
#}

ActionMailer::Base.smtp_settings = {
  :address => "smtp.gmail.com",
  :port => 587,
  :domain => "www.gmail.com",
  :authentication => :plain,
  :user_name => "noreply.ashraf@gmail.com",
  :password => "imbackimback",
}
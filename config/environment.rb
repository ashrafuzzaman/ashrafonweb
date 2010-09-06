# Load the rails application
require File.expand_path('../application', __FILE__)
#require 'smtp_tls'

ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
  :address => "smtp.gmail.com" ,
  :port=>587,
  :authentication => :plain ,
  :user_name => "noreply.ashraf@gmail.com" ,
  :password => "imbackimback" ,
}
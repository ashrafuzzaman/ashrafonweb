Refinery::Plugin.register do |plugin|
  plugin.name = "portfolios"
  plugin.activity = {
    :class => Portfolio}

  plugin.directory = directory # tell refinery where this plugin is located
end

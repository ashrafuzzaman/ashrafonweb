Refinery::Plugin.register do |plugin|
  plugin.name = "picasa_albums"
  plugin.activity = {
    :class => PicasaAlbum}

  plugin.directory = directory # tell refinery where this plugin is located
end

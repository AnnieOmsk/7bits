#
# HAML/SASS Converter plugin for jekyll
#=================================
#
# HAML/SASS Converter by Adam Pearson : Simple haml-sass conversion for jekyll. Fork by Sam X
# https://gist.github.com/481456

module Jekyll
  require 'haml'
  class HamlConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /haml/i
    end

    def output_ext(ext)
      ".html"
    end

    def convert(content)
      engine = Haml::Engine.new(content)
      engine.render
    end
  end
end
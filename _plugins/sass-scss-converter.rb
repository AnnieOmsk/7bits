module Jekyll
  # Sass plugin to convert .scss and .sass to .css
  #
  # Note: This is configured to use the new css like syntax available in sass.

  require 'sass'

  class ScssConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /scss/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      begin
        puts "Performing SCSS Conversion."
        engine = Sass::Engine.new(content, :syntax => :scss, :load_paths => ["./_stylesheets/"])
        engine.render
      rescue StandardError => e
        puts "!!! SASS Error: " + e.message
      end
    end
  end

  class SassConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /sass/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      begin
        puts "Performing SASS Conversion."
        engine = Sass::Engine.new(content, :syntax => :sass, :load_paths => ["./_stylesheets/"])
        engine.render
      rescue StandardError => e
        puts "!!! SASS Error: " + e.message
      end
    end
  end
end
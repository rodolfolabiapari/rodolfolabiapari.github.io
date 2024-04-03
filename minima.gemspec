# frozen_string_literal: true

require 'kramdown'
require 'kramdown-parser-gfm'

Gem::Specification.new do |spec|
  spec.name          = "minima"
  spec.version       = "0.1.0"
  spec.authors       = ["Rodolfo Labiapari Mansur @rodolfo_lab"]
  spec.email         = ["rodolfolabiapari@gmail.com"]

  spec.summary       = "Personal Blog. Always in construction."
  spec.homepage      = "https://https://rodolfolabiapari.github.io/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9"

  spec.add_development_dependency "bundler", "~> 2.3.5"
  spec.add_development_dependency "rake", "~> 12.0"
end

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module RailsReactWs
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    #

    config.session_store :redis_session_store, {
      key: "rails_react",
      redis: {
        db: 5,
        expire_after: 1.month,
        key_prefix: 'terminalq:session:',
        host: 'localhost',
      },
    }
  end
end

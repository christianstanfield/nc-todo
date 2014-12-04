class User < ActiveRecord::Base
  has_many :todos

  # validates :email, format: { with: // }
end

require 'rails_helper'

describe User do

  it { should have_many(:todos) }
  it { should have_db_column(:email) }
  it { should have_db_column(:api_token) }

end

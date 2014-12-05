require 'rails_helper'

describe Todo do

  it { should belong_to(:user) }
  it { should have_db_column(:description) }
  it { should have_db_column(:is_complete) }
  it { should have_db_index(:user_id) }

end

require 'rails_helper'

feature 'Login', js: true do

  scenario "should login successfully with a correct login" do
    visit '/'
    click_link 'login_button'
      find('#login_menu')
    within '#login_menu form' do
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'password'
      find('#login_submit').click
      # click_on('#login_submit') # doesn't work
      # click_link '#login_menu form login_submit' # doesn't work
    end
    # page.execute_script("$('#login_menu form').submit()") # doesn't work
    # Capybara.default_wait_time = 10
    wait_for_ajax
    expect(page).to have_content 'Welcome user@example.com'
  end

  scenario "should return an error with a incorrect login" do
    visit '/'
    click_link 'login_button'
    within '#login_menu form' do
      # find('#login_submit').click
      find_field('Password').native.send_key(:enter)
    end
    expect(page).to have_content 'Password is not valid.'
  end

  scenario "should login successfully with a correct signup" do
    email = Faker::Internet.email
    visit '/'
    click_link 'signup_button'
    within '#signup_menu form' do
      fill_in 'Email', with: email
      fill_in 'Password', with: Faker::Internet.password
      find('#signup_submit').click
    end
    expect(page).to have_content 'Welcome ' + email
  end

  scenario "should return an error with a incorrect signup" do
    visit '/'
    click_link 'signup_button'
    within '#signup_menu form' do
      fill_in 'Email', with: 'user@example.com'
      fill_in 'Password', with: 'password'
      find('#signup_submit').click
    end
    expect(page).to have_content 'Email has already been taken'
  end
end

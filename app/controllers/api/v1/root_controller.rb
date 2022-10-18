class Api::V1::RootController < ApplicationController
  def index
    @greet = Greeting.all

    render json: @greet
  end
end

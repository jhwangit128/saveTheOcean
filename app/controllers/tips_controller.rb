class TipsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Tip.all
  end

  def show
    render json: Tip.find(params["id"])
  end

  def create
    render json: Tip.create(params["tip"])
  end

  def delete
    render json: Tip.delete(params["id"])
  end

  def update
    render json: Tip.update(params["id"], params["tip"])
  end

end

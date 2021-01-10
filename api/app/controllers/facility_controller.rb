class FacilityController < ApplicationController
  def index
  #   @facility = Facility.all
    @facility = Facility.page(params[:page]).per(6)

     # ページネーションした時の全ページ数
    @total_pages = @facility.total_pages

    response = {
      facility: @facility.as_json,
      total_pages: @total_pages
    }
    render json: response

    # render json: @facility
  end

  def index2
    @facility = Facility.find(params[:id])

    render json: @facility
  end

  def create
    @shop = Facility.new(shop_params)
    # if @facility.save
    #   render json: @facility
    # else
    #   json: { errors: @facility.errors.full_messages }, status: 400
    # end
    @shop.save
  end

  private

  def shop_params 
    params.fetch(:shop, {}).permit(
      :name, :profile, :category
    )
  end

end

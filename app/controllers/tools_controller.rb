class ToolsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # get /tools - get all tools for neighbor tool page
    def index
        tools = Tool.all
        render json: tools, status: :ok
    end

    # get /users/:user_id/tools - get all tools from particular user for my tools page 
    def user_tools
        user = User.find_by(id: params[:user_id])
        tools = user.tools
        render json: tools, status: :ok
    end

    # post /tools - create a new tool
    def create
        tool = Tool.create!(tool_params)
        render json: tool, status: :created
    end

    # patch /tools/:id - update a tool
    def update
        tool = Tool.find_by!(id: params[:id]) 
        tool.update(tool_params)
        render json: tool, status: :ok
    end

    #delete /tools/:id - delete a tool
    def destroy
        tool = Tool.find_by(id: params[:id])
        tool.destroy
        render json: {deleted: tool}, status: :ok
    end

    private

    def tool_params
        params.permit(:name, :brand, :owner_id, :image, :notes)
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
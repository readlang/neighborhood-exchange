class ToolsController < ApplicationController

    def index
        tools = Tool.all
        render json: tools, status: :ok
    end

end

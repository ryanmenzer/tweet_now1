get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/tweet' do
  # puts params
  Twitter.update(params[:tweet])
  redirect to "/"
end

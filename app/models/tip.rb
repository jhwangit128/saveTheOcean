class Tip
  if (ENV["DATABASE_URL"])
    uri = URI.parse(ENV["DATABASE_URL"])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: "saveTheOcean_development")
  end

  # ++++++++++++++++++
  # ROUTES
  # ++++++++++++++++++
  #index
  def self.all
    results = DB.exec("SELECT * FROM tips ORDER BY id DESC;")
    return results.map do |result|
      {
        id: result["id"].to_i,
        name: result["name"],
        image: result["image"],
        body: result["body"]
      }
    end
  end

  # show
    def self.find(id)

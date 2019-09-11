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
        title: result["title"],
        username: result["username"],
        image: result["image"],
        body: result["body"]
      }
    end
  end

  # show
  def self.find(id)
    results = DB.exec("SELECT * FROM tips WHERE id=#{id};")
    if !results.num_tuples.zero?
      return {
        id: results.first["id"].to_i,
        title: results.first["title"],
        username: results.first["username"],
        image: results.first["image"],
        body: results.first["body"]
      }
    else
      return {
        "error" => "no such post, check the id!"
      }, status: 400
    end
  end

  # create
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO tips (title, username, image, body)
        VALUES ('#{opts["title"]}', '#{opts["username"]}', '#{opts["image"]}', '#{opts["body"]}')
        RETURNING id, title, username, image, body;
      SQL
    )
    result = results.first
    return {
      id: result["id"].to_i,
      title: result["title"],
      username: result["username"],
      image: result["image"],
      body: result["body"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM tips WHERE id=#{id};")
    return { "deleted" => true }
  end

  def self.update (id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE tips
        SET
          title='#{opts["title"]}',
          username='#{opts["username"]}',
          image='#{opts["image"]}',
          body='#{opts["body"]}'
        WHERE id=#{id}
        RETURNING id, title, username, image, body;
      SQL
    )
    result = results.first
    return {
      id: result["id"].to_i,
      title: result["title"],
      username: result["username"],
      image: result["image"],
      body: result["body"]
    }
  end

end


require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @columns if @columns
    query = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
      LIMIT
        1
    SQL
    @columns = query.first.map! { |key| key.to_sym }
  end

  def self.finalize!
    columns.each do |col|
      define_method(col) do
        attributes[col]
      end
      define_method("#{col}=") do |val|
        attributes[col] = val
      end
    end
  end

  def self.table_name=(table_name)
    # ...
  end

  def self.table_name
    "#{self}".downcase + "s"
  end

  def self.all
    pall = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
    SQL
    parse_all(pall)
  end

  def self.parse_all(results)
    results.map do |el|
      self.new(el)
    end
  end

  def self.find(id)
    data = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
      WHERE
        id = #{id}
    SQL
    self.new(data.first)
  end

  def initialize(params = {})
    obj_class = self.class
    cols = obj_class.columns
    params.each do |attr_name, value|
      raise "unknown attribute '#{attr_name}'" unless cols.include?(attr_name.to_sym)
      self.send("#{attr_name}=", value)
    end
  end

  def attributes
    @attributes = Hash.new unless @attributes
    return @attributes
  end

  def attribute_values
    self.attributes.values
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end

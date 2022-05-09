# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tool.destroy_all
Rental.destroy_all

# resets the PK index counters so they start at 0
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('tools')
ActiveRecord::Base.connection.reset_pk_sequence!('rentals')

print "Seeding...."

User.create!([
    { username: "Alice", password_digest: "1234" },
    { username: "Bob", password_digest: "1234"  },
    { username: "Cathy" , password_digest: "1234" },
    { username: "Doug" , password_digest: "1234" },
    { username: "Eduardo" , password_digest: "1234" },
    { username: "Frankie" , password_digest: "1234" }
])

Tool.create!([
    { name: "Lawnmower", brand: "Ryobi", owner_id: 1, notes: "owned by alice" },
    { name: "Drill", brand: "Craftsman", owner_id: 2, notes: "owned by bob" },
    { name: "Hammer", brand: "Milwakee", owner_id: 3, notes: "owned by cathy" },
    { name: "Wrench Set", brand: "Ace",  owner_id: 4, notes: "owned by doug" },
    { name: "Blower", brand: "Dewalt",   owner_id: 5, notes: "owned by Eduardo" },
    { name: "Tablesaw", brand: "Mikita", owner_id: 6, notes: "owned by Frankie" },
])

Rental.create!([
    { tool_id: 1, borrower_id: 6, returned: false, borrower_notes: "frankie", owner_notes: "owned by alice" },
    { tool_id: 2, borrower_id: 5, returned: false, borrower_notes: "eduardo", owner_notes: "owned by bob" },
    { tool_id: 3, borrower_id: 4, returned: false, borrower_notes: "doug", owner_notes: "owned by cathy" },
    { tool_id: 4, borrower_id: 3, returned: false, borrower_notes: "cathy", owner_notes: "owned by doug" },
    { tool_id: 5, borrower_id: 2, returned: false, borrower_notes: "bob", owner_notes: "owned by eduardo" },
    { tool_id: 6, borrower_id: 1, returned: false, borrower_notes: "alice", owner_notes: "owned by frankie" }
])

print "Seeding Done"
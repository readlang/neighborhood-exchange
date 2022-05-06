# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Tool.destroy_all
Rental.destroy_all

User.create([
    { name: "Alice" },
    { name: "Bob" },
    { name: "Cathy" },
    { name: "Doug" },
    { name: "Eduardo" }
])

Tool.create([
    { name: "Lawnmower", brand: "Craftsman", owner_id: 1, notes: "very old but still works" },
    { name: "Drill", brand: "Dewalt", owner_id: 2, notes: "brand new" },
    { name: "Hammer", brand: "Ace", owner_id: 3, notes: "kinda crappy" },
    { name: "Socket Wrench Set", brand: "Craftsman", owner_id: 4, notes: "high quality" },
    { name: "Blower", brand: "Craftsman", owner_id: 5, notes: "very old but still works" },
    { name: "Circular saw", brand: "Mikita", owner_id: 5, notes: "okay" },
])

Rental.create([
    { tool_id: 3, borrower_id: 2, returned: false, borrower_notes: "Worked Great", owner_notes: "returned on time" },
    { tool_id: 2, borrower_id: 4, returned: false, borrower_notes: "Worked Great", owner_notes: "returned on time" },
    { tool_id: 1, borrower_id: 3, returned: false, borrower_notes: "Worked Great", owner_notes: "returned on time" },
    { tool_id: 4, borrower_id: 3, returned: false, borrower_notes: "Worked Great", owner_notes: "returned on time" },
    { tool_id: 6, borrower_id: 1, returned: false, borrower_notes: "Worked Great", owner_notes: "returned on time" },
    { tool_id: 5, borrower_id: 4, returned: false, borrower_notes: "Worked Great", owner_notes: "returned on time" }
])
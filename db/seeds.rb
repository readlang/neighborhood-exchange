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

const defaultPassword = BCrypt::Password.create('1234')

User.create!([
    { username: "Alice", password_digest: defaultPassword },
    { username: "Bob",   password_digest: defaultPassword },
    { username: "Cathy" , password_digest: defaultPassword },
    { username: "Doug" ,  password_digest: defaultPassword },
    { username: "Eduardo" , password_digest: defaultPassword },
    { username: "Frankie" , password_digest: defaultPassword }
])

Tool.create!([
    { name: "Lawnmower", brand: "Ryobi", owner_id: 1, rented: false, notes: "A really good lawnmower", image: "https://m.media-amazon.com/images/I/61sthkd2XuL._SL1000_.jpg" },
    { name: "Drill", brand: "Craftsman", owner_id: 2, rented: false, notes: "a really good drill", image: "https://m.media-amazon.com/images/I/615zGgBSSOL._AC_SX466_.jpg" },
    { name: "Hammer", brand: "Milwakee", owner_id: 3, rented: false, notes: "a good hammer", image: "https://media.istockphoto.com/photos/hammer-picture-id157192164?b=1&k=20&m=157192164&s=170667a&w=0&h=eK1ZyGNpdxefJgX5ovkb1tTKpi2UFfKmCgV52gzKPG0=" },
    { name: "Wrench Set", brand: "Ace",  owner_id: 4, rented: false, notes: "a good wrench set", image: "https://cdn-tp3.mozu.com/24645-37138/cms/37138/files/8b17cefd-1ee1-4951-8728-14f0e37340b1?quality=60&_mzcb=_1649148331752" },
    { name: "Blower", brand: "Dewalt",   owner_id: 5, rented: false, notes: "a really good blower", image: "https://images.thdstatic.com/productImages/1c217fd4-a230-48cb-baa1-76ec1c301fce/svn/dewalt-cordless-leaf-blowers-dcbl772x1-64_1000.jpg" },
    { name: "Tablesaw", brand: "Mikita", owner_id: 6, rented: false, notes: "a good tablesaw", image: "https://cdn.makitatools.com/apps/cms/img/270/679d96d8-66cf-4673-8a06-47144bfde1e7_2705x1_k_1500px.png?trim.threshold=80&trim.percentpadding=1" },
    { name: "Sander", brand: "DeWalt", owner_id: 1, rented: false, notes: "a good sander", image: "https://www.truevalue.com/media/catalog/product/169614.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" },
    { name: "Circular saw", brand: "DeWalt", owner_id: 1, rented: false, notes: "a good Circular saw", image: "https://mobileimages.lowes.com/productimages/46face27-c799-4e9f-81f7-8f005756a817/02081174.jpg?size=xl" },
])

Rental.create!([
    { tool_id: 1, borrower_id: 6, returned: true, borrower_notes: "frankie", owner_notes: "owned by alice" },
    { tool_id: 2, borrower_id: 5, returned: true, borrower_notes: "eduardo", owner_notes: "owned by bob" },
    { tool_id: 3, borrower_id: 4, returned: true, borrower_notes: "doug", owner_notes: "owned by cathy" },
    { tool_id: 4, borrower_id: 3, returned: true, borrower_notes: "cathy", owner_notes: "owned by doug" },
    { tool_id: 5, borrower_id: 2, returned: true, borrower_notes: "bob", owner_notes: "owned by eduardo" },
    { tool_id: 6, borrower_id: 1, returned: true, borrower_notes: "alice", owner_notes: "owned by frankie" }
])

print "Seeding Done"

#   Rentals
#     t.integer "tool_id"
#     t.integer "borrower_id"
#     t.boolean "returned"
#     t.string "borrower_notes"
#     t.string "owner_notes"

#   Tools
#     t.string "name"
#     t.string "brand"
#     t.integer "owner_id"
#     t.string "image"
#     t.string "notes"
#     t.boolean "rented"

#   Users
#     t.string "username"
#     t.string "password_digest"
#     t.string "profile_image"
#     t.string "location"

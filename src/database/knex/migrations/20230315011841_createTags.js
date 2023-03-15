export function up(knex) {
  return knex.schema.createTable("movie_tags", table => {
    table.increments("id")
    table.text("name")
    table.integer("user_id").references("id").inTable("users")
    table.integer("note_id").references("id").inTable("movie_notes").onDelete("CASCADE")
  })
}

export function down(knex) {
  return knex.schema.dropTable("movies_tags")
}

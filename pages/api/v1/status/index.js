import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const porstgresVersion = await database.query("SELECT version();");
  const maxConnections = await database.query("SHOW max_connections;");
  const usedConnections = await database.query(
    "select count(*) from pg_stat_activity;",
  );

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: porstgresVersion.rows[0].version,
    max_connections: maxConnections.rows[0].max_connections,
    used_connections: usedConnections.rows[0].count,
  });
}

export default status;

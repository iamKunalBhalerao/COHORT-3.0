import { Client } from "pg";

const pgClient = new Client(
  "postgresql://neondb_owner:npg_VIEX1dnOjJp4@ep-divine-meadow-a1gwpc9q-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

async function main() {
  await pgClient.connect();
  const response = await pgClient.query(
    "UPDATE users SET username='king' WHERE id=2"
  );
  console.table(response.rows);
}

main();

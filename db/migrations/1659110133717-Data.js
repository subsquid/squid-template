module.exports = class Data1659110133717 {
  name = 'Data1659110133717'

  async up(db) {
    await db.query(`CREATE TABLE "historical_balance" ("id" character varying NOT NULL, "balance" numeric NOT NULL, "timestamp" numeric NOT NULL, "account_id" character varying, CONSTRAINT "PK_74ac29ad0bdffb6d1281a1e17e8" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_383ff006e4b59db91d32cb891e" ON "historical_balance" ("account_id") `)
    await db.query(`CREATE INDEX "IDX_96192d95c8ad5b7522c0560ae9" ON "historical_balance" ("balance") `)
    await db.query(`CREATE INDEX "IDX_822b321c3ad99c302f7ccfa8bd" ON "historical_balance" ("timestamp") `)
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "balance" numeric NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_d83afa683094d63ab33f8d9a24" ON "account" ("balance") `)
    await db.query(`ALTER TABLE "historical_balance" ADD CONSTRAINT "FK_383ff006e4b59db91d32cb891e9" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "historical_balance"`)
    await db.query(`DROP INDEX "public"."IDX_383ff006e4b59db91d32cb891e"`)
    await db.query(`DROP INDEX "public"."IDX_96192d95c8ad5b7522c0560ae9"`)
    await db.query(`DROP INDEX "public"."IDX_822b321c3ad99c302f7ccfa8bd"`)
    await db.query(`DROP TABLE "account"`)
    await db.query(`DROP INDEX "public"."IDX_d83afa683094d63ab33f8d9a24"`)
    await db.query(`ALTER TABLE "historical_balance" DROP CONSTRAINT "FK_383ff006e4b59db91d32cb891e9"`)
  }
}

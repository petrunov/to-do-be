import { MigrationInterface, QueryRunner } from 'typeorm';

export class DEFAULTVALUES1718268609073 implements MigrationInterface {
  name = 'DEFAULTVALUES1718268609073';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`description\` \`description\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`isCompleted\` \`isCompleted\` tinyint NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`order\` \`order\` int NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`order\` \`order\` int NOT NULL DEFAULT '1'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`isCompleted\` \`isCompleted\` tinyint NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`,
    );
  }
}

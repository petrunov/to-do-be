import { MigrationInterface, QueryRunner } from 'typeorm';

export class INSERTTODODATA1718149315091 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Insert initial data
    await queryRunner.query(
      `INSERT INTO \`todo\` (\`title\`, \`description\`, \`isCompleted\`, \`order\`)
      VALUES
      ('First Todo', 'This is the first todo', 0, 1),
      ('Second Todo', 'This is the second todo', 0, 2)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Insert initial data
    await queryRunner.query(
      `DELETE FROM \`todo\`
      WHERE \`title\` = 'First Todo' OR \`title\` = 'Second Todo'`,
    );
  }
}

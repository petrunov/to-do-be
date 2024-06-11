import { MigrationInterface, QueryRunner } from 'typeorm';

export class CREATETODO1718148283907 implements MigrationInterface {
  name = 'CREATETODO1718148283907';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`todo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`isCompleted\` tinyint NOT NULL, \`order\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`todo\``);
  }
}

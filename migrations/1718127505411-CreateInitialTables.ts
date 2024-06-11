import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialTables1718124255945 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE todos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        status ENUM('pending', 'in progress', 'completed') NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        order INT NOT NULL DEFAULT 0
        );`,
    );

    await queryRunner.query(
      `INSERT INTO todos (title, description, status, order) VALUES ('First Task', 'This is the first task', 'pending', 1);
        INSERT INTO todos (title, description, status, order) VALUES ('Second Task', 'This is the second task', 'in progress', 2);
        );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS todos;`);
  }
}

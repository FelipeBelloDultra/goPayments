import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddTitleColumnInPaymentsTable1593237962256
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'payments',
      new TableColumn({
        name: 'title',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('payments', 'title');
  }
}

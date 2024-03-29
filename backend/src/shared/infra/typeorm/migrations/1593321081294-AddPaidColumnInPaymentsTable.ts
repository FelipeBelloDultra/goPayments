import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddPaidColumnInPaymentsTable1593321081294
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'payments',
      new TableColumn({
        name: 'status',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('payments', 'status');
  }
}

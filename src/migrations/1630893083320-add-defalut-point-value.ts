import {MigrationInterface, QueryRunner} from "typeorm";

export class addDefalutPointValue1630893083320 implements MigrationInterface {
    name = 'addDefalutPointValue1630893083320'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`users\` CHANGE \`point\` \`point\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`users\` CHANGE \`point\` \`point\` int NOT NULL`);
    }

}

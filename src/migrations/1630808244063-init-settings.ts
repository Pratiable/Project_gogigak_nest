import {MigrationInterface, QueryRunner} from "typeorm";

export class initSettings1630808244063 implements MigrationInterface {
    name = 'initSettings1630808244063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`images\` DROP FOREIGN KEY \`images_product_id_f90b9061_fk_products_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products\` DROP FOREIGN KEY \`products_category_id_a7a3a156_fk_categories_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` DROP FOREIGN KEY \`reviews_product_id_d4b78cfe_fk_products_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` DROP FOREIGN KEY \`reviews_user_id_c23b0903_fk_users_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` DROP FOREIGN KEY \`user_coupons_coupon_id_1ca6b254_fk_coupons_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` DROP FOREIGN KEY \`user_coupons_user_id_353d52a0_fk_users_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` DROP FOREIGN KEY \`orders_coupon_id_a782d700_fk_coupons_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` DROP FOREIGN KEY \`orders_status_id_e763064e_fk_order_statuses_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` DROP FOREIGN KEY \`orders_user_id_7e2523fb_fk_users_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` DROP FOREIGN KEY \`order_items_order_id_412ad78b_fk_orders_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` DROP FOREIGN KEY \`order_items_product_option_id_b1b990eb_fk_products_options_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` DROP FOREIGN KEY \`order_items_status_id_103a14d3_fk_order_item_statuses_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` DROP FOREIGN KEY \`products_options_option_id_85161942_fk_options_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` DROP FOREIGN KEY \`products_options_product_id_f0169358_fk_products_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` DROP FOREIGN KEY \`cart_items_product_options_id_34dd1e75_fk_products_options_id\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` DROP FOREIGN KEY \`cart_items_user_id_74745f54_fk_users_id\``);
        await queryRunner.query(`CREATE INDEX \`products_id\` ON \`gogigak_nest\`.\`images\` (\`product_id\`)`);
        await queryRunner.query(`CREATE INDEX \`category_id\` ON \`gogigak_nest\`.\`products\` (\`category_id\`)`);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`gogigak_nest\`.\`reviews\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`product_id\` ON \`gogigak_nest\`.\`reviews\` (\`product_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`gogigak_nest\`.\`users\` (\`email\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_17d1817f241f10a3dbafb169fd\` ON \`gogigak_nest\`.\`users\` (\`phone_number\`)`);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`gogigak_nest\`.\`user_coupons\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`coupon_id\` ON \`gogigak_nest\`.\`user_coupons\` (\`coupon_id\`)`);
        await queryRunner.query(`CREATE INDEX \`coupon_id\` ON \`gogigak_nest\`.\`orders\` (\`coupon_id\`)`);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`gogigak_nest\`.\`orders\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`status_id\` ON \`gogigak_nest\`.\`orders\` (\`status_id\`)`);
        await queryRunner.query(`CREATE INDEX \`status_id\` ON \`gogigak_nest\`.\`order_items\` (\`status_id\`)`);
        await queryRunner.query(`CREATE INDEX \`product_option_id\` ON \`gogigak_nest\`.\`order_items\` (\`product_option_id\`)`);
        await queryRunner.query(`CREATE INDEX \`order_id\` ON \`gogigak_nest\`.\`order_items\` (\`order_id\`)`);
        await queryRunner.query(`CREATE INDEX \`options_product_id\` ON \`gogigak_nest\`.\`products_options\` (\`product_id\`)`);
        await queryRunner.query(`CREATE INDEX \`options_option_id\` ON \`gogigak_nest\`.\`products_options\` (\`option_id\`)`);
        await queryRunner.query(`CREATE INDEX \`user_id\` ON \`gogigak_nest\`.\`cart_items\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`products_options_id\` ON \`gogigak_nest\`.\`cart_items\` (\`product_options_id\`)`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`images\` ADD CONSTRAINT \`FK_96fabbb1202770b8e6a58bf6f1d\` FOREIGN KEY (\`product_id\`) REFERENCES \`gogigak_nest\`.\`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products\` ADD CONSTRAINT \`FK_9a5f6868c96e0069e699f33e124\` FOREIGN KEY (\`category_id\`) REFERENCES \`gogigak_nest\`.\`categories\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` ADD CONSTRAINT \`FK_9482e9567d8dcc2bc615981ef44\` FOREIGN KEY (\`product_id\`) REFERENCES \`gogigak_nest\`.\`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` ADD CONSTRAINT \`FK_728447781a30bc3fcfe5c2f1cdf\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` ADD CONSTRAINT \`FK_8051e26a8b74e9b53696cb9625d\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`gogigak_nest\`.\`coupons\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` ADD CONSTRAINT \`FK_4765af200afa62c263bcc9a9541\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` ADD CONSTRAINT \`FK_6284f0f60e4cb96c12ff96f0f15\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`gogigak_nest\`.\`coupons\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` ADD CONSTRAINT \`FK_03a801095cb90cf148e474cfcb7\` FOREIGN KEY (\`status_id\`) REFERENCES \`gogigak_nest\`.\`order_statuses\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` ADD CONSTRAINT \`FK_a922b820eeef29ac1c6800e826a\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` ADD CONSTRAINT \`FK_145532db85752b29c57d2b7b1f1\` FOREIGN KEY (\`order_id\`) REFERENCES \`gogigak_nest\`.\`orders\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` ADD CONSTRAINT \`FK_5dd538d6ee529025a2d8fac5146\` FOREIGN KEY (\`product_option_id\`) REFERENCES \`gogigak_nest\`.\`products_options\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` ADD CONSTRAINT \`FK_47dcedd318024359904428ee524\` FOREIGN KEY (\`status_id\`) REFERENCES \`gogigak_nest\`.\`order_item_statuses\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` ADD CONSTRAINT \`FK_1fefc14ba3edf6718b3460049dc\` FOREIGN KEY (\`option_id\`) REFERENCES \`gogigak_nest\`.\`options\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` ADD CONSTRAINT \`FK_c47c7787da010ddc824ce184bd4\` FOREIGN KEY (\`product_id\`) REFERENCES \`gogigak_nest\`.\`products\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` ADD CONSTRAINT \`FK_3110dd83202a9cd207547408f87\` FOREIGN KEY (\`product_options_id\`) REFERENCES \`gogigak_nest\`.\`products_options\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` ADD CONSTRAINT \`FK_b7213c20c1ecdc6597abc8f1212\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` DROP FOREIGN KEY \`FK_b7213c20c1ecdc6597abc8f1212\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` DROP FOREIGN KEY \`FK_3110dd83202a9cd207547408f87\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` DROP FOREIGN KEY \`FK_c47c7787da010ddc824ce184bd4\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` DROP FOREIGN KEY \`FK_1fefc14ba3edf6718b3460049dc\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` DROP FOREIGN KEY \`FK_47dcedd318024359904428ee524\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` DROP FOREIGN KEY \`FK_5dd538d6ee529025a2d8fac5146\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` DROP FOREIGN KEY \`FK_145532db85752b29c57d2b7b1f1\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` DROP FOREIGN KEY \`FK_a922b820eeef29ac1c6800e826a\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` DROP FOREIGN KEY \`FK_03a801095cb90cf148e474cfcb7\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` DROP FOREIGN KEY \`FK_6284f0f60e4cb96c12ff96f0f15\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` DROP FOREIGN KEY \`FK_4765af200afa62c263bcc9a9541\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` DROP FOREIGN KEY \`FK_8051e26a8b74e9b53696cb9625d\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` DROP FOREIGN KEY \`FK_728447781a30bc3fcfe5c2f1cdf\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` DROP FOREIGN KEY \`FK_9482e9567d8dcc2bc615981ef44\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products\` DROP FOREIGN KEY \`FK_9a5f6868c96e0069e699f33e124\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`images\` DROP FOREIGN KEY \`FK_96fabbb1202770b8e6a58bf6f1d\``);
        await queryRunner.query(`DROP INDEX \`products_options_id\` ON \`gogigak_nest\`.\`cart_items\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`gogigak_nest\`.\`cart_items\``);
        await queryRunner.query(`DROP INDEX \`options_option_id\` ON \`gogigak_nest\`.\`products_options\``);
        await queryRunner.query(`DROP INDEX \`options_product_id\` ON \`gogigak_nest\`.\`products_options\``);
        await queryRunner.query(`DROP INDEX \`order_id\` ON \`gogigak_nest\`.\`order_items\``);
        await queryRunner.query(`DROP INDEX \`product_option_id\` ON \`gogigak_nest\`.\`order_items\``);
        await queryRunner.query(`DROP INDEX \`status_id\` ON \`gogigak_nest\`.\`order_items\``);
        await queryRunner.query(`DROP INDEX \`status_id\` ON \`gogigak_nest\`.\`orders\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`gogigak_nest\`.\`orders\``);
        await queryRunner.query(`DROP INDEX \`coupon_id\` ON \`gogigak_nest\`.\`orders\``);
        await queryRunner.query(`DROP INDEX \`coupon_id\` ON \`gogigak_nest\`.\`user_coupons\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`gogigak_nest\`.\`user_coupons\``);
        await queryRunner.query(`DROP INDEX \`IDX_17d1817f241f10a3dbafb169fd\` ON \`gogigak_nest\`.\`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`gogigak_nest\`.\`users\``);
        await queryRunner.query(`DROP INDEX \`product_id\` ON \`gogigak_nest\`.\`reviews\``);
        await queryRunner.query(`DROP INDEX \`user_id\` ON \`gogigak_nest\`.\`reviews\``);
        await queryRunner.query(`DROP INDEX \`category_id\` ON \`gogigak_nest\`.\`products\``);
        await queryRunner.query(`DROP INDEX \`products_id\` ON \`gogigak_nest\`.\`images\``);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` ADD CONSTRAINT \`cart_items_user_id_74745f54_fk_users_id\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`cart_items\` ADD CONSTRAINT \`cart_items_product_options_id_34dd1e75_fk_products_options_id\` FOREIGN KEY (\`product_options_id\`) REFERENCES \`gogigak_nest\`.\`products_options\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` ADD CONSTRAINT \`products_options_product_id_f0169358_fk_products_id\` FOREIGN KEY (\`product_id\`) REFERENCES \`gogigak_nest\`.\`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products_options\` ADD CONSTRAINT \`products_options_option_id_85161942_fk_options_id\` FOREIGN KEY (\`option_id\`) REFERENCES \`gogigak_nest\`.\`options\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` ADD CONSTRAINT \`order_items_status_id_103a14d3_fk_order_item_statuses_id\` FOREIGN KEY (\`status_id\`) REFERENCES \`gogigak_nest\`.\`order_item_statuses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` ADD CONSTRAINT \`order_items_product_option_id_b1b990eb_fk_products_options_id\` FOREIGN KEY (\`product_option_id\`) REFERENCES \`gogigak_nest\`.\`products_options\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`order_items\` ADD CONSTRAINT \`order_items_order_id_412ad78b_fk_orders_id\` FOREIGN KEY (\`order_id\`) REFERENCES \`gogigak_nest\`.\`orders\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` ADD CONSTRAINT \`orders_user_id_7e2523fb_fk_users_id\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` ADD CONSTRAINT \`orders_status_id_e763064e_fk_order_statuses_id\` FOREIGN KEY (\`status_id\`) REFERENCES \`gogigak_nest\`.\`order_statuses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`orders\` ADD CONSTRAINT \`orders_coupon_id_a782d700_fk_coupons_id\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`gogigak_nest\`.\`coupons\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` ADD CONSTRAINT \`user_coupons_user_id_353d52a0_fk_users_id\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`user_coupons\` ADD CONSTRAINT \`user_coupons_coupon_id_1ca6b254_fk_coupons_id\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`gogigak_nest\`.\`coupons\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` ADD CONSTRAINT \`reviews_user_id_c23b0903_fk_users_id\` FOREIGN KEY (\`user_id\`) REFERENCES \`gogigak_nest\`.\`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`reviews\` ADD CONSTRAINT \`reviews_product_id_d4b78cfe_fk_products_id\` FOREIGN KEY (\`product_id\`) REFERENCES \`gogigak_nest\`.\`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`products\` ADD CONSTRAINT \`products_category_id_a7a3a156_fk_categories_id\` FOREIGN KEY (\`category_id\`) REFERENCES \`gogigak_nest\`.\`categories\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`gogigak_nest\`.\`images\` ADD CONSTRAINT \`images_product_id_f90b9061_fk_products_id\` FOREIGN KEY (\`product_id\`) REFERENCES \`gogigak_nest\`.\`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class initSettings1630824213992 implements MigrationInterface {
    name = 'initSettings1630824213992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`images_product_id_f90b9061_fk_products_id\` ON \`gogigak_nest\`.\`images\``);
        await queryRunner.query(`DROP INDEX \`products_category_id_a7a3a156_fk_categories_id\` ON \`gogigak_nest\`.\`products\``);
        await queryRunner.query(`DROP INDEX \`reviews_product_id_d4b78cfe_fk_products_id\` ON \`gogigak_nest\`.\`reviews\``);
        await queryRunner.query(`DROP INDEX \`reviews_user_id_c23b0903_fk_users_id\` ON \`gogigak_nest\`.\`reviews\``);
        await queryRunner.query(`DROP INDEX \`user_coupons_coupon_id_1ca6b254_fk_coupons_id\` ON \`gogigak_nest\`.\`user_coupons\``);
        await queryRunner.query(`DROP INDEX \`user_coupons_user_id_353d52a0_fk_users_id\` ON \`gogigak_nest\`.\`user_coupons\``);
        await queryRunner.query(`DROP INDEX \`orders_coupon_id_a782d700_fk_coupons_id\` ON \`gogigak_nest\`.\`orders\``);
        await queryRunner.query(`DROP INDEX \`orders_status_id_e763064e_fk_order_statuses_id\` ON \`gogigak_nest\`.\`orders\``);
        await queryRunner.query(`DROP INDEX \`orders_user_id_7e2523fb_fk_users_id\` ON \`gogigak_nest\`.\`orders\``);
        await queryRunner.query(`DROP INDEX \`order_items_order_id_412ad78b_fk_orders_id\` ON \`gogigak_nest\`.\`order_items\``);
        await queryRunner.query(`DROP INDEX \`order_items_product_option_id_b1b990eb_fk_products_options_id\` ON \`gogigak_nest\`.\`order_items\``);
        await queryRunner.query(`DROP INDEX \`order_items_status_id_103a14d3_fk_order_item_statuses_id\` ON \`gogigak_nest\`.\`order_items\``);
        await queryRunner.query(`DROP INDEX \`products_options_option_id_85161942_fk_options_id\` ON \`gogigak_nest\`.\`products_options\``);
        await queryRunner.query(`DROP INDEX \`products_options_product_id_f0169358_fk_products_id\` ON \`gogigak_nest\`.\`products_options\``);
        await queryRunner.query(`DROP INDEX \`cart_items_product_options_id_34dd1e75_fk_products_options_id\` ON \`gogigak_nest\`.\`cart_items\``);
        await queryRunner.query(`DROP INDEX \`cart_items_user_id_74745f54_fk_users_id\` ON \`gogigak_nest\`.\`cart_items\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX \`cart_items_user_id_74745f54_fk_users_id\` ON \`gogigak_nest\`.\`cart_items\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`cart_items_product_options_id_34dd1e75_fk_products_options_id\` ON \`gogigak_nest\`.\`cart_items\` (\`product_options_id\`)`);
        await queryRunner.query(`CREATE INDEX \`products_options_product_id_f0169358_fk_products_id\` ON \`gogigak_nest\`.\`products_options\` (\`product_id\`)`);
        await queryRunner.query(`CREATE INDEX \`products_options_option_id_85161942_fk_options_id\` ON \`gogigak_nest\`.\`products_options\` (\`option_id\`)`);
        await queryRunner.query(`CREATE INDEX \`order_items_status_id_103a14d3_fk_order_item_statuses_id\` ON \`gogigak_nest\`.\`order_items\` (\`status_id\`)`);
        await queryRunner.query(`CREATE INDEX \`order_items_product_option_id_b1b990eb_fk_products_options_id\` ON \`gogigak_nest\`.\`order_items\` (\`product_option_id\`)`);
        await queryRunner.query(`CREATE INDEX \`order_items_order_id_412ad78b_fk_orders_id\` ON \`gogigak_nest\`.\`order_items\` (\`order_id\`)`);
        await queryRunner.query(`CREATE INDEX \`orders_user_id_7e2523fb_fk_users_id\` ON \`gogigak_nest\`.\`orders\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`orders_status_id_e763064e_fk_order_statuses_id\` ON \`gogigak_nest\`.\`orders\` (\`status_id\`)`);
        await queryRunner.query(`CREATE INDEX \`orders_coupon_id_a782d700_fk_coupons_id\` ON \`gogigak_nest\`.\`orders\` (\`coupon_id\`)`);
        await queryRunner.query(`CREATE INDEX \`user_coupons_user_id_353d52a0_fk_users_id\` ON \`gogigak_nest\`.\`user_coupons\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`user_coupons_coupon_id_1ca6b254_fk_coupons_id\` ON \`gogigak_nest\`.\`user_coupons\` (\`coupon_id\`)`);
        await queryRunner.query(`CREATE INDEX \`reviews_user_id_c23b0903_fk_users_id\` ON \`gogigak_nest\`.\`reviews\` (\`user_id\`)`);
        await queryRunner.query(`CREATE INDEX \`reviews_product_id_d4b78cfe_fk_products_id\` ON \`gogigak_nest\`.\`reviews\` (\`product_id\`)`);
        await queryRunner.query(`CREATE INDEX \`products_category_id_a7a3a156_fk_categories_id\` ON \`gogigak_nest\`.\`products\` (\`category_id\`)`);
        await queryRunner.query(`CREATE INDEX \`images_product_id_f90b9061_fk_products_id\` ON \`gogigak_nest\`.\`images\` (\`product_id\`)`);
    }

}

import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1624671295960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:"compliments",
                columns: [
                    {
                    name: "id",
                    type: "uuid"
                    },
                    {
                    name: "user_sender",
                    type: "uuid"
                    },
                    {
                    name: "user_receiver",
                    type: "uuid"
                    },
                    {
                    name: "tag_id",
                    type: "uuid"
                    },
                    {
                    name: "message",
                    type: "varchar"
                    },
                    {
                    name: "created_at",
                    type: "Date",
                    default: "now()"
                    },
            ],
            foreignKeys: [
                {
                    name: "FKUserSenderCompliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_sender"],
                    onDelete: "",
                    onUpdate: "",
                },
                {
                    name: "FKUserReceiverCompliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_receiver"],
                    onDelete: "",
                    onUpdate: "",
                },
                {
                    name: "FKtabIdCompliments",
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    columnNames: ["user_sender"],
                    onDelete: "",
                    onUpdate: "",
                }
            ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments")
    }

}

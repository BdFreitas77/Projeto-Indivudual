	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'ID_CADASTRO',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		email: {
			field: 'EMAIL',
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			field: 'SENHA',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'CADASTROS', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};

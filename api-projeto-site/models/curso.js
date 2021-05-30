'use strict';

module.exports = (sequelize, DataTypes) => {
    let Curso = sequelize.define('Curso',{
		id: {
			field: 'ID_INF',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		email_curso: {
			field: 'EMAIL',
			type: DataTypes.STRING,
			allowNull: false
		},
		ytb: {
			field: 'VIDEOS',
			type: DataTypes.STRING,
			allowNull: true
		},
		pdf: {
			field: 'PDFs',
			type: DataTypes.STRING,
			allowNull: true
		},
		insta: {
			field: 'PAGINAS',
			type: DataTypes.STRING,
			allowNull: true
		}
	}, 
	{
		tableName: 'informacoes_curso', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Curso;
};

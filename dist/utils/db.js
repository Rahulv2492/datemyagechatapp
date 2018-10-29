'use strict';

var config = require('./../config/config');
var Sequelize = require('sequelize');

var Op = Sequelize.Op;
var operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

var sequelize = new Sequelize(config.DBNAME, config.DBUSER, config.DBPWD, {
    host: config.DBHOST,
    port: config.DBPORT,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false,
    operatorsAliases: operatorsAliases
});

sequelize.authenticate().then(function () {
    console.log('DB connection has been established successfully.');
}).catch(function (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(0);
});

// uncomment for creating table
sequelize.sync({ force: false, match: /demoDB$/ });

module.exports = sequelize;
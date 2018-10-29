import categoryModel from './../../models/category/category';
import sequelize from './../../utils/db';

module.exports.getAllCategory = () => {
    return new Promise((resolve, reject) => {
        categoryModel.findAll().then((result) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        })
    });
};
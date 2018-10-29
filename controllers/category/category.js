import categorydb from './categorydb';
import logger from './../../utils/logger';
import fs from 'fs';


module.exports.getAllCategory = (req, res) => {
    categorydb.getAllCategory().then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

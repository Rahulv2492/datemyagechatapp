import subcategorydb from './subcategorydb';
import logger from './../../utils/logger';

module.exports.getAllSubcategory = (req, res) => {
    subcategorydb.getAllSubcategory(req.query.categoryId).then((data) => {
        return res.status(200).send({ success: true, data: data });
    }).catch((err) => {
        logger.error(err);
        return res.status(500).send({ success: false, data: err });
    });
};

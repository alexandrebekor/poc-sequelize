const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        title: {
            type: DataTypes.STRING
        }
    })
    return Category
}

module.exports = CategoryModel
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            AllowNull: false
        },
        password: {
            type: DataTypes.STRING,
            AllowNull: false
        },
    });
    /* Users.associate = (models) => {
         Users.hasMany(models.Posts, {
             onDelete: "casacade",
         })
     }*/
    return Users
}
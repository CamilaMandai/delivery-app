import { Model, STRING, INTEGER } from "sequelize";
import db from ".";

class User extends Model {
  id;
  name;
  role;
  email;
  password;
}

User.init(
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    email: {
      type: STRING(100),
      allowNull: false,
    },
    password: {
      type: STRING(32),
      allowNull: false,
    },
    role: {
      type: STRING(20),
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
    modelName: "users",
  }
);

export default User;

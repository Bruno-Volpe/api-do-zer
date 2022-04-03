import Sequileze from 'sequelize'
import databaseConfig from '../config/database'

import Alunos from '../models/Aluno'

const models = [Alunos,]

const connection = new Sequileze(databaseConfig)

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

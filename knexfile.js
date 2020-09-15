const config = require('config');

module.exports = {

  development: {
    client: 'pg',
    debug: config.DEBAG,
    connection: {
        host: config.PGHOST,
        port: config.PGPORT,
        user: config.PGUSER,
        password: config.PGPASSWORD,
        database: config.PGDATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/migrations'
    }
  },

  staging: {
    client: 'pg',
    debug: config.DEBAG,
    connection: {
        host: config.PGHOST,
        port: config.PGPORT,
        user: config.PGUSER,
        password: config.PGPASSWORD,
        database: config.PGDATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server/migrations'
    }
  },

  production: {
    client: 'pg',
    debug: config.DEBAG,
    connection: {
        host: config.PGHOST,
        port: config.PGPORT,
        user: config.PGUSER,
        password: config.PGPASSWORD,
        database: config.PGDATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './server//migrations'
    }
  }
};
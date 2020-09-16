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
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
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
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
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
      directory: './server/migrations'
    },
    seeds: {
      directory: './server/seeds'
    }
  }
};
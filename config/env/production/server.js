module.exports = ({ env }) => ({
  url: env("https://git.heroku.com/jsfca.git"),
  proxy: true,
  app: { keys: env.array("APP_KEYS", ["yourkey1", "yourkey2"]) },
});

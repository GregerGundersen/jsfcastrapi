module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06461212b0993650a28c9923673c3836'),
  },
});

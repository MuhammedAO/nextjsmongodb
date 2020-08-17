module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  env: {
    MONGO_URI:"mongodb+srv://mo:muhammed@cluster0.cti3a.mongodb.net/<dbname>?retryWrites=true&w=majority"
  },
  // target: 'serverless'
};

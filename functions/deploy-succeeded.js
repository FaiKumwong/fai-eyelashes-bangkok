// functions/deploy-succeeded.js
const axios = require('axios')

exports.handler = async function(event, context) {
  try {
    await axios.get(`https://www.google.com/ping?sitemap=${process.env.SITEMAP_URL}`)
    return {
      statusCode: 200,
      body: 'Sitemap submitted successfully'
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Error submitting sitemap'
    }
  }
}

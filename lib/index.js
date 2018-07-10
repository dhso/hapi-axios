'user strict'

const Joi = require('joi')
const Pkg = require('./package.json')
const Axios = require('axios')

const singleOption = Joi.object({
    baseURL: [null, Joi.string().uri({
        scheme: ['http', 'https']
    })],
    timeout: Joi.number().default(10000)
})

async function register(server, pluginOptions) {
    let options
    try {
        options = await singleOption.validate(pluginOptions)
    } catch (err) {
        throw err
    }

    const axios = Axios.create({
        baseURL: options.baseURL,
        timeout: options.timeout
    })

    server.decorate('toolkit', 'axios', axios)
}
exports.plugin = {
    register: register,
    pkg: Pkg
}
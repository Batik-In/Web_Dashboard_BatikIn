const axios = require('axios')

module.exports = {
    async getTemplates(status) {
        const url = 'https://crm.bitbybit.studio/bitcrm/jatis/template'
        const config = {
            url: `${url}/${status}`,
            method: 'GET'
        }
        return axios(config)
    },
    async updateTemplate(data) {
        const url = 'https://crm.bitbybit.studio/bitcrm/jatis/template'
        const config = {
            url: `${url}`,
            method: 'PUT',
            data
        }
        return axios(config)
    }
}
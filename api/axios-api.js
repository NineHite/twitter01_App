import request from '../utils/request'

export default {
    findAll() {
        return request({
            url: `/tweets`,
            method: 'get'
        })
    }
}
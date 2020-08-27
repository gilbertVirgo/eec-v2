import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://eastendchurch.cdn.prismic.io/api/v2'
export const accessToken = 'MC5YekJzU1JJQUFDSUE1UUwx.77-977-9EXtuZyjvv71BNu-_vTTvv73vv73vv711MO-_ve-_ve-_ve-_vX_vv73vv73vv70A77-977-9J0FDMQ'

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}
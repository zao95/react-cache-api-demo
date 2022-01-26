import { CacheApiConfig } from 'react-cache-api'
import { AppProps } from 'next/app'

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <CacheApiConfig baseURL="https://3m2qqcpd39.execute-api.ap-northeast-2.amazonaws.com">
            <Component {...pageProps} />
        </CacheApiConfig>
    )
}

export default app

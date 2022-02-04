import { useCacheApi } from 'react-cache-api'
import Link from 'next/link'

const banana = () => {
    const { data } = useCacheApi('/')

    return (
        <>
            <h2>This page is banana🍌</h2>
            <h4>
                Request api without query
                <br />
                If{' '}
                <em
                    style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                >
                    any query
                </em>{' '}
                has the requested cached data, do not send a request and receive
                cached data.
                <br />
            </h4>
            <Link href="/apple">
                <a>
                    <h4>Go to apple page</h4>
                </a>
            </Link>
            <h3>Data fetching code</h3>
            <div style={{ border: '2px solid #000', padding: 16 }}>
                <p>const &#123;data&#125; = useCacheApi('/')</p>
            </div>
            <h3>Response data</h3>
            <div style={{ border: '2px solid #000', padding: 16 }}>
                <h4>Response data</h4>
                <pre>data: {JSON.stringify(data, undefined, 4)}</pre>
            </div>
        </>
    )
}

export default banana

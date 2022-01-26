import { useCacheApi } from 'react-cache-api'
import Link from 'next/link'

const apple = () => {
    const query = { fruit: 'apple' }
    const { data, error, isValidation } = useCacheApi('/', query)

    return (
        <>
            <h2>This page is apple</h2>
            <h4>Request api with query</h4>
            <Link href="/banana">
                <a>
                    <h4>Go to banana page</h4>
                </a>
            </Link>
            <div style={{ border: '2px solid #000', padding: 16 }}>
                <h4>Response data</h4>
                <pre>data: {JSON.stringify(data, undefined, 4)}</pre>
            </div>
        </>
    )
}

export default apple

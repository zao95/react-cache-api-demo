import { useCacheApi } from 'react-cache-api'
import Link from 'next/link'

const banana = () => {
    const { data, error, isValidation } = useCacheApi('/')

    return (
        <>
            <p>This page is banana</p>
            <p>Request api with query</p>
            <Link href="/apple">
                <a>
                    <p>Go to apple page</p>
                </a>
            </Link>
            <div style={{ border: '2px solid #000', padding: 16 }}>
                <h4>Response data</h4>
                <pre>data: {JSON.stringify(data, undefined, 4)}</pre>
            </div>
        </>
    )
}

export default banana

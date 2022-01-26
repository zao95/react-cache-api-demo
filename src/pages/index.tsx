import Link from 'next/link'

const index = () => {
    return (
        <>
            <h2>This page is index</h2>
            <Link href="/apple">
                <a>
                    <h4>Go to apple page</h4>
                </a>
            </Link>
            <Link href="/banana">
                <a>
                    <h4>Go to banana page</h4>
                </a>
            </Link>
            <Link href="https://github.com/zao95/react-cache-api-demo">
                <a>
                    <h4>View detial code in github repository</h4>
                </a>
            </Link>
            <Link href="https://codesandbox.io/s/zen-forest-0jl9h">
                <a>
                    <h4>View detial code in codesandbox</h4>
                </a>
            </Link>
        </>
    )
}

export default index

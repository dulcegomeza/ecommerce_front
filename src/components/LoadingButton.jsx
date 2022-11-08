import { Button, Spinner } from 'react-bootstrap'

function LoadingButton({ isLoading, text }) {



    return (
        <>
            <Button className="w-100 btn btn-lg btn-blanck-form" variant="dark" type="submit" disabled={isLoading}>
                {isLoading ?
                    <Spinner as="span" variant="light" size="lg" role="status" aria-hidden="true" animation="border" /> : <span>{text}</span>}
            </Button>
        </>
    )
}

export default LoadingButton
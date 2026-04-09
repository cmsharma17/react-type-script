
type StatusProps = {
    status: 'loading' | 'success' | 'error'

}

export function Status(props: StatusProps) {
    let message;
    if(props.status === 'loading'){
        message = 'loading...';
    }else if (props.status === 'success'){
        message = 'Data Fetched successfully'
    }else if( props.status === 'error'){
        message = 'Error Fetchign Data'
    }
    return (
        <div>
            <h2>Status : {message}</h2>
        </div>
    )
}
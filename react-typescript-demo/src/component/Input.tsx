type InputProps = {
    value: string,
    handleChnage: (event: React.ChangeEvent<HTMLInputElement>)=> void
}
export function Input(props: InputProps){

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event);
    }

    return(<input type="text" value={props.value} onChange={props.handleChnage}></input>)
}
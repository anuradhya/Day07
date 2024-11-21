export default function Childcom(props){
    return(
        <>
        <h3>Hello React I'm Childcom</h3>
        {
            props.setfun("My name is Anuradhya")
        }
        </>
    );
}
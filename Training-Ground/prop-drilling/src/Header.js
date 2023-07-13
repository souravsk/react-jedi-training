//here we are getting the prop which is title we can also user props keyword and then access it also.
const Header = ({title}) =>{
    return(
        <header>
            <h1>{title}</h1>
        </header>
    );
}
Header.defaultProps = {
    title:"Start war loved moves"
}
export default Header

//as you can see the we have the a defaultProps which is will use when the parent componets did't send any data
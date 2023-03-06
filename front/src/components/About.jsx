import styled from "styled-components";

const Ulist = styled.ul`
display: flex;
justify-content: center;
max-width: 100%;

`;
const Insta = styled.div`
margin: 10px;
display: flex;
width: 150px;
align-content: center;
border: 2px solid white;
border-radius: 10px;
padding: 10px;
justify-content: center;
background: rgba(255, 255, 255, 0.4);
box-shadow: 0 0 15px #FFFFFF;
&:hover {
    box-shadow: 0 0 60px #FFFFFF;
    background: rgba(255, 255, 255, 0.9);
    
 }
`;
const IgLogo = styled.img`
max-width: 50px;
`;
const Text = styled.span`
font-size: 20px;
`;
export default function About (){

    return <div>
        <h1 style={{color: "white", textShadow: "0 0 15px"}}>MADE BY:</h1>
        <h2 style={{color: "white", textShadow: "0 0 15px"}}>Valentin Herrera</h2>
        <Ulist>
            <Insta><a href="https://www.instagram.com/valentindlr1" style={{alignContent: "center", display: "flex", justifyContent: "space-between", width: "95%", flexWrap: "wrap"}}><Text>Instagram</Text><IgLogo alt="instaLogo" src="https://1000marcas.net/wp-content/uploads/2019/11/Instagram-Logo.png"/></a></Insta>
            <Insta><a href="https://github.com/valentindlr1" style={{alignContent: "center", display: "flex", justifyContent: "space-between", width: "90%"}}><Text>GitHub</Text><IgLogo alt="gitLogo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a></Insta>
        </Ulist>
    </div>
}
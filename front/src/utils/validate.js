
export default function validate(inputs){
    let errors = {};
    const regexEmail = (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    if (!regexEmail.test(inputs.user) || inputs.user === "" || inputs.user.length > 35){
         errors = {
            ...errors,
            user: "Ingresa un email válido",
         }
        }
    
    if (inputs.pass.length < 6 || inputs.pass.length > 10 || !/\d/.test(inputs.pass)) {
        errors = {
            ...errors,
            pass: "Ingresa una contraseña válida" ,
        }
    }
    return errors;
}
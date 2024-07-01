
function generatePassword (password_len,include_lowercase,include_uppercase,include_numbers,include_symbols){
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()-_=+[{]}|;:,<.>/?'

    allowedchars = "";
    letpassword = "";

    allowedchars += include_lowercase ? lowercase : "";
    allowedchars += include_uppercase ? uppercase : "";
    allowedchars += include_numbers ? numbers : "";
    allowedchars += include_symbols ? symbols : "";

    if(password_len <=0){
        return `(Password length must be atleast 1)`
    }
    if (allowedchars.length === 0){
        return `(Atleast one character type must be selected)`
    }

    for(let i = 0; i < password_len; i++){
        const rand = Math.floor(Math.random() * allowedchars.length)
        letpassword += allowedchars[rand];
    }

    return letpassword;
}

const password_len = 12;
const include_lowercase = true;
const include_uppercase = true;
const include_numbers = true;
const include_symbols = true;

password = generatePassword(password_len, include_lowercase, include_uppercase, include_numbers, include_symbols)
console.log(`Generated Password: ${password}`);

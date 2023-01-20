// Write functions to determine the following credit card information, should return the name of the credit card types

// visa - len: 16; prefixes: 42, 46
// mastercard - len: 14, 15, prefixes: 52-56

// the best way to write this is to break out the functions needed for each steps in the validation of the credit card type


// Create an object to store the credit card validation details

const creditCardBrands = {
    visa: {
        creditCardName: 'visa',
        length: [ 16 ],
        prefixes: [ 42, 46 ]
    },
    masterCard: {
        creditCardName: 'mastercard',
        length: [14, 15],
        prefixes: [52, 53, 54, 55, 56]
    }
}

// break down the credit card validation process


// function signature: function validateCreditCardNumber(creditCardNumber): string

// consider how to do this ???
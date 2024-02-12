export function validateCanadianPhoneNumber(phoneNumber) {
    // Regular expression for Canadian phone number pattern
    var pattern = /^\d{3}-\d{3}-\d{4}$/;
    
    // Check if the provided phone number matches the pattern
    if (pattern.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
}

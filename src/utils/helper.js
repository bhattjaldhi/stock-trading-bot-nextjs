export function displayInitials(fullName) {
    // Split the full name into an array of parts
    const nameParts = fullName.split(" ");

    // Extract the first character of the first name
    const firstNameInitial = nameParts[0].charAt(0);

    // Extract the first character of the last name
    const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);

    // Combine the initials
    const initials = firstNameInitial + lastNameInitial;

    return initials;
}

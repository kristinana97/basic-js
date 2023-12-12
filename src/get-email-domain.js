const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    // Using regular expression to extract the domain from the email address
    const domainRegex = /@([a-zA-Z0-9.-]+)$/;
    const match = email.match(domainRegex);

    // Check if a match is found
    if (match) {
        return match[1];
    } else {
        // If no match is found, return an empty string or handle it as you see fit
        return '';
    }
}

module.exports = {
  getEmailDomain
};

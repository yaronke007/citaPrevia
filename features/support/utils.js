/**
 * Utility functions file
 */

const sleep = time => new Promise(r => setTimeout(r, time));

module.exports = { sleep };
// Prints the current Unix timestamp in milliseconds as Base 36 characters (a-z 0-9).
//
// This is useful for generating compact, human-readable timestamps that can be
// easily compared or sorted.
// 
// In studio-public we use them as filename prefixes to make resource URLs
// impossible to guess.
console.log(Date.now().toString(36));

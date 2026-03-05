function processText(input) {
  if (typeof input !== 'string') return '';

  let processed = input;

  processed = processed.replace(/''/g, "'");
  processed = processed.replace(/[\u{1F300}-\u{1FAFF}]/gu, '');
  processed = processed.replace(/[!?.,]{2,}/g, '');
  processed = processed.replace(/\s+/g, ' ').trim();

  processed = processed.toLowerCase();

  processed = processed.replace(/\bi\b/g, 'I');
  processed = processed.replace(/\bi'm\b/g, "I'm");
  processed = processed.replace(/\bi've\b/g, "I've");
  processed = processed.replace(/\bi'll\b/g, "I'll");
  processed = processed.replace(/\bi'd\b/g, "I'd");

 
  processed = processed.replace(
    /(^|[.!?]\s+)([a-z])/g,
    (match, separator, letter) => separator + letter.toUpperCase()
  );

  return processed;
}

module.exports = { processText };